import React from "react";
import Image from "next/image";

const CircleImages: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto flex flex-wrap gap-8 justify-center">
        <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-200 transform hover:scale-105 hover:shadow-lg">
          <Image
            src="/img kurti.jpg"
            alt="Circle 1"
            width={100}
            height={100}
            className="object-cover"
          />
        </div>
        <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-200 transform hover:scale-105 hover:shadow-lg">
          <Image
            src="/img kid.jpeg"
            alt="Circle 2"
            width={100}
            height={100}
            className="object-cover"
          />
        </div>
        <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-200 transform hover:scale-105 hover:shadow-lg">
          <Image
            src="/img tshirtmen.jpeg"
            alt="Circle 3"
            width={100}
            height={100}
            className="object-cover"
          />
        </div>

        <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-200 transform hover:scale-105 hover:shadow-lg">
          <Image
            src="/img purse.jpeg"
            alt="Circle 4"
            width={100}
            height={100}
            className="object-cover"
          />
        </div>

        <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-200 transform hover:scale-105 hover:shadow-lg">
          <Image
            src="/img rings.jpeg"
            alt="Circle 5"
            width={100}
            height={100}
            className="object-cover"
          />
        </div>

        <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-200 transform hover:scale-105 hover:shadow-lg">
          <Image
            src="/img watch.jpeg"
            alt="Circle 6"
            width={100}
            height={100}
            className="object-cover"
          />
        </div>

        <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
          <Image
            src="/img sand.jpeg"
            alt="Circle 7"
            width={100}
            height={100}
            className="object-cover"
          />
        </div>

        <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-200 transform hover:scale-105 hover:shadow-lg">
          <Image
            src="/img makeup.jpeg"
            alt="Circle 8"
            width={100}
            height={100}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CircleImages;
