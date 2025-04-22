import React from "react";

function Footer() {
  const name = "Heaven-VenORG";
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white rounded-2xl">
      <p className="py-5 font-light text-center">
        Copyright &copy; {year} Design By {name}
      </p>
    </footer>
  );
}

export default Footer;
