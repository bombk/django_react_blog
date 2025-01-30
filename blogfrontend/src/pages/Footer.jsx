
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white">BlogSite</h2>
          <p className="mt-2 text-sm">
            Your go-to platform for the latest news and insights.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/about" className="hover:text-blue-400">About</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            <li><a href="/privacy" className="hover:text-blue-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex mt-2 space-x-4">
            <a href="#" className="text-blue-400 hover:text-white text-xl"><FaFacebook /></a>
            <a href="#" className="text-blue-300 hover:text-white text-xl"><FaTwitter /></a>
            <a href="#" className="text-pink-500 hover:text-white text-xl"><FaInstagram /></a>
            <a href="#" className="text-blue-600 hover:text-white text-xl"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>© {new Date().getFullYear()} BlogSite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
