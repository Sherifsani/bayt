"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const navItems = [
    { value: "Home", href: "/" },
    { value: "Projects", href: "/projects" },
    { value: "About", href: "/about" },
    { value: "Contact", href: "/contact" },
  ];

  return (
    <header className="p-2 flex justify-center">
      <nav className="flex border-[#eceaea] border-[1px] rounded-full px-4  gap-5">
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
