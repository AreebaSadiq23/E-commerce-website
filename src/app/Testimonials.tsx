import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          What Our Customers Say
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm transition-transform transform hover:scale-105">
            <p className="text-gray-600 italic">
              &quot;Amazing quality and great service. I received my order quickly, and it exceeded my expectations!&quot;
            </p>
            <div className="mt-4">
              <h4 className="text-gray-800 font-semibold">Jane Doe</h4>
              <span className="text-gray-500 text-sm">Verified Buyer</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm transition-transform transform hover:scale-105">
            <p className="text-gray-600 italic">
              &quot;I love the products! They are stylish and durable. Will definitely recommend to friends!&quot;
            </p>
            <div className="mt-4">
              <h4 className="text-gray-800 font-semibold">John Smith</h4>
              <span className="text-gray-500 text-sm">Loyal Customer</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm transition-transform transform hover:scale-105">
            <p className="text-gray-600 italic">
              &quot;Exceptional service! The team was very helpful, and my experience was seamless from start to finish.&quot;
            </p>
            <div className="mt-4">
              <h4 className="text-gray-800 font-semibold">Emily Johnson</h4>
              <span className="text-gray-500 text-sm">First-time Buyer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
