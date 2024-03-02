// Sample data for products
const solarProducts = [
  {
    id: 1,
    name: "Solar Panel A",
    description: "High-efficiency solar panel for residential use.",
    specifications: "Capacity: 300W, Size: 60x40 inches",
    price: 200,
    quantity: 50,
    image: "solar-panel-a.jpg",
  },
  {
    id: 2,
    name: "Solar Inverter B",
    description: "Smart inverter with real-time monitoring.",
    specifications: "Capacity: 5kW, Type: On-grid",
    price: 500,
    quantity: 30,
    image: "solar-inverter-b.jpg",
  },
  {
    id: 3,
    name: "Solar Battery C",
    description: "Long-lasting lithium-ion battery for solar storage.",
    specifications: "Capacity: 10kWh, Voltage: 48V",
    price: 800,
    quantity: 20,
    image: "solar-battery-c.jpg",
  },
  // Add more product entries as needed
];

// navigation Data
export const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Solar Packages",
    url: "/best-selling",
  },
  {
    title: "Products",
    url: "/products",
  },
  {
    title: "Contact Us",
    url: "/events",
  },
  {
    title: "FAQ",
    url: "/faq",
  },
];
// Sample data for vendors
const vendors = [
  {
    id: 1,
    companyName: "SunPower Solar Solutions",
    logo: "sunpower-logo.png",
    contactPerson: "John Doe",
    email: "john.doe@sunpower.com",
    phoneNumber: "123-456-7890",
    address: "123 Solar Street, Sunny City",
    businessLicense: "business-license-sunpower.pdf",
    vatNumber: "VAT123456",
  },
  {
    id: 2,
    companyName: "EcoSolar Technologies",
    logo: "ecosolar-logo.png",
    contactPerson: "Jane Smith",
    email: "jane.smith@ecosolar.com",
    phoneNumber: "987-654-3210",
    address: "456 Renewable Avenue, Green Town",
    businessLicense: "business-license-ecosolar.pdf",
    vatNumber: "VAT789012",
  },
  // Add more vendor entries as needed
];

// Sample data for user
const user = {
  id: 1,
  fullName: "Alice Smith",
  email: "alice.smith@gmail.com",
  // Add more user details as needed
};

// Sample data for cart and wishlist
const cart = [
  {
    productId: 1,
    quantity: 2,
  },
  {
    productId: 3,
    quantity: 1,
  },
  // Add more cart entries as needed
];

const wishlist = [
  {
    productId: 2,
  },
  {
    productId: 3,
  },
  // Add more wishlist entries as needed
];

// Sample data for orders
const orders = [
  {
    id: 1,
    products: [
      {
        productId: 1,
        quantity: 1,
      },
      {
        productId: 3,
        quantity: 2,
      },
      // Add more product entries as needed
    ],
    totalPrice: 1400,
    orderDate: "2024-03-01",
    status: "Delivered",
  },
  {
    id: 2,
    products: [
      {
        productId: 2,
        quantity: 1,
      },
      // Add more product entries as needed
    ],
    totalPrice: 500,
    orderDate: "2024-03-05",
    status: "Shipped",
  },
  // Add more order entries as needed
];

export { solarProducts, vendors, user, cart, wishlist, orders };
