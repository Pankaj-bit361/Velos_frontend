import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaCog, FaQuestionCircle, FaSignOutAlt, FaCode, FaBolt, FaGift } from 'react-icons/fa';
import { HiMenuAlt4 } from 'react-icons/hi';
import { format } from 'date-fns';
import logo from '../assests/logo.svg'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const chats = [
    {
      id: 1,
      title: "Instagram Clone Setup",
      date: new Date(2024, 1, 15),
      tokens: 150
    },
    {
      id: 2,
      title: "Create SaaS Landing Page",
      date: new Date(2024, 1, 16),
      tokens: 80
    },
    {
      id: 3,
      title: "Creating Instagram Clone (MyGram)",
      date: new Date(2024, 1, 17),
      tokens: 200
    },
    {
      id: 4,
      title: "Create SaaS Landing Page and Admin",
      date: new Date(2024, 1, 18),
      tokens: 120
    }
  ];

  const handleChatClick = (chatId) => {
    navigate(`/chat/${chatId}`);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(true)}
          className="fixed left-4 top-20 z-50 p-3 bg-dark-800/90 backdrop-blur-sm border border-gray-750/50 rounded-lg text-gray-400 hover:text-neon-green"
        >
          <HiMenuAlt4 size={24} />
        </motion.button>
      )}

      {/* Desktop Hover Trigger */}
      {!isMobile && (
        <div
          className="fixed left-0 top-0 w-2 h-screen z-50"
          onMouseEnter={() => setIsOpen(true)}
        />
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 w-80 h-screen bg-dark-800/95 backdrop-blur-xl border-r border-gray-750/50 z-50 flex flex-col"
            onMouseLeave={() => !isMobile && setIsOpen(false)}
          >
            {/* Close button for mobile */}
            {isMobile && (
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 p-2 text-gray-400 hover:text-neon-green"
              >
                <FaSignOutAlt />
              </button>
            )}

            {/* Branding */}
            <div className="p-4 border-b border-gray-750/30">
              <div className="flex items-center space-x-3">
                <FaCode className="text-2xl text\-neon-green" />
                {/* <img src={logo} />  */}
                <span className="text-xl font-bold bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
                  VelosApps
                </span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="p-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search chats..."
                  className="w-full px-4 py-2 pl-10 bg-dark-700/50 border border-gray-750/30 rounded-lg 
                    text-gray-300 placeholder-gray-500 focus:outline-none focus:border-neon-green/50"
                />
                <FaBolt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="px-3 py-2 border-b border-gray-750/30">
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-1.5 text-sm bg-dark-700/50 hover:bg-dark-600 
                  text-gray-400 hover:text-neon-green rounded-lg transition-colors flex items-center justify-center gap-2">
                  <FaBolt className="text-xs" />
                  New Chat
                </button>
                <button className="flex-1 px-3 py-1.5 text-sm bg-dark-700/50 hover:bg-dark-600 
                  text-gray-400 hover:text-neon-green rounded-lg transition-colors flex items-center justify-center gap-2">
                  <FaGift className="text-xs" />
                  Get Credits
                </button>
              </div>
            </div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="px-2 py-4">
                <div className="px-4 py-2 text-sm text-gray-400 font-medium">February</div>
                <div className="space-y-1">
                  {chats.map((chat) => (
                    <motion.div
                      key={chat.id}
                      whileHover={{ x: 4 }}
                      onClick={() => handleChatClick(chat.id)}
                      className="p-3 rounded-lg hover:bg-dark-700/50 cursor-pointer group"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium text-gray-200 group-hover:text-neon-green transition-colors line-clamp-1">
                          {chat.title}
                        </h3>
                        <span className="text-xs text-gray-500 flex-shrink-0">
                          {format(chat.date, 'MMM d')}
                        </span>
                      </div>
                      <div className="flex items-center justify-end">
                        <span className="text-xs text-gray-400">
                          {chat.tokens} tokens
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Menu */}
            <div className="border-t border-gray-750/30">
              <div className="p-4 space-y-1">
                {[
                  { icon: FaCog, label: "Settings" },
                  { icon: FaQuestionCircle, label: "Help Center" },
                  { icon: FaSignOutAlt, label: "Sign Out" }
                ].map((item, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ x: 4 }}
                    className="w-full flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-neon-green 
                      rounded-lg hover:bg-dark-700/50 transition-colors"
                  >
                    <item.icon className="text-sm" />
                    <span className="text-sm">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;