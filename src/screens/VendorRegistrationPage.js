// src/components/VendorRegistrationPage.js
import React, { useState } from "react";
import "../styles/VendorRegistrationPage.css"; // Import the CSS file for VendorRegistrationPage

const VendorRegistrationPage = () => {
  const [companyName, setCompanyName] = useState("");
  const [contactPersonName, setContactPersonName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [businessLicense, setBusinessLicense] = useState(null); // Use state to handle file upload
  const [vatNumber, setVatNumber] = useState("");

  const handleRegistration = () => {
    // Perform your registration logic here
    console.log("Company Name:", companyName);
    console.log("Contact Person Name:", contactPersonName);
    console.log("Contact Email:", contactEmail);
    console.log("Contact Number:", contactNumber);
    console.log("Company Address:", companyAddress);
    console.log("Business License:", businessLicense); // Handle file upload logic
    console.log("VAT Number:", vatNumber);
    // You may want to redirect the user or perform other actions after successful registration
  };

  return (
    <div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
          Vendor Registration
        </h2>
      </div>
      <div className="registration-container">
        <form>
          <label>Company Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />

          <label>Contact Person Name:</label>
          <input
            type="text"
            value={contactPersonName}
            onChange={(e) => setContactPersonName(e.target.value)}
            required
          />

          <label>Contact Email:</label>
          <input
            type="email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            required
          />

          <label>Contact Number:</label>
          <input
            type="tel"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />

          <label>Company Address:</label>
          <input
            type="text"
            value={companyAddress}
            onChange={(e) => setCompanyAddress(e.target.value)}
            required
          />

          <label>Business License (Upload):</label>
          <input
            type="file"
            onChange={(e) => setBusinessLicense(e.target.files[0])}
            accept=".pdf, .doc, .docx"
          />

          <label>VAT Number (if applicable):</label>
          <input
            type="text"
            value={vatNumber}
            onChange={(e) => setVatNumber(e.target.value)}
          />

          <div>
            <button
              type="button"
              className="custom-button"
              onClick={handleRegistration}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorRegistrationPage;
