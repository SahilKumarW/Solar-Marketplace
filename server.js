const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs'); // Require bcrypt.js library

const app = express();
const port = process.env.PORT || 3001;

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

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists in the database
        const getUserSql = 'SELECT * FROM customers WHERE Email = ?';
        const [rows] = await db.promise().query(getUserSql, [email]);

        // If no user found with the provided email, return error
        if (rows.length === 0) {
            console.error('User not found');
            res.status(404).json({ error: 'User not found' });
            return;
        }

        // Compare the provided password with the stored hashed password
        const hashedPassword = rows[0].Password;
        const passwordMatch = await bcrypt.compare(password, hashedPassword);

        // If passwords don't match, return error
        if (!passwordMatch) {
            console.error('Incorrect password');
            res.status(401).json({ error: 'Incorrect password' });
            return;
        }

        // If authentication successful, return success message
        console.log('Login successful');
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Error during login' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
