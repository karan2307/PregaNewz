import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="home-link">
          <motion.div
            className="brand-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            Mom<span>Care</span>
          </motion.div>
        </Link>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <motion.ul 
        className={`nav-links ${isOpen ? 'active' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/calendar" ? "active" : ""}>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li className={location.pathname === "/resources" ? "active" : ""}>
          <Link to="/resources">Resources</Link>
        </li>
        <li className={location.pathname === "/blog" ? "active" : ""}>
          <Link to="/blog">Blog</Link>
        </li>
      </motion.ul>
    </nav>
  );
}

export default Navbar; 