import React from 'react';
import { motion } from 'framer-motion';

function Diet() {
  return (
    <motion.div 
      className="feature-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Pregnancy Nutrition Guide</h1>
      <div className="content-grid">
        <div className="info-card">
          <h2>Recommended Foods</h2>
          <ul>
            <li>Leafy greens - rich in folate</li>
            <li>Lean proteins</li>
            <li>Whole grains</li>
            <li>Dairy products</li>
          </ul>
        </div>
        <div className="info-card">
          <h2>Foods to Avoid</h2>
          <ul>
            <li>Raw fish and seafood</li>
            <li>Unpasteurized dairy</li>
            <li>Raw or undercooked eggs</li>
            <li>Excess caffeine</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Diet;