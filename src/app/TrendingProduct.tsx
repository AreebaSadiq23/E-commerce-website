import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
  oldPrice?: string;
}

const products: Product[] = [
  {
    id: 1,
    image: "/img top.jpeg",
    name: "Stylish Summer Top",
    price: "$30.00",
    oldPrice: "$50.00",
  },
  {
    id: 2,
    image: "/img skirt.jpeg",
    name: "Printed Skirt",
    price: "$20.00",
  },
  {
    id: 3,
    image: "/img men.jpeg",
    name: "Men T-Shirt",
    price: "$15.00",
    oldPrice: "$25.00",
  },
  {
    id: 4,
    image: "/img casual.jpeg",
    name: "Casual Jacket",
    price: "$45.00",
  },
  {
    id: 5,
    image: "/img makeup.jpeg",
    name: "Cosmetic",
    price: "$40.00",
    oldPrice: "$60.00",
  },
  {
    id: 6,
    image: "/img ring.jpeg",
    name: "Rings",
    price: "$70.00",
  },
  {
    id: 7,
    image: "/img cozy.jpeg",
    name: "Cozy Hoodie",
    price: "$35.00",
    oldPrice: "$50.00",
  },
  {
    id: 8,
    image: "/img snak.jpeg",
    name: "Sporty Sneakers",
    price: "$50.00",
  },
];

const TrendingProducts: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Trending Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-lg font-bold text-yellow-600">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
                <button className="mt-4 w-full py-2 bg-fuchsia-400 text-white rounded-lg hover:bg-fuchsia-600">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
