import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FashionCarousel from "../components/FashionCarousel";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden pt-24 md:pt-0">
      <h2 className="absolute inset-0 flex items-center justify-center font-heading text-[28vw] md:text-[20vw] text-text opacity-[0.04] pointer-events-none select-none whitespace-nowrap">
        MONIKRI
      </h2>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-text tracking-wide">
            MONIKRI
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="font-heading text-lg sm:text-xl md:text-2xl text-primary mt-4 italic"
          >
            Where Elegance Meets Everyday Fashion
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="font-body text-secondary max-w-md mx-auto md:mx-0 mt-6 text-sm md:text-base leading-relaxed px-4 md:px-0"
          >
            Curated ready-made fashion for every generation — thoughtfully
            selected, delivered with care.
          </motion.p>

          <motion.button
            onClick={() => navigate("/collections")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="mt-10 px-10 py-4 bg-primary text-background font-body text-sm tracking-widest uppercase hover:bg-text transition-colors duration-500"
          >
            Explore Collection
          </motion.button>
        </motion.div>

        <div className="w-full flex justify-center mt-10 md:mt-0">
          <FashionCarousel />
        </div>
      </div>
    </section>
  );
}

export default Hero;
