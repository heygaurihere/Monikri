import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import productData from "../constants/productData";
import { WHATSAPP_NUMBER } from "../constants/config";
// import useWishlist from "../hooks/useWishlist";
// import useCart from "../hooks/useCart";
import useWishlist from "../context/WishlistContext.jsx";
import useCart from "../context/CartContext.jsx";

function ProductDetail() {
  const { id } = useParams();
  const product = productData.find((p) => p.id === Number(id));
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
        <p className="font-heading text-2xl text-text">Product not found</p>
        <Link to="/collections" className="mt-4 text-primary font-body underline">
          Back to Collection
        </Link>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in the ${product.name} (${selectedColor}, ${selectedSize}) listed on Monikri. Is it available?`
  );
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="min-h-screen bg-background pt-28 pb-20 px-6 md:px-12">
      <Link
        to="/collections"
        className="inline-block font-body text-sm text-secondary hover:text-primary transition-colors mb-8"
      >
        ← Back to Collection
      </Link>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-sm"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="font-heading text-3xl md:text-4xl text-text">
            {product.name}
          </h1>
          <p className="font-body text-xl text-primary mt-3">
            Rs. {product.price}
          </p>

          <p className="font-body text-secondary mt-6 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-8">
            <p className="font-body text-sm text-text mb-3">Color</p>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={
                    selectedColor === color
                      ? "px-4 py-2 rounded-full border text-sm font-body transition-colors duration-300 bg-primary border-primary text-background"
                      : "px-4 py-2 rounded-full border text-sm font-body transition-colors duration-300 border-primary/30 text-text hover:border-primary"
                  }
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="font-body text-sm text-text mb-3">Size</p>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={
                    selectedSize === size
                      ? "px-4 py-2 rounded-full border text-sm font-body transition-colors duration-300 bg-primary border-primary text-background"
                      : "px-4 py-2 rounded-full border text-sm font-body transition-colors duration-300 border-primary/30 text-text hover:border-primary"
                  }
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-8 py-4 bg-primary text-background font-body text-sm tracking-widest uppercase hover:bg-text transition-colors duration-500 rounded-full"
            >
              Enquire on WhatsApp
            </a>
            <button
              onClick={handleAddToCart}
              className="flex-1 px-8 py-4 border border-primary text-text font-body text-sm tracking-widest uppercase hover:bg-primary hover:text-background transition-colors duration-500 rounded-full"
            >
              {added ? "Added to Bag ✓" : "Add to Bag"}
            </button>
          </div>

          <div className="mt-4">
            <button
              onClick={() => toggleWishlist(product)}
              className="font-body text-sm text-secondary hover:text-primary transition-colors underline"
            >
              {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>

          <p className="font-body text-xs text-secondary mt-6">
            Delivery details and availability confirmed on enquiry.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default ProductDetail;