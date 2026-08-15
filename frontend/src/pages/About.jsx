import { motion } from "framer-motion";

const values = [
  {
    title: "Curated Styles",
    description: "Thoughtfully selected pieces, chosen with care.",
  },
  {
    title: "Personal Service",
    description: "Helping you find the right look for every occasion.",
  },
  {
    title: "Quality First",
    description: "Carefully selected clothing that feels as good as it looks.",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-background pt-32 px-6 md:px-12 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="font-heading text-4xl md:text-5xl text-text">
          About Monikri
        </h1>
        <p className="font-heading text-xl text-primary italic mt-4">
          Fashion that feels like you.
        </p>
        <p className="font-body text-secondary leading-relaxed mt-8">
          Monikri began as a small, personal idea — curating ready-made clothing
          that feels thoughtfully chosen rather than mass-produced. Every piece
          is selected with care, so you can find something that feels genuinely
          yours, whether it's for an everyday moment or a celebration.
        </p>

        <p className="font-body text-sm text-secondary/80 italic mt-6 border-t border-secondary/20 pt-6">
          Monikri is currently in development. Product imagery shown is
          illustrative while our first collection is being curated — reach out
          on WhatsApp for current availability.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto mt-20"
      >
        <h2 className="font-heading text-2xl text-text text-center mb-10">
          Why Monikri
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="bg-white rounded-2xl p-8 text-center shadow-sm"
            >
              <h3 className="font-heading text-lg text-primary italic">
                {value.title}
              </h3>
              <p className="font-body text-sm text-secondary mt-3">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default About;
