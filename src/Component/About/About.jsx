import React from "react";

function About() {
  return (
    <section id="about" className="bg-white rounded-2xl overflow-hidden">
      <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1fr]">
        <div className="p-6 sm:p-8 lg:p-10 order-1 lg:order-none">
          <h2 className="text-2xl sm:text-3xl text-gray-900 uppercase font-extralight text-center mb-4 sm:mb-6">
            About Us
          </h2>
          <div className="text-gray-700 text-sm sm:text-base text-justify">
            <p className="indent-8 mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className="indent-8 mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>

        <div className="relative bg-[url(https://raulurias-store.com/cdn/shop/products/LOREMIPSUM_Color_1200x1200.jpg?v=1638215408)] bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0 transition duration-300 w-full min-h-[250px] sm:min-h-[350px] lg:min-h-0 lg:h-full order-2 lg:order-none">
          <div className="absolute bg-black/20 inset-0 z-0"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
