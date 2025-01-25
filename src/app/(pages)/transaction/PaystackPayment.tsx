"use client";

import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import JsBarcode from "jsbarcode";
import { useToast } from "@/hooks/use-toast";

import { usePaystackPayment } from "react-paystack";

const PaystackPayment: React.FC = () => {
  const [userDetails, setUserDetails] = useState({ email: "", fullName: "", phoneNumber: "" });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState<number | "">(0); // State for the amount input

  const { toast } = useToast();
  const publicKey = process.env.NEXT_PUBLIC_PAY_STACK_KEY!;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedDetails = sessionStorage.getItem("userDetails");
      if (storedDetails) {
        setUserDetails(JSON.parse(storedDetails));
      }
    }
  }, []);

  const { email, fullName, phoneNumber } = userDetails;

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value === "" ? "" : parseInt(value, 10)); // Allow clearing input
  };

  const generateTicket = (reference: string) => {
    const doc = new jsPDF();
    const logoUrl = "/assets/Brand_logo_2[1].png"; // Use relative URL

    // Add logo as a watermark
    const imgWidth = 50;
    const imgHeight = 50;
    const imgX = (doc.internal.pageSize.width - imgWidth) / 2;

    doc.addImage(logoUrl, "PNG", imgX, 10, imgWidth, imgHeight, undefined, "FAST");

    // Add ticket details
    doc.setFontSize(16);
    doc.text("Payment Receipt", 105, 80, { align: "center" });

    doc.setFontSize(12);
    doc.text(`Reference: ${reference}`, 20, 100);
    doc.text(`Email: ${email}`, 20, 110);
    doc.text(`Full Name: ${fullName}`, 20, 120);
    doc.text(`Phone Number: ${phoneNumber}`, 20, 130);
    doc.text(`Amount: ₦${amount}`, 20, 140);

    // Generate barcode
    const canvas = document.createElement("canvas");
    JsBarcode(canvas, reference, { format: "CODE128" });
    const barcode = canvas.toDataURL("image/png");

    // Add barcode to the PDF
    doc.addImage(barcode, "PNG", 20, 150, 100, 40);

    // Save the PDF
    doc.save(`Payment_Receipt_${reference}.pdf`);
  };

  const handlePayment = () => {
    if (!amount || amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount to proceed.",
      });
      return;
    }

    setLoading(true);

    const config = {
      reference: `${new Date().getTime()}`, // Unique transaction reference
      email,
      amount: amount ? amount * 100 : 0, // Convert amount to kobo
      publicKey,
    };

    const initializePayment = usePaystackPayment(config); // Initialize payment here

    initializePayment({
      onSuccess: async (reference: { reference: string }) => {
        setSuccess(true);
        setLoading(false);

        try {
          const response = await fetch("/api/verify-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ reference: reference.reference }),
          });

          if (!response.ok) {
            throw new Error("Failed to verify payment.");
          }

          const result = await response.json();
          if (result.status === "success") {
            toast({
              title: "Success",
              description: "Payment verified and processed successfully!",
            });

            // Generate ticket
            generateTicket(reference.reference);
          } else {
            toast({
              title: "Verification Failed",
              description: "Payment verification failed. Please contact support.",
            });
          }
        } catch (error) {
          toast({
            title: "Error",
            description: "An error occurred while processing this transaction. Please try again!",
          });
        }
      },
      onClose: () => setLoading(false),
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 p-4 sm:p-6">
      <div className="w-full max-w-xs sm:max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4 sm:p-6 space-y-4 sm:space-y-6">
        <h2 className="text-lg sm:text-xl font-semibold text-white text-center">
          Pay with Paystack
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 text-center">
          Enter the amount below to proceed with payment.
        </p>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount === "" ? "" : amount}
          onChange={handleAmountChange}
          className="w-full px-3 sm:px-4 py-2 border border-gray-600 bg-gray-900 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
        />
        <button
          onClick={handlePayment}
          disabled={loading || !amount}
          className={`w-full px-4 sm:px-6 py-2 sm:py-3 font-medium rounded-md transition ${
            loading || !amount
              ? "bg-gray-600 cursor-not-allowed text-gray-400"
              : "bg-purple-600 text-white hover:bg-purple-700"
          }`}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
        {success && (
          <p className="text-center text-green-400 font-medium text-sm">
            Payment was successful. Ticket generated!
          </p>
        )}
      </div>
    </div>
  );
};

export default PaystackPayment;
