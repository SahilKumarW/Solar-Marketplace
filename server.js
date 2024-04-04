const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs'); // Require bcrypt.js library

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "energy_matrix",
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Routes
app.post('/Signup', async (req, res) => {
    const { email, fullName, password } = req.body;

    try {
        // Check if user already exists in the database
        const checkUserSql = 'SELECT COUNT(*) AS count FROM customers WHERE Email = ?';
        const [rows] = await db.promise().query(checkUserSql, [email]);

        // If user with the same email already exists, return error
        if (rows[0].count > 0) {
            console.error('User already exists');
            res.status(400).json({ error: 'User already exists' });
            return;
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // Salt rounds: 10

        // Insert user data into the database
        const insertUserSql = 'INSERT INTO customers (Email, FullName, Password) VALUES (?, ?, ?)';
        await db.promise().query(insertUserSql, [email, fullName, hashedPassword]);

        console.log('User registered successfully');
        res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Error registering user' });
    }
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Perform authentication logic
    // Check if email and password match in the database
    // Return appropriate response based on authentication result
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});