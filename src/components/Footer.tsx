import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C3E50] text-white py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">LegalClarity</h3>
            <p className="text-sm text-gray-300">
              Making legal documents accessible to everyone through AI-powered simplification.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#E6B31E] transition-colors duration-200">How it Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#E6B31E] transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#E6B31E] transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#E6B31E] transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-3">
              Subscribe to our newsletter for updates on legal tech advances.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-[#1A252F] text-white px-3 py-2 text-sm rounded-l focus:outline-none focus:ring-1 focus:ring-[#E6B31E]"
              />
              <button 
                className="bg-[#E6B31E] text-[#2C3E50] px-3 py-2 text-sm font-medium rounded-r hover:bg-[#D6A31E] transition-colors duration-200"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} LegalClarity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;