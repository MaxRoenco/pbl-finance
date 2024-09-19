import { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Profile from './components/Profile/Profile';
import Dashboard from './components/Dashboard/Dashboard';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import FAQ from './components/FAQ/FAQ';
import LeftBar from './components/LeftBar/LeftBar';
import ContactUs from './components/ContactUs/ContactUs';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();
  const showHeaderAndSidebar = !['/', '/login'].includes(location.pathname);

  return (
    <div className="app-container">
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
    </div>

  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
