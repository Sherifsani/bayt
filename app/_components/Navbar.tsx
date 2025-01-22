"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > window.innerHeight && currentScrollY > lastScrollY) {
      setIsVisible(false); // Hide navbar when scrolling down after 100vh
    } else {
      setIsVisible(true); // Show navbar when scrolling up
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to add the event listener only once

  const navItems = [
    { value: "Home", href: "/" },
    { value: "Projects", href: "/projects" },
    { value: "About", href: "/about" },
    { value: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-2 left-0 w-full bg-white transition-transform duration-300 z-50 flex justify-center items-center ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex border-[#eceaea] border-[1px] rounded-full px-4 gap-5">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`py-2 ${
              isActive(item.href) ? "font-medium active" : ""
            }`}
          >
            {item.value}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
