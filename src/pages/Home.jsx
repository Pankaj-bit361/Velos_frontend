import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import CodeEditor from '../components/CodeEditor';
import QuickActions from '../components/QuickActions';
import Suggestions from '../components/Suggestions';

const Home = () => {
  return (
    <main className="pt-20">
      <SEO
        title="Build Amazing Apps"
        description="Create stunning web and mobile applications with VelosApps. AI-powered tools to build, deploy, and scale your next project faster."
      />
      <Hero />
      <CodeEditor />
      <QuickActions />
      <div className="mt-20 pb-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
            Popular Templates
          </h3>
          <p className="text-gray-400 mt-2">
            Start with pre-built templates to accelerate your development
          </p>
        </div>
        <Suggestions />
      </div>
    </main>
  );
};

export default Home;