import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="marginLeftZero">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="space-x-3 flex items-center">
            <img
              className="h-12 w-auto"
              src="https://storage.googleapis.com/mixo-files/logos/hirEx-1679323310963.svg"
              alt="HirEx logo"
            />
            <p className="text-3xl font-sans font-bold text-gray-900">HirEx</p>
          </div>
          <div>
            <Link to="/">
              <button className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </button>
            </Link>
            <Link to="/about">
              <button className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                About
              </button>
            </Link>
            <Link to="/contact">
              <button className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
