import { motion } from 'framer-motion';
import { FaCode, FaGoogle } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

const Login = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Section - Branding */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden lg:flex lg:w-1/2 relative bg-dark-800 p-12 flex-col justify-between"
      >
        <div className="absolute inset-0 bg-gradient-radial from-neon-green/5 via-transparent to-transparent" />
        <div className="grid-bg absolute inset-0 opacity-20" />
        
        <div className="relative z-10">
          {/* <div className="flex items-center space-x-2">
            <FaCode className="text-neon-green text-3xl" />
            <span className="text-3xl font-bold bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
              Nexa
            </span>
          </div> */}
        </div>

        <div className="relative z-10 space-y-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-neon-green via-neon-blue to-neon-green bg-clip-text text-transparent">
            Build Your Next App
          </h1>
          <p className="text-gray-400 text-lg">
            Join thousands of developers building amazing apps with Nexa
          </p>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              { number: '10K+', label: 'Developers' },
              { number: '50K+', label: 'Apps Built' },
              { number: '99.9%', label: 'Uptime' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="p-4 bg-dark-700/50 rounded-lg border border-gray-750/30">
                <div className="text-2xl font-bold text-neon-green">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 text-sm text-gray-400">
          © 2024 Nexa. All rights reserved.
        </div>
      </motion.div>

      {/* Right Section - Login Form */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex items-center justify-center"
      >
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
            <p className="mt-2 text-gray-400">Continue your development journey</p>
          </div>

          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center space-x-3 px-4 py-3 bg-dark-700 hover:bg-dark-600 rounded-lg border border-gray-750/50 transition-all duration-200"
            >
              <FaGoogle className="text-neon-green" />
              <span>Continue with Google</span>
            </motion.button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-750/50"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-dark-900 text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-750/50 rounded-lg focus:outline-none focus:border-neon-green/50 text-white placeholder-gray-500 transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-neon-green/90 hover:bg-neon-green text-dark-900 rounded-lg font-semibold transition-all duration-200"
              >
                <HiLightningBolt className="text-xl" />
                <span>Send OTP</span>
              </motion.button>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400">
            By continuing, you agree to our{' '}
            <a href="#" className="text-neon-green hover:underline">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-neon-green hover:underline">Privacy Policy</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;