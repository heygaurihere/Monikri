import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import carouselData from "../constants/carouselData";

const categories = ["Ethnic", "Sarees", "Kurti", "Party"];
const SWAP_INTERVAL = 2500;

function FashionCarousel() {
  const [index, setIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);
  const timerRef = useRef();

  const visibleItems = activeCategory
    ? carouselData.filter((item) => item.category === activeCategory)
    : carouselData;

  const goToIndex = (i) => {
    setIndex(i);
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % visibleItems.length);
    }, SWAP_INTERVAL);
  };

  useEffect(() => {
    setIndex(0);
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [activeCategory]);

  const handleCategoryClick = (cat) => {
    setActiveCategory((prev) => (prev === cat ? null : cat));
  };

  const current = visibleItems[index] || carouselData[0];

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full max-w-sm h-[480px] overflow-hidden rounded-3xl shadow-xl bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={current.image}
              alt={current.label}
              className="w-full h-full object-cover"
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-5 py-2 rounded-full"
            >
              <p className="font-heading text-sm italic text-text">
                {current.label}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-2 mt-6">
        {visibleItems.map((_, i) => (
          <button
            key={i}
            onClick={() => goToIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-primary" : "w-2 bg-secondary/40"
            }`}
          />
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={
                isActive
                  ? "px-5 py-2 rounded-full border text-sm font-body transition-colors duration-300 bg-primary border-primary text-background"
                  : "px-5 py-2 rounded-full border text-sm font-body transition-colors duration-300 border-primary/40 text-text hover:border-primary"
              }
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FashionCarousel;
