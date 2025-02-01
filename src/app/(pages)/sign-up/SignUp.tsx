"use client";

import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const SignUpPage: React.FC = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    role: "", // New field for dropdown selection
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async () => {
    try {
      console.log("Sending request to /api/signup with data:", formData);
      const response = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem("userDetails", JSON.stringify(data.user));

        toast({
          title: "Sign Up successful!",
          description: "You are now signed up. Redirecting to the transaction page.",
        });
        router.push("/transaction");
      } else {
        const errorData = await response.json();
        toast({
          title: "Sign up failed",
          description: errorData.message || "Something went wrong.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <form
        className="bg-[#0A0712] p-6 sm:p-8 rounded shadow-md w-full sm:w-[35%] mx-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp();
        }}
      >
        <h1 className="text-2xl font-bold mb-4 text-center text-white">Sign Up</h1>

        {/* Full Name */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-400">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-400">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* 🎵 Select Role Dropdown */}
        <div className="mb-4">
          <label htmlFor="role" className="block text-sm font-medium text-gray-400">
            Select Your Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="" disabled>Select an option</option>
            <option value="Instrumentalist">Instrumentalist</option>
            <option value="Vocalist">Vocalist</option>
            <option value="Music Enthusiast">Music Enthusiast</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-[#B30D5C] text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
