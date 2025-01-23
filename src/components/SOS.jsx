import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function SOS() {
  const [isOpen, setIsOpen] = useState(false);

  const handleEmergencyCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <>
      <motion.div
        className="sos-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        🆘
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sos-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <div className="sos-header">
              <h3>Emergency Contacts</h3>
              <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
            </div>
            <div className="sos-content">
              <button 
                className="emergency-btn ambulance"
                onClick={() => handleEmergencyCall('911')}
              >
                🚑 Call Ambulance
              </button>
              <button 
                className="emergency-btn hospital"
                onClick={() => handleEmergencyCall('9819890868')}
              >
                🏥 Call Hospital
              </button>
              <button 
                className="emergency-btn doctor"
                onClick={() => handleEmergencyCall('9819890868')}
              >
                👨‍⚕️ Call Doctor
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default SOS;