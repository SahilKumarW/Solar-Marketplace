import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  HomePage,
  VendorRegistrationPage,
  ProductPage,
  SolarPackagesPage,
  ContactPage,
  FaqPage,
  ProductDetailsPage,
} from "./Routes.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/vendor" element={<VendorRegistrationPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:name" element={<ProductDetailsPage />} />
        <Route path="/solarPackages" element={<SolarPackagesPage />} />
        <Route path="/contactUs" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
