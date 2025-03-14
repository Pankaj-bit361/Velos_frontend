import { motion } from 'framer-motion';
import { FaMobile, FaShoppingCart, FaMapMarked, FaUserFriends, FaGamepad, FaCamera, FaTv, FaCalendarAlt } from 'react-icons/fa';

const categories = [
  { name: 'All', count: 24 },
  { name: 'E-commerce', count: 6 },
  { name: 'Social', count: 5 },
  { name: 'Entertainment', count: 4 },
  { name: 'Utility', count: 5 },
  { name: 'Games', count: 4 }
];

const templates = [
  {
    title: "Food Delivery App",
    description: "Complete food delivery solution with real-time tracking",
    icon: <FaShoppingCart />,
    tags: ["React Native", "Maps API", "Payments"],
    credits: 10,
    new: true
  },
  {
    title: "Social Network",
    description: "Full-featured social platform with chat and stories",
    icon: <FaUserFriends />,
    tags: ["React Native", "Firebase", "Real-time"],
    credits: 12
  },
  {
    title: "Travel Companion",
    description: "Travel app with location-based recommendations",
    icon: <FaMapMarked />,
    tags: ["React Native", "Maps", "Geolocation"],
    credits: 8
  },
  {
    title: "Fitness Tracker",
    description: "Health and workout tracking with analytics",
    icon: <FaCalendarAlt />,
    tags: ["React Native", "Charts", "Health Kit"],
    credits: 15
  },
  {
    title: "Video Streaming",
    description: "Video streaming app with offline support",
    icon: <FaTv />,
    tags: ["React Native", "Video", "Cache"],
    credits: 12
  },
  {
    title: "Photo Editor",
    description: "Advanced photo editing with filters",
    icon: <FaCamera />,
    tags: ["React Native", "Image Processing", "Filters"],
    credits: 10
  },
  {
    title: "Mobile Game",
    description: "2D platformer game with physics",
    icon: <FaGamepad />,
    tags: ["React Native", "Game Engine", "Animation"],
    credits: 14
  },
  {
    title: "Dating App",
    description: "Dating platform with matching algorithm",
    icon: <FaUserFriends />,
    tags: ["React Native", "Real-time", "Location"],
    credits: 15
  }
];

const Templates = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            <span className="px-4 py-1 text-sm bg-neon-green/10 text-neon-green rounded-full mb-4 inline-block">
              React Native Templates
            </span>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent mb-4">
              Mobile App Templates
            </h1>
            <p className="text-gray-400 text-lg">
              Launch your React Native mobile app faster with our production-ready templates
            </p>
          </motion.div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`px-4 py-2 rounded-full border ${
                index === 0
                  ? 'bg-neon-green/10 border-neon-green/50 text-neon-green'
                  : 'border-gray-750/50 text-gray-400 hover:border-neon-green/50 hover:text-neon-green'
              } transition-all duration-200`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-60">({category.count})</span>
            </motion.button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-dark-800/50 backdrop-blur-sm rounded-xl border border-gray-750/30 hover:border-neon-green/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-2xl text-neon-green">
                    {template.icon}
                  </div>
                  {template.new && (
                    <span className="px-2 py-1 text-xs bg-neon-green/10 text-neon-green rounded-full">
                      New
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-neon-green transition-colors">
                  {template.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {template.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-dark-700/50 text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-neon-green text-sm">
                    {template.credits} credits
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-1.5 text-sm bg-dark-700 hover:bg-dark-600 text-white rounded-lg transition-colors"
                  >
                    Use Template
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Templates;