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

// branding data
export const brandingData = [
  {
    id: 1,
    title: "Free Shipping",
    Description: "From all orders over 100$",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H5.63636V24.1818H35"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
        <path
          d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
        <path
          d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
        <path
          d="M34.9982 1H11.8164V18H34.9982V1Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
        <path
          d="M11.8164 7.18164H34.9982"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Solar Discounts",
    Description: "Save up to 25% off",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
        ></path>
        <path
          d="M30.7 2L29.5 10.85L20.5 9.65"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Cost-Effective Solutions",
    Description: "Budget-friendly solar options",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
        ></path>
        <path
          d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
        ></path>
        <path
          d="M16 28V22"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
        ></path>
        <path
          d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
        <path
          d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Secure Solar Financing",
    Description: "Flexible and secure payment plans",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
        <path
          d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
        <path
          d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
      </svg>
    ),
  },
];

// categories data
const categoriesData = [
  {
    id: 1,
    title: "Residential Solar Solutions",
    subTitle: "Rooftop solar panels, energy storage, water heaters",
    image_Url: "../Assets/residentialSolarImage.jpg",
  },
  {
    id: 2,
    title: "Community Solar Projects",
    subTitle: "Community-based initiatives, shared solar projects",
    image_Url: "../Assets/commercialSolarImage.jpg",
  },

  {
    id: 3,
    title: "Industrial Solar Solutions",
    subTitle:
      "Large-scale installations, industrial processes, energy management",
    image_Url: "industrial-solar-image-url.jpg",
  },
  {
    id: 4,
    title: "Agricultural Solar Solutions",
    subTitle: "Solar-powered irrigation, water pumps, farm solutions",
    image_Url: "agricultural-solar-image-url.jpg",
  },
  {
    id: 5,
    title: "Solar Energy Storage",
    subTitle: "Battery solutions, off-grid systems, backup power",
    image_Url: "solar-energy-storage-image-url.jpg",
  },
  {
    id: 6,
    title: "Commercial Solar Solutions",
    subTitle: "Solar installations, financing, energy-efficient solutions",
    image_Url: "commercial-solar-image-url.jpg",
  },
  {
    id: 7,
    title: "Solar Financing and Incentives",
    subTitle: "Financing options, incentives, tax credits, rebates",
    image_Url: "solar-financing-image-url.jpg",
  },

  {
    id: 8,
    title: "Solar Maintenance and Support",
    subTitle: "Maintenance services, troubleshooting, customer support",
    image_Url: "solar-maintenance-image-url.jpg",
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

export { solarProducts, vendors, user, cart, wishlist, orders, categoriesData };
