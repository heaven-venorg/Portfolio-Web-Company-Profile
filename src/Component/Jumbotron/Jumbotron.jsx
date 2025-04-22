import React from "react";

function Jumbotron() {
  const ImageJumbotron =
    "https://www.reshot.com/static/home-pages/illustrations_astronaut_kevin.png";
  const imageAltText = "Ilustrasi astronot melayang di angkasa";

  return (
    <section
      id="home"
      className="bg-[url(https://f.hubspotusercontent10.net/hubfs/8320410/Open%20office-1.jpg)] bg-no-repeat md:bg-fixed bg-center bg-cover min-h-[350px] sm:min-h-[450px] lg:min-h-[500px] rounded-2xl flex flex-col space-y-4 justify-center items-center p-6 sm:p-8 lg:p-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/60 z-0 h-full"></div>

      <div className="z-10 text-center max-w-xl lg:max-w-3xl">
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-light tracking-wider uppercase mb-4">
          My Product Is For You
          <br />
          Buy and grab pleasure !!!
        </h1>
      </div>

      <img
        src={ImageJumbotron}
        alt={imageAltText}
        className="absolute -right-15 bottom-0 md:-right-0 w-50 h-50 md:w-100 md:h-100
                   object-contain drop-shadow-lg grayscale hover:grayscale-0 transition duration-300"
      />
    </section>
  );
}
export default Jumbotron;
