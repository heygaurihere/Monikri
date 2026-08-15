import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white border-t border-secondary/10 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-heading text-2xl text-primary">MONIKRI</h3>
          <p className="font-body text-sm text-secondary mt-3 italic">
            Where Elegance Meets Everyday Fashion
          </p>
        </div>

        <div>
          <p className="font-body text-sm text-text tracking-widest uppercase mb-4">
            Collections
          </p>
          <ul className="flex flex-col gap-2 font-body text-sm text-secondary">
            <li>
              <Link to="/collections" className="hover:text-primary transition-colors">
                Sarees
              </Link>
            </li>
            <li>
              <Link to="/collections" className="hover:text-primary transition-colors">
                Kurtis
              </Link>
            </li>
            <li>
              <Link to="/collections" className="hover:text-primary transition-colors">
                Ethnic
              </Link>
            </li>
            <li>
              <Link to="/collections" className="hover:text-primary transition-colors">
                Western
              </Link>
            </li>
            <li>
              <Link to="/collections" className="hover:text-primary transition-colors">
                Party Wear
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-body text-sm text-text tracking-widest uppercase mb-4">
            Company
          </p>
          <ul className="flex flex-col gap-2 font-body text-sm text-secondary">
            <li>
              <Link to="/about" className="hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/new-arrivals" className="hover:text-primary transition-colors">
                New Arrivals
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-body text-sm text-text tracking-widest uppercase mb-4">
            Follow
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="text-lg" />
            <span className="font-body text-sm">Instagram</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-secondary/10 mt-12 pt-6">
        <p className="font-body text-xs text-secondary text-center">
          © 2026 Monikri. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;