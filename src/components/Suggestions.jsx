import { motion } from 'framer-motion';
import { FaMobileAlt, FaShoppingCart, FaGamepad, FaCamera } from 'react-icons/fa';

const suggestions = [
  {
    icon: <FaMobileAlt />,
    title: "Social Media App",
    description: "Create a dynamic social platform with real-time features",
    gradient: "from-neon-green/20 to-neon-blue/20"
  },
  {
    icon: <FaShoppingCart />,
    title: "E-commerce App",
    description: "Build a seamless shopping experience with secure payments",
    gradient: "from-neon-blue/20 to-neon-green/20"
  },
  {
    icon: <FaGamepad />,
    title: "Mobile Game",
    description: "Design an engaging mobile game with interactive elements",
    gradient: "from-neon-green/20 to-neon-blue/20"
  },
  {
    icon: <FaCamera />,
    title: "Photo Editor",
    description: "Develop a powerful photo editing app with filters",
    gradient: "from-neon-blue/20 to-neon-green/20"
  }
];

const Suggestions = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto p-4"
    >
      {suggestions.map((suggestion, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02, translateY: -5 }}
          className={`
            relative overflow-hidden
            bg-dark-800/40 backdrop-blur-sm
            p-6 rounded-xl
            border border-gray-750/30
            hover:border-neon-green/50
            transition-all duration-300
            group
          `}
        >
          {/* Gradient Background */}
          <div className={`
            absolute inset-0 opacity-0 group-hover:opacity-100
            bg-gradient-to-br ${suggestion.gradient}
            transition-opacity duration-300
          `} />

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-dark-700/50 rounded-lg border border-gray-750/30 group-hover:border-neon-green/30">
                <div className="text-neon-green text-xl group-hover:text-neon-green transition-colors">
                  {suggestion.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-neon-green transition-colors">
                {suggestion.title}
              </h3>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              {suggestion.description}
            </p>

            {/* Action Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-4 py-2 text-sm text-neon-green 
                border border-neon-green/30 rounded-lg
                hover:bg-neon-green/10 transition-all duration-200
                flex items-center space-x-2 opacity-0 group-hover:opacity-100"
            >
              <span>Get Started</span>
              <span className="text-lg">→</span>
            </motion.button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Suggestions;