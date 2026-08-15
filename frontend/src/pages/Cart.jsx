import { Link } from "react-router-dom";
import { motion } from "framer-motion";
//import useCart from "../hooks/useCart";
import { WHATSAPP_NUMBER } from "../constants/config";
import useCart from "../context/CartContext";
function Cart() {
  const { cart, removeFromCart, updateQty, subtotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">
        <p className="font-heading text-2xl text-text">Your bag is empty.</p>
        <p className="font-body text-secondary mt-2">
          Add pieces you love and they'll show up here.
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

  const enquiryLines = cart
    .map((item) => `- ${item.name} (${item.color}, ${item.size}) x${item.qty}`)
    .join("\n");
  const whatsappMessage = encodeURIComponent(
    `Hi, I'd like to enquire about these Monikri products:\n${enquiryLines}`
  );
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background pt-28 pb-20 px-6 md:px-12">
      <h1 className="font-heading text-3xl md:text-4xl text-text text-center mb-12">
        Your Bag
      </h1>

      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {cart.map((item) => (
          <motion.div
            key={`${item.id}-${item.color}-${item.size}`}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-4 bg-white rounded-2xl p-4 shadow-sm items-center"
          >
            <div className="w-20 h-24 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <p className="font-body text-sm text-text">{item.name}</p>
              <p className="font-body text-xs text-secondary mt-1">
                {item.color} · {item.size}
              </p>
              <p className="font-body text-sm text-primary mt-1">
                Rs. {item.price}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  updateQty(item.id, item.color, item.size, item.qty - 1)
                }
                className="w-7 h-7 rounded-full border border-primary/40 text-text hover:bg-primary hover:text-background transition-colors"
              >
                −
              </button>
              <span className="font-body text-sm w-4 text-center">
                {item.qty}
              </span>
              <button
                onClick={() =>
                  updateQty(item.id, item.color, item.size, item.qty + 1)
                }
                className="w-7 h-7 rounded-full border border-primary/40 text-text hover:bg-primary hover:text-background transition-colors"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeFromCart(item.id, item.color, item.size)}
              className="text-secondary hover:text-primary transition-colors text-sm ml-2"
              aria-label="Remove item"
            >
              ✕
            </button>
          </motion.div>
        ))}

        <div className="border-t border-secondary/20 pt-6 mt-4 flex justify-between items-center">
          <p className="font-body text-text">Subtotal</p>
          <p className="font-heading text-xl text-primary">Rs. {subtotal}</p>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center px-8 py-4 bg-primary text-background font-body text-sm tracking-widest uppercase hover:bg-text transition-colors duration-500 rounded-full"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default Cart;