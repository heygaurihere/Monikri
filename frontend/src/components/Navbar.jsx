import { useState, useEffect } from "react";
import { FiSearch, FiHeart } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-heading text-2xl text-primary tracking-wide">
          MONIKRI
        </h1>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-10 font-body text-sm text-text tracking-wide">
          <a
            href="#collections"
            className="hover:text-primary transition-colors"
          >
            Collections
          </a>
          <a
            href="#new-arrivals"
            className="hover:text-primary transition-colors"
          >
            New Arrivals
          </a>
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-5 text-text text-lg">
          <FiSearch className="cursor-pointer hover:text-primary transition-colors" />
          <FiHeart className="cursor-pointer hover:text-primary transition-colors" />
          <FaInstagram className="cursor-pointer hover:text-primary transition-colors" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
