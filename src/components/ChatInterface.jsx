import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { FiLink, FiStar, FiCode, FiEye, FiCopy, FiMaximize2, FiMinimize2, FiMessageSquare } from 'react-icons/fi';
import { HiLightningBolt } from 'react-icons/hi';

const ChatInterface = () => {
  const { chatId } = useParams();
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'assistant',
      content: "Hello! I'm here to help you build amazing applications. What would you like to create today?",
      timestamp: new Date(),
      code: null
    },
    {
      id: 2,
      type: 'user',
      content: "I want to create a social media app with React",
      timestamp: new Date(),
      code: null
    },
    {
      id: 3,
      type: 'assistant',
      content: "I'll help you create a modern social media application using React. Let's start by setting up the project structure and essential components.",
      timestamp: new Date(),
      code: `import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-900"
    >
      <h1>Social Media App</h1>
    </motion.div>
  );
}`
    }
  ]);

  const [prompt, setPrompt] = useState('');
  const [showCode, setShowCode] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isPreviewExpanded, setIsPreviewExpanded] = useState(false);
  const [showMobileChat, setShowMobileChat] = useState(true);

  useEffect(() => {
    // Auto-select the last message with code when on mobile
    const lastMessageWithCode = [...messages].reverse().find(msg => msg.code);
    if (lastMessageWithCode && window.innerWidth < 768) {
      setSelectedMessage(lastMessageWithCode);
    }
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: prompt,
      timestamp: new Date(),
      code: null
    };

    setMessages([...messages, newMessage]);
    setPrompt('');
  };

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
  };

  const toggleMobileView = () => {
    setShowMobileChat(!showMobileChat);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-dark-900 pt-[72px]">
      {/* Mobile Tab Switcher */}
      <div className="md:hidden w-full flex border-b border-gray-750/50">
        <button 
          onClick={() => setShowMobileChat(true)}
          className={`flex-1 py-3 flex items-center justify-center space-x-2 ${showMobileChat ? 'text-neon-green border-b-2 border-neon-green' : 'text-gray-400'}`}
        >
          <FiMessageSquare />
          <span>Chat</span>
        </button>
        <button 
          onClick={() => setShowMobileChat(false)}
          className={`flex-1 py-3 flex items-center justify-center space-x-2 ${!showMobileChat ? 'text-neon-green border-b-2 border-neon-green' : 'text-gray-400'}`}
        >
          <FiCode />
          <span>Preview</span>
        </button>
      </div>

      {/* Left Chat Panel */}
      <div className={`w-full ${isPreviewExpanded ? 'md:w-1/3' : 'md:w-[450px]'} border-r border-gray-750/50 flex flex-col ${showMobileChat ? 'block' : 'hidden md:flex'}`}>
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onClick={() => {
                  setSelectedMessage(msg);
                  if (window.innerWidth < 768 && msg.code) {
                    setShowMobileChat(false); // Switch to preview on mobile when clicking a message with code
                  }
                }}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    msg.type === 'user'
                      ? 'bg-neon-green/10 text-neon-green'
                      : 'bg-dark-800 text-gray-200'
                  } ${selectedMessage?.id === msg.id ? 'ring-2 ring-neon-green' : ''}`}
                >
                  <div className="prose prose-invert">
                    {msg.content}
                  </div>
                  {msg.code && (
                    <div className="mt-3 bg-dark-900/50 rounded-lg p-3 relative group">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyCode(msg.code);
                        }}
                        className="absolute top-2 right-2 p-2 bg-dark-700/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <FiCopy className="text-gray-400 hover:text-neon-green" />
                      </button>
                      <pre className="text-sm overflow-x-auto">
                        <code>{msg.code.length > 100 ? `${msg.code.substring(0, 100)}...` : msg.code}</code>
                      </pre>
                    </div>
                  )}
                  <div className="text-xs text-gray-500 mt-2">
                    {msg.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-750/50">
          <form onSubmit={handleSubmit}>
            <div className="relative p-[2px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green via-neon-blue to-neon-green rounded-xl animate-border-rotate" />
              <div className="relative bg-dark-800 rounded-xl overflow-hidden">
                <div className="relative">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="w-full h-[60px] md:h-[120px] bg-dark-800 text-gray-100 px-6 py-4 focus:outline-none resize-none text-sm"
                    placeholder="Ask anything..."
                    spellCheck="false"
                  />
                  <div className="absolute bottom-3 right-3 flex items-center space-x-4">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2 bg-neon-green text-dark-900 rounded-lg font-medium flex items-center space-x-2 hover:bg-neon-green/90 transition-all text-sm"
                    >
                      <HiLightningBolt className="text-lg" />
                      <span>Send</span>
                    </motion.button>
                  </div>
                  <div className="absolute bottom-3 left-6 hidden sm:flex items-center space-x-4 text-gray-500">
                    <button type="button" className="hover:text-neon-green transition-colors">
                      <FiLink className="text-lg" />
                    </button>
                    <button type="button" className="hover:text-neon-green transition-colors">
                      <FiStar className="text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Right Preview Panel */}
      <div className={`${showMobileChat ? 'hidden' : 'flex'} md:flex flex-col flex-1 bg-dark-800 ${isPreviewExpanded ? 'md:w-2/3' : ''}`}>
        <div className="h-12 border-b border-gray-750/50 flex items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-neon-green" />
            <span className="text-sm text-gray-400 truncate">preview--app.lovable.dev</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowCode(true)}
              className={`px-2 md:px-3 py-1.5 rounded-lg text-xs md:text-sm flex items-center space-x-1 md:space-x-2 ${
                showCode ? 'bg-dark-700 text-neon-green' : 'text-gray-400 hover:text-neon-green'
              }`}
            >
              <FiCode />
              <span className="hidden sm:inline">Code</span>
            </button>
            <button
              onClick={() => setShowCode(false)}
              className={`px-2 md:px-3 py-1.5 rounded-lg text-xs md:text-sm flex items-center space-x-1 md:space-x-2 ${
                !showCode ? 'bg-dark-700 text-neon-green' : 'text-gray-400 hover:text-neon-green'
              }`}
            >
              <FiEye />
              <span className="hidden sm:inline">Preview</span>
            </button>
            {/* Back to chat button on mobile */}
            <button
              onClick={toggleMobileView}
              className="md:hidden px-2 py-1.5 rounded-lg text-xs bg-dark-700 text-neon-green"
            >
              <FiMessageSquare />
            </button>
            {/* Expand/collapse button on desktop */}
            <button
              onClick={() => setIsPreviewExpanded(!isPreviewExpanded)}
              className="hidden md:block px-3 py-1.5 rounded-lg text-sm text-gray-400 hover:text-neon-green"
            >
              {isPreviewExpanded ? <FiMinimize2 /> : <FiMaximize2 />}
            </button>
          </div>
        </div>
        <div className="p-4 flex-1">
          {showCode ? (
            <div className="w-full h-full bg-dark-900 rounded-lg border border-gray-750/50 p-4 overflow-auto">
              <pre className="text-gray-300 text-sm">
                <code>{selectedMessage?.code || '// Select a message with code to preview'}</code>
              </pre>
            </div>
          ) : (
            <div className="w-full h-full bg-white rounded-lg border border-gray-750/50">
              <iframe
                title="preview"
                className="w-full h-full rounded-lg"
                src="about:blank"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;