import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check local storage for user authentication status
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        { !isAuthenticated && <AuthForm setIsAuthenticated={setIsAuthenticated} /> }
        <Routes>
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

              <motion.section 
                className="testimonials-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.h2
                  className="section-title"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  What Our Users Say
                </motion.h2>
                <div className="testimonials-grid">
                  {[
                    {
                      image: "https://mustsharenews.com/wp-content/uploads/2020/10/angela-lee-pregnancy-title.jpg",
                      quote: "This app made my pregnancy journey so much easier. The weekly updates were incredibly helpful!",
                      name: "Sarah Johnson",
                      role: "First-time mom",
                      rating: 5
                    },
                    {
                      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcNFDo8B1aizIXMM9mIgkKaJ8Gllwab2Z7VjlvGE47vO0glHoyOG04me5sYEG1upizMPw&usqp=CAU",
                      quote: "The emergency guide helped me make quick decisions when I needed it most.",
                      name: "Emily Davis",
                      role: "Mother of two",
                      rating: 5
                    }
                  ].map((testimonial, index) => (
                    <motion.div 
                      className="testimonial-card"
                      initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1.4 + index * 0.2 }}
                      whileHover={{ 
                        scale: 1.03,
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                      }}
                      key={index}
                    >
                      <motion.img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="testimonial-image"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div className="rating">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.span 
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.6 + i * 0.1 }}
                          >
                            ⭐
                          </motion.span>
                        ))}
                      </div>
                      <p className="quote">{testimonial.quote}</p>
                      <h4>{testimonial.name}</h4>
                      <span className="role">{testimonial.role}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </>
          } />
          <Route path="/sos" element={<SOS />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;