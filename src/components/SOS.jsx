import React from 'react';
import { motion } from 'framer-motion';

function SOS() {
  return (
    <motion.div 
      className="feature-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>SOS - Emergency Assistance</h1>
      <div className="content-grid">
        <div className="info-card">
          <h2>Emergency Numbers</h2>
          <ul>
            <li>Emergency: 911</li>
            <li>24/7 Pregnancy Helpline: 1-800-XXX-XXXX</li>
            <li>Local Hospital: XXX-XXXX</li>
          </ul>
        </div>
        <div className="info-card">
          <h2>Quick Actions</h2>
          <button className="emergency-btn">Call Ambulance</button>
          <button className="emergency-btn">Contact Doctor</button>
          <button className="emergency-btn">Alert Emergency Contact</button>
        </div>
      </div>
    </motion.div>
  );
}

export default SOS;