"use client";  

import React, { useEffect, useState } from "react";  

interface EventListCountProps {  
  counts: {  
    count: number;  
    label: string;  
  }[];  
}  

const EventListCount: React.FC<EventListCountProps> = ({ counts }) => {  
  return (  
    <div className="bg-black text-white py-8 md:py-12">  
      <div className="container mx-auto px-4">  
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">  
          {counts.map((item, index) => (  
            <CounterCard key={index} count={item.count} label={item.label} />  
          ))}  
        </div>  
      </div>  
    </div>  
  );  
};  

interface CounterCardProps {  
  count: number;  
  label: string;  
}  

const CounterCard: React.FC<CounterCardProps> = ({ count, label }) => {  
  const [displayCount, setDisplayCount] = useState(0);  
  const [mounted, setMounted] = useState(false);  

  useEffect(() => {  
    setMounted(true);  
  }, []);  

  useEffect(() => {  
    let start = 0;  
    const duration = 1000; // 1 second  
    const increment = count / (duration / 10); // Increment per 10ms  

    const interval = setInterval(() => {  
      start += increment;  
      if (start >= count) {  
        setDisplayCount(count);  
        clearInterval(interval);  
      } else {  
        setDisplayCount(Math.ceil(start));  
      }  
    }, 10);  

    return () => clearInterval(interval);  
  }, [count]);  

  const [firstWord, ...remainingWords] = label.split(" ");  

  return (  
    <div className="text-center">  
      <h2 className="text-4xl md:text-6xl font-extrabold text-pink-500 flex items-center justify-center">  
        {displayCount}  
        <span className="ml-1 text-xs md:text-sm font-semibold text-gray-300">  
          <span className="block">{firstWord}</span>  
          <span className="block">{remainingWords.join(" ")}</span>  
        </span>  
      </h2>  
    </div>  
  );  
};  

export default EventListCount;