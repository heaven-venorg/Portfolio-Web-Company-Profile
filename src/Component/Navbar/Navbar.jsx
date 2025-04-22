import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const name = "HELLOCORP";
  let links = [
    { id: 1, href: "#home", text: "Home" },
    { id: 2, href: "#about", text: "About" },
    { id: 4, href: "#product", text: "Product" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent py-4 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a
            href="#home"
            className="font-extrabold tracking-wide text-xl sm:text-2xl cursor-pointer"
          >
            {name}
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-5 lg:space-x-7">
          {links.map((linkItem) => (
            <a
              key={linkItem.id}
              href={linkItem.href}
              className="text-gray-700 hover:text-gray-900 transition duration-200"
            >
              {linkItem.text}
            </a>
          ))}
          <button
            type="button"
            className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-200 ml-3"
          >
            Sign Up
          </button>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-800" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`rounded-2xl absolute top-full left-0 right-0 bg-white shadow-md md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100 z-50" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-4 space-y-3">
          {links.map((linkItem) => (
            <a
              key={linkItem.id}
              href={linkItem.href}
              onClick={toggleMenu}
              className="block text-gray-700 hover:text-gray-900 transition duration-200 px-2 py-1"
            >
              {linkItem.text}
            </a>
          ))}
          <button
            type="button"
            className="w-full mt-3 px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-200"
          >
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
