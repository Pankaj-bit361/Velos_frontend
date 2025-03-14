import { motion } from 'framer-motion';
import { FaCheck, FaBolt, FaInfinity, FaRocket, FaCreditCard, FaRegClock, FaShieldAlt } from 'react-icons/fa';
import { useState } from 'react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      credits: 10,
      price: 0,
      yearlyPrice: 0,
      features: [
        "10 credits per month",
        "Basic templates",
        "Community support",
        "Standard response time"
      ],
      icon: FaBolt,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      credits: 250,
      price: 20,
      yearlyPrice: 192,
      features: [
        "250 credits per month",
        "All templates",
        "Priority support",
        "API access",
        "Custom domains"
      ],
      icon: FaRocket,
      color: "from-neon-green to-neon-blue",
      popular: true
    },
    {
      name: "Ultimate",
      credits: "Unlimited",
      price: 100,
      yearlyPrice: 960,
      features: [
        "Unlimited credits",
        "All templates",
        "24/7 Premium support",
        "API access",
        "Custom domains",
        "Advanced analytics",
        "Custom branding"
      ],
      icon: FaInfinity,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const topUpPlans = [
    { credits: 40, price: 5, popular: false },
    { credits: 90, price: 10, popular: true },
    { credits: 150, price: 15, popular: false },
    { credits: 220, price: 20, popular: false }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Main Plans Section */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent mb-4"
          >
            Choose Your Plan
          </motion.h1>
          <p className="text-gray-400 text-lg mb-8">
            Get the perfect plan for your development needs
          </p>

          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isYearly ? 'text-neon-green' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                isYearly ? 'bg-neon-green' : 'bg-gray-700'
              }`}
            >
              <div
                className={`absolute w-5 h-5 rounded-full bg-white top-1 transition-transform duration-300 ${
                  isYearly ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm flex items-center ${isYearly ? 'text-neon-green' : 'text-gray-400'}`}>
              Yearly
              <span className="ml-2 px-2 py-1 text-xs bg-neon-green/10 text-neon-green rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Main Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl bg-dark-800/50 backdrop-blur-sm border border-gray-750/50 overflow-hidden ${
                plan.popular ? 'ring-2 ring-neon-green' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-neon-green/10 text-neon-green text-sm rounded-full">
                  Popular
                </div>
              )}
              
              <div className="p-8">
                <plan.icon className={`text-3xl mb-4 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`} />
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">${isYearly ? plan.yearlyPrice : plan.price}</span>
                  <span className="text-gray-400 ml-2">/{isYearly ? 'year' : 'month'}</span>
                </div>
                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <FaCheck className="text-neon-green text-sm" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full mt-8 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-neon-green text-dark-900 hover:bg-neon-green/90'
                      : 'bg-dark-700 hover:bg-dark-600 text-white'
                  }`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Credit Section */}
        <div className="relative mt-32 mb-16">
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-gradient-radial from-neon-green/5 via-transparent to-transparent opacity-50" />
          <div className="absolute inset-0 grid-bg opacity-10" />
          
          {/* Content */}
          <div className="relative z-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block"
              >
                <span className="px-4 py-1 text-sm bg-neon-green/10 text-neon-green rounded-full mb-4 inline-block">
                  Top Up Credits
                </span>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent mt-4">
                  Need More Credits?
                </h2>
                <p className="text-gray-400 text-lg mt-4">
                  Flexible credit packages for your growing needs
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {topUpPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative h-full"
                >
                  <div className={`
                    relative h-full p-8 rounded-2xl
                    bg-dark-800/50 backdrop-blur-lg
                    border border-gray-750/30
                    hover:border-neon-green/50
                    transition-all duration-300
                    ${plan.popular ? 'ring-2 ring-neon-green' : ''}
                  `}>
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    
                    {/* Popular Badge */}
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-neon-green text-dark-900 text-sm font-medium rounded-full">
                        Most Popular
                      </div>
                    )}

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Credits Badge */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-2 px-4 py-2 bg-neon-green/10 rounded-lg">
                          <FaBolt className="text-neon-green" />
                          <span className="text-neon-green font-medium">{plan.credits} Credits</span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-6">
                        <div className="flex items-baseline">
                          <span className="text-5xl font-bold text-white">${plan.price}</span>
                          <span className="text-gray-400 ml-2">one-time</span>
                        </div>
                        <div className="text-neon-green text-sm mt-2">
                          ${(plan.price / plan.credits).toFixed(2)} per credit
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center text-gray-300">
                          <FaCreditCard className="text-neon-green mr-3" />
                          <span>Instant delivery</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <FaRegClock className="text-neon-green mr-3" />
                          <span>Never expires</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <FaShieldAlt className="text-neon-green mr-3" />
                          <span>Secure payment</span>
                        </div>
                      </div>

                      {/* Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-auto w-full px-6 py-4 bg-dark-700 hover:bg-dark-600 rounded-xl
                          text-white font-medium transition-all duration-200
                          group-hover:bg-neon-green/10 group-hover:text-neon-green
                          border border-transparent group-hover:border-neon-green/30"
                      >
                        Purchase Credits
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <p className="text-gray-400 text-lg">
                Need a custom package?{' '}
                <a href="#" className="text-neon-green hover:underline font-medium">
                  Contact our sales team →
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;