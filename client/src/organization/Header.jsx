import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex items-center">
              <img
                className="h-12 w-auto mr-2"
                src="https://storage.googleapis.com/mixo-files/logos/hirEx-1679323310963.svg"
                alt="HirEx logo"
              />
              <p className="text-3xl font-sans font-bold text-gray-900">HirEx</p>
            </div>
            <div className="sm:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                onClick={toggleMenu}
              >
                Menu
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md py-2 z-10">
                  <Link to="/">
                    <button className="block text-gray-500 hover:text-gray-700 px-4 py-2 text-sm">
                      Home
                    </button>
                  </Link>
                  <Link to="/about">
                    <button className="block text-gray-500 hover:text-gray-700 px-4 py-2 text-sm">
                      About
                    </button>
                  </Link>
                  <Link to="/contact">
                    <button className="block text-gray-500 hover:text-gray-700 px-4 py-2 text-sm">
                      Contact
                    </button>
                  </Link>
                </div>
              )}
            </div>
            <div className="hidden sm:block">
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
        </div>
      </header>
    </div>
  );
}

export default Header;
