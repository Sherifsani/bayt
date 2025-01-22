import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 p-3 flex justify-center items-center border-t">
      <div className="text-sm  text-gray-500">{new Date().getFullYear()} - Built by Sherif</div>
    </footer>
  );
};

export default Footer;
