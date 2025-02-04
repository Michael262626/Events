"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { cn } from "@/lib/utils";
import { FaCloudUploadAlt } from "react-icons/fa"; // Upload Icon

const SelarPayment: React.FC = () => {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<"online" | "bank">("online");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("paymentProof", file);

    setUploading(true);
    setMessage("");

    try {
      const response = await axios.post("/api/payment-proof", formData);
      setMessage("Payment proof uploaded successfully!");
    } catch (error) {
      setMessage("Error uploading payment proof. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-br from-black to-black text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Complete Your Payment</h1>

      {/* Payment Method Tabs */}
      <div className="flex space-x-4 border-b border-gray-600 pb-2 mb-6 w-full max-w-md">
        <button
          className={cn(
            "py-2 px-4 text-lg font-medium transition-all w-1/2 text-center",
            paymentMethod === "online" ? "border-b-2 border-purple-500 text-purple-400" : "text-gray-400"
          )}
          onClick={() => setPaymentMethod("online")}
        >
          Pay Online
        </button>
        <button
          className={cn(
            "py-2 px-4 text-lg font-medium transition-all  w-1/2 text-center",
            paymentMethod === "bank" ? "border-b-2 border-purple-500 text-purple-400" : "text-gray-400"
          )}
          onClick={() => setPaymentMethod("bank")}
        >
          via Bank Transfer
        </button>
      </div>

      {/* Online Payment Redirect */}
      {paymentMethod === "online" ? (
        <div className="flex flex-col items-center space-y-4">
          <p className="text-lg">Click below to proceed with online payment:</p>
          <a
            href="https://selar.co/m/advancemusicconference"
            className="px-6 py-3 bg-purple-600 rounded-lg text-white font-semibold hover:bg-purple-700 transition"
          >
            Proceed to Online Payment
          </a>
        </div>
      ) : (
        // Bank Transfer Details & Upload
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4 text-center">Bank Transfer Details</h2>
          <div className="mb-6 text-sm space-y-2">
            <p>
              <span className="font-medium">Account Name:</span> Advance Music Conference
            </p>
            <p>
              <span className="font-medium">Account Number:</span> 1220051138
            </p>
            <p>
              <span className="font-medium">Bank:</span> Ecobank
            </p>
          </div>

          {/* File Upload Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-sm font-medium">Upload proof of payment:</label>

            <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-500 rounded-lg p-4 cursor-pointer hover:border-purple-400 transition">
              <FaCloudUploadAlt className="text-4xl text-purple-400" />
              <span className="mt-2 text-sm text-gray-300">{file ? file.name : "Click to upload image"}</span>
              <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
              />

            </label>

            <button
              type="submit"
              disabled={uploading}
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              {uploading ? "Uploading..." : "Submit Proof"}
            </button>
          </form>

          {message && <p className="mt-4 text-center text-sm text-gray-300">{message}</p>}
        </div>
      )}
    </div>
  );
};

export default SelarPayment;
