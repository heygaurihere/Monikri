import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiSearch } from "react-icons/fi";
import productData from "../constants/productData";

const popularSearches = ["Sarees", "Kurtis", "Party Wear", "Ethnic"];

function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!isOpen) setQuery("");
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const results = query.trim()
    ? productData.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()),
      )
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-text/50 backdrop-blur-sm flex items-start justify-center pt-24 px-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-background rounded-3xl shadow-xl w-full max-w-xl p-6 max-h-[70vh] overflow-y-auto"
          >
            <div className="flex items-center gap-3 border-b border-secondary/20 pb-4">
              <FiSearch className="text-secondary text-lg" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Monikri"
                className="flex-1 bg-transparent outline-none font-body text-text placeholder:text-secondary/60"
              />
              <button onClick={onClose} aria-label="Close search">
                <FiX className="text-text text-lg" />
              </button>
            </div>

            {!query.trim() && (
              <div className="mt-6">
                <p className="font-body text-xs uppercase tracking-widest text-secondary mb-3">
                  Popular Searches
                </p>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-4 py-2 rounded-full border border-primary/30 text-sm font-body text-text hover:border-primary transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {query.trim() && results.length === 0 && (
              <div className="mt-10 text-center">
                <p className="font-body text-secondary">
                  No results for "{query}"
                </p>
                <p className="font-body text-xs text-secondary/70 mt-1">
                  Try a different search term
                </p>
              </div>
            )}

            {results.length > 0 && (
              <div className="mt-6 flex flex-col gap-3">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    onClick={onClose}
                    className="flex items-center gap-4 p-2 rounded-xl hover:bg-white transition-colors"
                  >
                    <div className="w-14 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-body text-sm text-text">
                        {product.name}
                      </p>
                      <p className="font-body text-xs text-primary mt-1">
                        Rs. {product.price}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SearchModal;
