import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaBook, FaCode, FaRocket, FaTools, FaSearch, FaGithub, 
  FaLightbulb, FaCube, FaCloud, FaBolt, FaLock, FaDatabase,
  FaCogs, FaUsers, FaQuestionCircle
} from 'react-icons/fa';

const Docs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('getting-started');

  const categories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: FaRocket,
      items: [
        { title: 'Introduction', new: false },
        { title: 'Quick Start Guide', new: true },
        { title: 'Installation', new: false },
        { title: 'Architecture Overview', new: false },
        { title: 'Basic Concepts', new: false }
      ]
    },
    {
      id: 'core-features',
      name: 'Core Features',
      icon: FaCube,
      items: [
        { title: 'Template System', new: false },
        { title: 'Credit Management', new: true },
        { title: 'API Reference', new: false },
        { title: 'CLI Tools', new: false },
        { title: 'Deployment Options', new: false }
      ]
    },
    {
      id: 'integrations',
      name: 'Integrations',
      icon: FaCloud,
      items: [
        { title: 'Authentication', new: false },
        { title: 'Database Setup', new: false },
        { title: 'Storage Solutions', new: false },
        { title: 'Third-party APIs', new: true },
        { title: 'Webhooks', new: false }
      ]
    },
    {
      id: 'security',
      name: 'Security',
      icon: FaLock,
      items: [
        { title: 'Best Practices', new: false },
        { title: 'Authentication', new: false },
        { title: 'Authorization', new: false },
        { title: 'Data Protection', new: true },
        { title: 'Compliance', new: false }
      ]
    },
    {
      id: 'data',
      name: 'Data Management',
      icon: FaDatabase,
      items: [
        { title: 'Data Models', new: false },
        { title: 'Migrations', new: false },
        { title: 'Backups', new: false },
        { title: 'Scaling', new: false }
      ]
    }
  ];

  const quickLinks = [
    {
      icon: FaRocket,
      title: "Quick Start",
      description: "Get up and running in minutes",
      url: "#quickstart",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: FaCode,
      title: "API Reference",
      description: "Complete API documentation",
      url: "#api",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaGithub,
      title: "Examples",
      description: "Real-world code examples",
      url: "#examples",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaQuestionCircle,
      title: "FAQs",
      description: "Common questions answered",
      url: "#faqs",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header & Search */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent mb-4"
          >
            Documentation
          </motion.h1>
          <p className="text-gray-400 text-lg mb-8">
            Everything you need to build amazing applications with Nexa
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documentation..."
              className="w-full pl-12 pr-4 py-3 bg-dark-800/50 border border-gray-750/50 rounded-xl
                focus:outline-none focus:border-neon-green/50 text-white placeholder-gray-500
                transition-all duration-200"
            />
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {quickLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-dark-800/50 backdrop-blur-sm rounded-xl border border-gray-750/30 p-6
                hover:border-neon-green/50 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`} />
              
              <div className="relative z-10">
                <link.icon className="text-2xl text-neon-green mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-green transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {link.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Main Documentation Content */}
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="col-span-12 lg:col-span-3">
            <div className="sticky top-24 space-y-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-neon-green/10 text-neon-green'
                      : 'text-gray-400 hover:bg-dark-800/50 hover:text-white'
                  }`}
                >
                  <category.icon className="text-lg" />
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="col-span-12 lg:col-span-9">
            {categories.map((category) => (
              <div
                key={category.id}
                className={selectedCategory === category.id ? 'block' : 'hidden'}
              >
                <div className="bg-dark-800/30 rounded-xl border border-gray-750/30 overflow-hidden">
                  <div className="p-6 border-b border-gray-750/30">
                    <h2 className="text-2xl font-bold text-white flex items-center space-x-3">
                      <category.icon className="text-neon-green" />
                      <span>{category.name}</span>
                    </h2>
                  </div>
                  
                  <div className="divide-y divide-gray-750/30">
                    {category.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-4 hover:bg-dark-800/50 transition-colors duration-200"
                      >
                        <div className="flex items-center justify-between">
                          <a href="#" className="text-gray-300 group-hover:text-neon-green transition-colors">
                            {item.title}
                          </a>
                          {item.new && (
                            <span className="px-2 py-1 text-xs bg-neon-green/10 text-neon-green rounded-full">
                              New
                            </span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Can't find what you're looking for?{' '}
            <a href="#" className="text-neon-green hover:underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Docs;