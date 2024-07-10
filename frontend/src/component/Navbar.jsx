import React from 'react';

function Navbar()  {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          MyApp
        </div>
        <div className="space-x-4">
          <a href="#home" className="text-white hover:text-gray-200">Home</a>
          <a href="#about" className="text-white hover:text-gray-200">About</a>
          <a href="#contact" className="text-white hover:text-gray-200">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
