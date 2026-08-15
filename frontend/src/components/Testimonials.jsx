import { motion } from "framer-motion";
import testimonialsData from "../constants/testimonialsData";

function Testimonials() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-heading text-3xl text-text text-center"
      >
        What Our Customers Say
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
        {testimonialsData.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-background rounded-2xl p-8 text-center shadow-sm"
          >
            <p className="font-body text-secondary italic leading-relaxed">
              "{t.quote}"
            </p>
            <p className="font-body text-primary mt-4 text-sm">
              {"★".repeat(t.rating)}
            </p>
            <p className="font-body text-xs text-text mt-2 tracking-widest uppercase">
              — {t.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
