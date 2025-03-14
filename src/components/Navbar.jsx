import { motion } from 'framer-motion';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 bg-dark-900/80 backdrop-blur-xl border-b border-gray-750/50 z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <FaCode className="text-neon-green text-2xl" />
            <span className="text-2xl font-bold bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
            VelosApps
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/docs" className="text-gray-400 hover:text-neon-green transition-colors">
              Docs
            </Link>
            <Link to="/templates" className="text-gray-400 hover:text-neon-green transition-colors">
              Templates
            </Link>
            <Link to="/pricing" className="text-gray-400 hover:text-neon-green transition-colors">
              Pricing
            </Link>
            <button
              onClick={() => navigate('/login')}
              className="px-4 py-2 bg-neon-green/90 hover:bg-neon-green text-dark-900 rounded-lg transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-neon-green"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          className={`md:hidden overflow-hidden ${isMenuOpen ? 'border-t border-gray-750/50 mt-4' : ''}`}
        >
          <div className="py-4 space-y-4">
            <Link
              to="/docs"
              className="block px-4 py-2 text-gray-400 hover:text-neon-green hover:bg-dark-800 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Docs
            </Link>
            <Link
              to="/templates"
              className="block px-4 py-2 text-gray-400 hover:text-neon-green hover:bg-dark-800 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Templates
            </Link>
            <Link
              to="/pricing"
              className="block px-4 py-2 text-gray-400 hover:text-neon-green hover:bg-dark-800 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <button
              onClick={() => {
                navigate('/login');
                setIsMenuOpen(false);
              }}
              className="w-full px-4 py-2 bg-neon-green/90 hover:bg-neon-green text-dark-900 rounded-lg transition-all"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;