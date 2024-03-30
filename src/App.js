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
  CheckoutPage,
  ProductDetailsPage,
  ProfilePage,
} from "./Routes.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/vendor" element={<VendorRegistrationPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/solarPackages" element={<SolarPackagesPage />} />
        <Route path="/contactUs" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
