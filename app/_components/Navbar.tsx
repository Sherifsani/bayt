"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 100 && currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navItems = [
    { value: "Home", href: "/" },
    { value: "Projects", href: "/projects" },
    { value: "About", href: "/about" },
    { value: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 px-4 py-4"
    >
      <motion.div 
        className="max-w-2xl mx-auto bg-white/80 backdrop-blur-lg border border-gray-200/20 rounded-2xl shadow-lg shadow-black/5"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <nav className="flex items-center justify-center gap-1 p-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 rounded-xl transition-colors"
            >
              {isActive(item.href) && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-purple-100 rounded-xl"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className={`relative z-10 text-sm font-medium ${
                isActive(item.href) ? "text-purple-700" : "text-gray-600 hover:text-gray-900"
              }`}>
                {item.value}
              </span>
            </Link>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
