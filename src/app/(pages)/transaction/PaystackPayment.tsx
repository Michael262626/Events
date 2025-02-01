"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const SelarPayment: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect the user immediately to the Selar payment page
    window.location.href = "https://selar.co/m/advancemusicconference";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold text-white text-center">
        Redirecting to payment...
      </h2>
    </div>
  );
};

export default SelarPayment;
