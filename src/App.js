import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  HomePage,
  VendorRegistrationPage,
} from "./Routes.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/vendor" element={<VendorRegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
