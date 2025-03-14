import { motion } from 'framer-motion';

const actions = [
  { label: 'Build a mobile app with Expo', isNew: true },
  { label: 'Start a blog with Astro' },
  { label: 'Create a docs site with Vitepress' },
  { label: 'Scaffold UI with Shadcn' },
  { label: 'Draft a presentation with Slidev' },
  { label: 'Code a video with Remotion' },
];

const QuickActions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 mt-8">
      <div className="flex flex-wrap gap-2 justify-center">
        {actions.map((action, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative px-4 py-2 bg-dark-700/50 hover:bg-dark-600 rounded-full border border-gray-750/50 text-sm text-gray-300 hover:text-neon-green transition-all duration-200"
          >
            {action.isNew && (
              <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs bg-neon-green text-dark-900 rounded-full">
                NEW
              </span>
            )}
            {action.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;