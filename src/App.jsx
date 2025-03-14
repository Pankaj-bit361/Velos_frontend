import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Templates from './pages/Templates';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import ChatInterface from './components/ChatInterface';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-dark-900 text-white">
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<ChatInterface />} />
            <Route path="/chat/:chatId" element={<ChatInterface />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;