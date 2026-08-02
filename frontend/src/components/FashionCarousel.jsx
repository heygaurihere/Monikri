import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import carouselData from "../constants/carouselData";

const categories = ["Ethnic", "Western", "Sarees", "Kurti", "Party"];

function FashionCarousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef();

  const goToIndex = (i) => {
    setIndex(i);
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselData.length);
    }, 3500);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleCategoryClick = (cat) => {
    const found = carouselData.findIndex((item) => item.category === cat);
    if (found !== -1) goToIndex(found);
  };

  const current = carouselData[index];

  return (
    <div className="flex flex-col items-center w-full">
      {/* Card */}
      <div className="relative w-full max-w-sm h-[480px] overflow-hidden rounded-3xl shadow-xl bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={current.image}
              alt={current.label}
              className="w-full h-full object-cover"
            />

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-5 py-2 rounded-full"
            >
              <p className="font-heading text-sm italic text-text">
                {current.label}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation dots */}
      <div className="flex gap-2 mt-6">
        {carouselData.map((_, i) => (
          <button
            key={i}
            onClick={() => goToIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-primary" : "w-2 bg-secondary/40"
            }`}
          />
        ))}
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className="px-5 py-2 rounded-full border border-primary/40 text-sm font-body text-text hover:bg-primary hover:text-background transition-colors duration-300"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FashionCarousel;
