import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './App.css';

import Navbar from './components/Navbar';
import SOS from './components/SOS';
import Diet from './components/Diet';
import Workout from './components/Workout';
import Emergency from './components/Emergency';
import Calendar from './components/Calendar';
import Resources from './components/Resources';
import Blog from './components/Blog';
import ChatBot from './components/ChatBot';
import AuthForm from './components/AuthForm';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        {isAuthenticated && <Navbar />}
        <Routes>
          <Route 
            path="/auth" 
            element={
              isAuthenticated ? <Navigate to="/" replace /> : <AuthForm setIsAuthenticated={setIsAuthenticated} />
            } 
          />
          
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/" element={
              <>
                <motion.section 
                  className="hero-section"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className="hero-content">
                    <div className="hero-text">
                      <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        Your Journey to <span className="highlight">Motherhood</span> Starts Here
                      </motion.h1>
                      <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        Expert guidance, support, and resources for every step of your pregnancy
                      </motion.p>
                      <motion.div 
                        className="cta-buttons"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <Link to="/calendar">
                          <motion.button 
                            className="primary-btn"
                            whileHover={{ scale: 1.05, backgroundColor: "#ff4d8d" }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Start Tracking
                          </motion.button>
                        </Link>
                        <Link to="/resources">
                          <motion.button 
                            className="secondary-btn"
                            whileHover={{ scale: 1.05, backgroundColor: "#f8e1e7" }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Find Support
                          </motion.button>
                        </Link>
                      </motion.div>
                    </div>
                    <motion.div 
                      className="hero-image"
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <img src="https://i.pinimg.com/originals/7b/2e/f2/7b2ef242443b2e6fe8baa51951192809.jpg" alt="Expecting mother" />
                    </motion.div>
                  </div>
                </motion.section>

                <motion.main 
                  className="features-grid"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Link to="/resources">
                    <motion.div 
                      className="feature-card resources"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(66, 153, 225, 0.15)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h2>Resources & Support</h2>
                      <p>Access expert guidance, educational materials, and community support</p>
                    </motion.div>
                  </Link>

                  <Link to="/workout">
                    <motion.div 
                      className="feature-card workout"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(72, 187, 120, 0.15)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h2>Safe Exercises</h2>
                      <p>Stay active with curated pregnancy-friendly workout routines</p>
                    </motion.div>
                  </Link>

                  <Link to="/emergency">
                    <motion.div 
                      className="feature-card emergency"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(237, 137, 54, 0.15)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h2>Emergency Guide</h2>
                      <p>Instant access to critical care information and emergency contacts</p>
                    </motion.div>
                  </Link>
                </motion.main>
              </>
            } />
            <Route path="/sos" element={<SOS />} />
            <Route path="/diet" element={<Diet />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/blog" element={<Blog />} />
          </Route>

          <Route 
            path="*" 
            element={
              isAuthenticated ? <Navigate to="/" replace /> : <Navigate to="/auth" replace />
            } 
          />
        </Routes>
        {isAuthenticated && (
          <>
            <ChatBot />
            <SOS />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;