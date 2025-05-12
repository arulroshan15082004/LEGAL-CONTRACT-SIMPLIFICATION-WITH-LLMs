import React from 'react';
import { BookOpenText } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-[#2C3E50] to-[#1A252F] text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BookOpenText size={28} className="text-[#E6B31E]" />
          <div>
            <h1 className="text-xl font-bold">LegalClarity</h1>
            <p className="text-xs text-gray-300">AI-Powered Contract Simplification</p>
          </div>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-[#E6B31E] transition-colors duration-200">Home</a></li>
            <li><a href="#" className="hover:text-[#E6B31E] transition-colors duration-200">Simplify</a></li>
            <li><a href="#" className="hover:text-[#E6B31E] transition-colors duration-200">Dictionary</a></li>
            <li><a href="#" className="hover:text-[#E6B31E] transition-colors duration-200">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;