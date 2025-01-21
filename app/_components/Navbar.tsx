import React from "react";

const Navbar = () => {
  return (
    <header className="p-2 flex justify-center">
      <nav className="flex border-[#eceaea] border-[1px] rounded-full px-4 py-2 gap-5">
        <a href="/" className="">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
