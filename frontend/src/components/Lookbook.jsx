import { motion } from "framer-motion";
import saree from "../assets/illustrations/saree.png";
import suit2 from "../assets/illustrations/suit2.png";
import suit3 from "../assets/illustrations/suit3.png";

const looks = [
  { id: 1, label: "Look 01", image: saree },
  { id: 2, label: "Look 02", image: suit2 },
  { id: 3, label: "Look 03", image: suit3 },
];

function Lookbook() {
  return (
    <section className="bg-background py-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-heading text-3xl text-text">
          The Monikri Lookbook
        </h2>
        <p className="font-body text-secondary mt-2 italic">
          Discover the latest looks →
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {looks.map((look, i) => (
          <motion.div
            key={look.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative rounded-2xl overflow-hidden shadow-sm group cursor-pointer"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={look.image}
                alt={look.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-text/60 to-transparent p-5">
              <p className="font-heading text-white italic">{look.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Lookbook;
