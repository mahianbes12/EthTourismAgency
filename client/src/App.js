import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/aboutUs';
import NavBar from './pages/navBar';
import Footer from './pages/footer'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
