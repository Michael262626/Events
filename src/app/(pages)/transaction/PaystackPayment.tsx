"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { FaCloudUploadAlt } from "react-icons/fa"; // Upload Icon

const SelarPayment: React.FC = () => {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<"online" | "bank">("online");
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadCloudinary = () => {
      if (typeof window !== "undefined" && !(window as any).cloudinary) {
        const script = document.createElement("script");
        script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
        script.async = true;
        script.onload = () => console.log("Cloudinary widget loaded");
        document.body.appendChild(script);
      }
    };
    loadCloudinary();
  }, []);

  const handleUpload = async () => {
    if (typeof window !== "undefined" && (window as any).cloudinary) {
      const cloudinary = (window as any).cloudinary;
      cloudinary.openUploadWidget(
        { cloudName: "ddpzhay3j", uploadPreset: "c9uddlmc" },
        async (error: any, result: any) => {
          if (!error && result.event === "success") {
            setUploadedUrl(result.info.secure_url);
            setMessage("Upload successful!");
  
            // Get user ID (Replace with actual logic)
            const userDetails = JSON.parse(sessionStorage.getItem("userDetails") || "{}");
            console.log("Retrieved User Details:", userDetails);

          await fetch("/api/payment-proof", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId: userDetails?.id || "", 
                fileUrl: result.info.secure_url,
                status: "pending", // Default status
              }),
          });
            setTimeout(() => {
              router.push("/");
            }, 2000);
          } else {
            setMessage("Upload failed. Please try again.");
          }
        }
      );
    } else {
      setMessage("Upload service unavailable.");
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
            "py-2 px-4 text-lg font-medium transition-all w-1/2 text-center",
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

          {/* Cloud Upload Button */}
          <div className="space-y-4">
            <button
              onClick={handleUpload}
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition flex items-center justify-center"
              disabled={uploading}
            >
              <FaCloudUploadAlt className="mr-2" />
              {uploading ? "Uploading..." : "Upload Proof of Payment"}
            </button>

            {uploadedUrl && (
              <p className="text-green-400 text-center text-sm">
                Upload successful! Proof URL:{" "}
                <a href={uploadedUrl} target="_blank" rel="noopener noreferrer" className="underline">
                  View
                </a>
              </p>
            )}

            {/* {message && <p className="mt-4 text-center text-sm text-gray-300">{message}</p>} */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelarPayment;
