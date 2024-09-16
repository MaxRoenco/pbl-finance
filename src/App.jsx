import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Portfolio from './components/Portfolio/Portfolio'
import Profile from './components/Profile/Profile'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
