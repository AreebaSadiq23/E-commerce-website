import React from "react";
import Image from "next/image";

const SquareImages: React.FC = () => {
  const images = [
    "/img chil.jpeg",
    "/img pur.jpeg",
    "/img girl.jpeg",
    "/img clo.jpeg",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 py-10">
      {images.map((src, index) => (
        <div
          key={index}
          className="w-32 h-20 sm:w-44 sm:h-24 md:w-48 md:h-28 lg:w-56 lg:h-32 xl:w-64 xl:h-36 overflow-hidden shadow-lg relative"
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default SquareImages;
