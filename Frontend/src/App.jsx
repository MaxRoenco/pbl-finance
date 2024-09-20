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
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Register from './components/Register/Register';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Context from './hooks/Context';
import ProtectedRoute from './provider/ProtectedRoute';

function Layout() {
  const location = useLocation();
  const showHeaderAndSidebar = !['/', '/login', '/register', '/error'].includes(location.pathname);

  return (
    <div className="app-container">
      {showHeaderAndSidebar && <Header />}
      <div className="content-container">
        {showHeaderAndSidebar && <LeftBar />}
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/portfolio" element={<ProtectedRoute><Portfolio /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/features" element={<ProtectedRoute><Features /></ProtectedRoute>} />
          <Route path="/pricing" element={<ProtectedRoute><Pricing /></ProtectedRoute>} />
          <Route path="/faq" element={<ProtectedRoute><FAQ /></ProtectedRoute>} />
          <Route path="/contact-us" element={<ProtectedRoute><ContactUs /></ProtectedRoute>} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>

  );
}

function App() {
  return (
    <Router>
      <Context>
        <Layout />
      </Context>
    </Router>
  );
}

export default App;
