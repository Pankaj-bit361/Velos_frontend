import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 bg-gray-900 border-b border-gray-800 z-50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center">
          <FaCode className="text-purple-500 text-2xl mr-2" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          VelosApps
          </h1>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;