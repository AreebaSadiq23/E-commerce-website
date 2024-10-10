import React from "react";
import Image from "next/image";

const NewArrivals: React.FC = () => {
  return (
    <section className="py-16 relative bg-gradient-to-r from-cyan-200 to-cyan-300 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-yellow-300 opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-pink-300 opacity-40 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Section*/}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-800 tracking-wide">
            New Arrivals
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl lg:text-2xl max-w-lg mx-auto lg:mx-0 leading-relaxed"style={{ fontFamily: 'Dancing Script, cursive' }}>
            Discover the latest trends and collections, perfect for every style. Update your wardrobe today!
          </p>
          <div className="space-y-4">
            {/* Sales Banner */}
            <div className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-2 px-4 rounded-lg text-center">
              🎉 Limited Time Offer: 30% Off on First Order! 🎉
            </div>
            {/* Button Container */}
            <div className="flex justify-center">
              <button className="py-3 px-8 bg-yellow-500 text-white shadow-md hover:bg-yellow-600">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/img 2.png" 
            alt="New Arrivals"
            width={400} 
            height={400} 
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
