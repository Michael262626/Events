"use client";

import React, { useEffect, useState } from "react";

const Countdown = () => {
  const targetDate = new Date("2025-03-01T09:00:00"); // Set your event date

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());
  const [mounted, setMounted] = useState(false); // State to track if component is mounted

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [mounted]);

  if (!mounted) return null; // Prevent rendering until after mounting

  return (  
    <div className="flex flex-col sm:flex-row justify-center gap-14 text-white">  
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">  
        {Object.entries(timeLeft).map(([key, value]) => (  
          <div key={key} className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2">  
            <p  
              className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text  
                bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse"  
            >  
              {String(value).padStart(2, "0")}  
            </p>  
            <p className="text-sm sm:text-lg font-medium capitalize">{key}</p>  
          </div>  
        ))}  
      </div>  
    </div>  
  );
};

export default Countdown;
