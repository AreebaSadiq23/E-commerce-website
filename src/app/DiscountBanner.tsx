"use client";
import { useState, useEffect } from "react";

const offers = [
  { id: 1, text: "Get 20% off on all new arrivals!", code: "NEW20" },
  { id: 2, text: "Buy 1 Get 1 Free on selected items!", code: "B1G1" },
  { id: 3, text: "Free shipping on orders over $50!", code: "FREESHIP" },
];

const DiscountBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === offers.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-yellow-200 text-black py-4">
      <div className="container mx-auto px-4">
        <div className="text-center font-bold text-lg">
          <span className="transition-opacity duration-500 ease-in-out">
            {offers[currentIndex].text}
          </span>
          <span className="ml-4 bg-black text-white px-2 py-1 rounded">
            Code: {offers[currentIndex].code}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
