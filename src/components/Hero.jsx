import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-[50vh] flex items-center justify-center grid-bg">
      <div className="absolute inset-0 bg-gradient-radial from-neon-green/5 via-transparent to-transparent" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center z-10 max-w-4xl mx-auto px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-green via-neon-blue to-neon-green bg-clip-text text-transparent">
          What do you want to build?
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12">
          Prompt, run, edit, and deploy <span className="text-neon-green">mobile</span> apps.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;