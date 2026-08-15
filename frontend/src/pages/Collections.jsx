import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import categoryData from "../constants/categoryData";
import productData from "../constants/productData";

function Collections() {
  const [selected, setSelected] = useState(null);

  const filteredProducts = selected
    ? productData.filter((p) => p.category === selected)
    : [];

  return (
    <div className="min-h-screen bg-background pt-32 px-6 md:px-12 pb-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-heading text-4xl md:text-5xl text-text text-center"
      >
        What are you looking for?
      </motion.h1>
      <p className="text-center text-secondary font-body mt-3">
        Pick a category to explore
      </p>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.12, delayChildren: 0.3 },
          },
        }}
        className="flex flex-wrap justify-center gap-5 mt-14"
      >
        {categoryData.map((cat) => {
          const isSelected = selected === cat.id;
          const isFaded = selected && !isSelected;

          return (
            <motion.button
              key={cat.id}
              variants={{
                hidden: { opacity: 0, scale: 0.3, y: 40 },
                show: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              onClick={() => setSelected(isSelected ? null : cat.id)}
              animate={{
                scale: isSelected ? 1.08 : isFaded ? 0.9 : 1,
                opacity: isFaded ? 0.4 : 1,
              }}
              className={`flex flex-col items-center justify-center w-32 h-32 md:w-36 md:h-36 rounded-2xl border transition-colors duration-300 ${
                isSelected
                  ? "bg-primary border-primary text-background"
                  : "bg-white border-primary/30 text-text hover:border-primary"
              }`}
            >
              <span className="text-3xl mb-2">{cat.emoji}</span>
              <span className="font-body text-sm tracking-wide">
                {cat.label}
              </span>
            </motion.button>
          );
        })}
      </motion.div>

      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h2 className="font-heading text-2xl text-text text-center mb-8 italic">
              {categoryData.find((c) => c.id === selected)?.label}
            </h2>

            {filteredProducts.length === 0 ? (
              <p className="text-center text-secondary font-body">
                More styles coming soon in this category.
              </p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    >
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <p className="font-body text-sm text-text">
                          {product.name}
                        </p>
                        <p className="font-body text-sm text-primary mt-1">
                          ₹{product.price}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Collections;
