import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiLink, FiStar } from 'react-icons/fi';
import { HiLightningBolt } from 'react-icons/hi';

const CodeEditor = () => {
  const [prompt, setPrompt] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto px-4"
    >
      <div className="relative p-[2px] rounded-xl overflow-hidden">
        {/* Rotating Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green via-neon-blue to-neon-green rounded-xl animate-border-rotate" />
        
        {/* Main Editor Container */}
        <div className="relative bg-dark-800 rounded-xl overflow-hidden">
          <div className="relative">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full h-[180px] bg-dark-800 text-gray-100 px-8 py-6 focus:outline-none resize-none text-lg"
              placeholder="How can Bolt help you today?"
              spellCheck="false"
            />
            
            {/* Bottom Bar with Build Button */}
            <div className="absolute bottom-4 right-4 flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 bg-neon-green text-dark-900 rounded-lg font-medium flex items-center space-x-2 hover:bg-neon-green/90 transition-all"
              >
                <HiLightningBolt className="text-lg" />
                <span>Build</span>
              </motion.button>
            </div>

            {/* Bottom Icons */}
            <div className="absolute bottom-4 left-8 flex items-center space-x-4 text-gray-500">
              <button className="hover:text-neon-green transition-colors">
                <FiLink className="text-xl" />
              </button>
              <button className="hover:text-neon-green transition-colors">
                <FiStar className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CodeEditor;