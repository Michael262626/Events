"use client";

import React, { useState } from "react";

const AlternatePayment: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      setMessage("Please select a file to upload.");
      return;
    }

    setUploading(true);

    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append("paymentProof", file);

    try {
      const response = await fetch("/api/payment-proof", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("Payment proof submitted successfully!");
      } else {
        setMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setMessage("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-semibold mb-4">Alternate Payment Method</h2>
      
      {/* Payment Account Details */}
      <div className="mb-8">
        <h3 className="text-xl font-medium">Our Bank Account Details</h3>
        <p>Account Name: Advance Music Conference</p>
        <p>Account Number: 123456789</p>
        <p>Bank: XYZ Bank</p>
        {/* Add additional details as needed */}
      </div>

      {/* File Upload Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <label className="block mb-2 font-medium">
          Upload proof of payment (image or PDF):
        </label>
        <input 
          type="file" 
          accept="image/*,application/pdf" 
          onChange={handleFileChange} 
          className="mb-4 p-2 border rounded w-full"
        />
        <button 
          type="submit" 
          disabled={uploading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {uploading ? "Uploading..." : "Submit Proof"}
        </button>
      </form>

      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default AlternatePayment;
