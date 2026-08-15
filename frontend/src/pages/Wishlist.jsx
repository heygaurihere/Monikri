import { Link } from "react-router-dom";
import { motion } from "framer-motion";
//import useWishlist from "../hooks/useWishlist";
import useWishlist from "../context/WishlistContext";
function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">
        <p className="font-heading text-2xl text-text">
          Your wishlist is waiting.
        </p>
        <p className="font-body text-secondary mt-2">
          Save the pieces you love and find them here.
        </p>
        <Link
          to="/collections"
          className="mt-8 px-8 py-3 bg-primary text-background font-body text-sm tracking-widest uppercase hover:bg-text transition-colors duration-500 rounded-full"
        >
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-28 pb-20 px-6 md:px-12">
      <h1 className="font-heading text-3xl md:text-4xl text-text text-center mb-12">
        Your Wishlist
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {wishlist.map((product) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm relative"
          >
            <button
              onClick={() => toggleWishlist(product)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-primary text-sm hover:bg-primary hover:text-background transition-colors"
              aria-label="Remove from wishlist"
            >
              ✕
            </button>
            <Link to={`/product/${product.id}`}>
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="font-body text-sm text-text">{product.name}</p>
                <p className="font-body text-sm text-primary mt-1">
                  Rs. {product.price}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
