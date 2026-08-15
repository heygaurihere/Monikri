import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import productData from "../constants/productData";

function NewArrivals() {
  const newProducts = productData.filter((p) => p.isNew);

  return (
    <div className="min-h-screen bg-background pt-32 px-6 md:px-12 pb-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-heading text-4xl md:text-5xl text-text text-center italic"
      >
        New Arrivals
      </motion.h1>
      <p className="text-center text-secondary font-body mt-3">
        Fresh styles, thoughtfully selected.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-14">
        {newProducts.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link to={`/product/${product.id}`}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer relative"
              >
                <span className="absolute top-3 left-3 z-10 bg-primary text-background text-[10px] font-body tracking-widest uppercase px-3 py-1 rounded-full">
                  New
                </span>
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="font-body text-sm text-text">{product.name}</p>
                  <p className="font-body text-sm text-primary mt-1">
                    Rs. {product.price}
                  </p>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default NewArrivals;
