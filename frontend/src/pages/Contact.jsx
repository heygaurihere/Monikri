import { motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "../constants/config";

function Contact() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi, I'd like to know more about Monikri."
  )}`;

  return (
    <div className="min-h-screen bg-background pt-32 px-6 md:px-12 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h1 className="font-heading text-4xl md:text-5xl text-text">
          Get in Touch
        </h1>
        <p className="font-body text-secondary mt-4">
          Reach out for enquiries, styling help, or just to say hello.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-md mx-auto mt-14 bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-5"
      >
        <div>
          <p className="font-body text-xs uppercase tracking-widest text-secondary">
            Location
          </p>
          <p className="font-body text-text mt-1">
            To be added — your city / area
          </p>
        </div>
        <div>
          <p className="font-body text-xs uppercase tracking-widest text-secondary">
            Phone / WhatsApp
          </p>
          <p className="font-body text-text mt-1">+91 XXXXX XXXXX</p>
        </div>
        <div>
          <p className="font-body text-xs uppercase tracking-widest text-secondary">
            Email
          </p>
          <p className="font-body text-text mt-1">hello@monikri.com</p>
        </div>
        <div>
          <p className="font-body text-xs uppercase tracking-widest text-secondary">
            Hours
          </p>
          <p className="font-body text-text mt-1">Mon–Sat, 10am–7pm</p>
        </div>
    <a
        
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-center px-8 py-4 bg-primary text-background font-body text-sm tracking-widest uppercase hover:bg-text transition-colors duration-500 rounded-full"
        >
          WhatsApp Us
        </a>
      </motion.div>
    </div>
  );
}

export default Contact;