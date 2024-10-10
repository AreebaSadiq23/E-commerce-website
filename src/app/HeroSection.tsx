import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-pink-400 to-pink-300 text-white py-20 px-6 md:px-10">
      <div className="absolute inset-0 z-0 flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/2 h-56 md:h-full">
          <Image
            src="/img3.png"
            alt="Fashion Lifestyle Left"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
        <div className="relative w-full md:w-1/2 h-56 md:h-full">
          <Image
            src="/image1.png"
            alt="Fashion Lifestyle Right"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
      </div>
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 md:px-0">
        <p className="text-2xl sm:text-3xl font-semibold italic" style={{ fontFamily: 'Dancing Script, cursive' }}>
          Big Discount
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold mt-2">
          Fashion Lifestyle
        </h2>
        <p className="mt-4 text-base sm:text-lg italic">
          Discover the latest trends and styles to elevate your wardrobe. Don&apos;t
          miss out on exclusive offers!
        </p>
        <div className="mt-4 flex flex-col items-center">
          <div className="bg-pink-600 text-white py-1 px-4 mb-2 w-60 sm:w-72 text-center mt-3">
            Save up to 40% Off on First Order
          </div>
        </div>

        <button className="mt-6 bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
