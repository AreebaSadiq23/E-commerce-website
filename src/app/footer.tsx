import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Contact Form Section */}
          <div className="mb-6 md:mb-0 w-full md:w-1/3">
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="mb-2 p-2 w-full rounded-md text-gray-800"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="mb-2 p-2 w-full rounded-md text-gray-800"
                required
              />
              <textarea
                placeholder="Your Message"
                className="mb-2 p-2 w-full rounded-md text-gray-800"
                rows={4}
                required
              ></textarea>
              <button className="py-2 px-4 bg-red-400 text-white rounded-lg hover:bg-red-300 transition duration-300 ease-in-out">
                Send Message
              </button>
            </form>
          </div>

          {/* Follow Us Section */}
          <div className="mb-6 md:mb-0 w-full md:w-1/3 md:pl-8 lg:pl-12">
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex flex-col">
              <a href="#" className="text-gray-400 hover:underline mb-1">Facebook</a>
              <a href="#" className="text-gray-400 hover:underline mb-1">Twitter</a>
              <a href="#" className="text-gray-400 hover:underline mb-1">Instagram</a>
              <a href="#" className="text-gray-400 hover:underline mb-1">LinkedIn</a>
            </div>
          </div>

          {/* Newsletter Subscription Section */}
          <div className="w-full md:w-1/3 md:pl-8 lg:pl-12">
            <h4 className="font-semibold mb-2">Newsletter</h4>
            <p className="text-gray-400 mb-2">
              Subscribe to our newsletter for the latest updates.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="mb-2 p-2 rounded-md text-gray-800 w-full"
              required
            />
            <button className="py-2 px-4 bg-red-400 text-white rounded-lg hover:bg-red-300 transition duration-300 ease-in-out">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 py-4 mt-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Shopping. All Rights Reserved Areeba.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
