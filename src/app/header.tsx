"use client";
import React, { useState } from "react";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-pink-500">
            Cronics
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          <a
            href="/#Hero"
            className="text-gray-700 hover:text-pink-500 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/#TrendingProducts"
            className="text-gray-700 hover:text-pink-500 transition-colors duration-300"
          >
            Trending Products
          </a>
          <a
            href="/#NewArrivals"
            className="text-gray-700 hover:text-pink-500 transition-colors duration-300"
          >
            NewArrivals
          </a>
          <a
            href="/#Testimonials"
            className="text-gray-700 hover:text-pink-500 transition-colors duration-300"
          >
            Testimonials
          </a>
          <a
            href="/#contact"
            className="text-gray-700 hover:text-pink-500 transition-colors duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button className="hidden lg:block text-sm bg-pink-500 text-white py-2 px-4 rounded transition duration-300 hover:bg-pink-600">
            Sign In
          </button>
          <button className="hidden lg:block text-sm border border-pink-500 text-pink-500 py-2 px-4 rounded transition duration-300 hover:bg-pink-500 hover:text-white">
            Register
          </button>
          <a
            href="/#NewArrivals"
            className="text-gray-700 hover:text-pink-500 transition-colors duration-300"
          >
            <FiShoppingCart size={24} />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-pink-500 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-white shadow-md">
          <div className="px-4 py-2 space-y-2">
            <a
              href="/#Hero"
              className="block text-gray-700 hover:text-pink-500 transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              Home
            </a>
            <a
              href="/#TrendingProducts"
              className="block text-gray-700 hover:text-pink-500 transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              TrendingProduct
            </a>
            <a
            href="/#NewArrivals"
            className="text-gray-700 hover:text-pink-500 transition-colors duration-300"
          >
            NewArrivals
          </a>
            <a
              href="/#Testimonials"
              className="block text-gray-700 hover:text-pink-500 transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              Testimonials
            </a>
            <a
              href="/#contact"
              className="block text-gray-700 hover:text-pink-500 transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              Contact
            </a>
            <button className="block w-full text-sm bg-pink-500 text-white py-2 px-4 rounded mt-2 transition duration-300 hover:bg-pink-600">
              Sign In
            </button>
            <button className="block w-full text-sm border border-pink-500 text-pink-500 py-2 px-4 rounded mt-2 transition duration-300 hover:bg-pink-500 hover:text-white">
              Register
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
