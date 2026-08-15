import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
// import useWishlist from "../hooks/useWishlist";
// import useCart from "../hooks/useCart";
import useWishlist from "../context/WishlistContext.jsx";
import useCart from "../context/CartContext.jsx";
import SearchModal from "./SearchModal";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { wishlist } = useWishlist();
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? "hidden" : "auto";
  }, [menuOpen, searchOpen]);

  const links = [
    { label: "Collections", to: "/collections" },
    { label: "New Arrivals", to: "/new-arrivals" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/70 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <Link
            to="/"
            className="font-heading text-2xl text-primary tracking-wide"
          >
            MONIKRI
          </Link>

          <div className="hidden md:flex items-center gap-10 font-body text-sm text-text tracking-wide">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5 text-text text-lg">
            <button onClick={() => setSearchOpen(true)} aria-label="Search">
              <FiSearch className="cursor-pointer hover:text-primary transition-colors" />
            </button>

            <Link to="/wishlist" className="relative">
              <FiHeart
                className="cursor-pointer hover:text-primary transition-colors"
                aria-label="Wishlist"
              />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-background text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link to="/cart" className="hidden md:block relative">
              <FiShoppingBag
                className="cursor-pointer hover:text-primary transition-colors"
                aria-label="Bag"
              />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-background text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <FaInstagram
              className="hidden md:block cursor-pointer hover:text-primary transition-colors"
              aria-label="Instagram"
            />

            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-xl"
              aria-label="Open menu"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </nav>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {menuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-text/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-background shadow-xl p-8 flex flex-col">
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-2xl text-text mb-10"
              aria-label="Close menu"
            >
              <FiX />
            </button>

            <div className="flex flex-col gap-6 font-body text-lg text-text">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/wishlist"
                onClick={() => setMenuOpen(false)}
                className="hover:text-primary transition-colors"
              >
                Wishlist
              </Link>
              <Link
                to="/cart"
                onClick={() => setMenuOpen(false)}
                className="hover:text-primary transition-colors"
              >
                Bag {cartCount > 0 && `(${cartCount})`}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
