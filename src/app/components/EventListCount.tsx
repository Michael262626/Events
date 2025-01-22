"use client"

import React, { useEffect, useState } from 'react';

interface EventListCountProps {
  counts: {
    count: number;
    label: string;
  }[];
}

const EventListCount: React.FC<EventListCountProps> = ({ counts }) => {
  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center space-y-6 sm:space-y-0 sm:space-x-12">
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
    <div className="">
      <h2 className="text-7xl font-extrabold text-pink-500 flex items-center justify-center">
        {displayCount}
        <span className="ml-2 text-lg font-semibold text-gray-300">
          <span className="block">{firstWord}</span>
          <span className="block">{remainingWords.join(" ")}</span>
        </span>
      </h2>
    </div>
  );
};

export default EventListCount;
