import React from 'react';
import { motion } from 'framer-motion';

function Emergency() {
  const emergencyTypes = [
    {
      title: "Bleeding",
      symptoms: ["Heavy bleeding", "Cramping", "Tissue passing"],
      action: "Seek immediate medical attention",
      severity: "high"
    },
    {
      title: "Contractions",
      symptoms: ["Regular painful contractions", "Water breaking", "Back pain"],
      action: "Time contractions and contact your healthcare provider",
      severity: "medium"
    },
    {
      title: "Reduced Movement",
      symptoms: ["Less than 10 movements in 2 hours", "Unusual quietness"],
      action: "Contact your healthcare provider for assessment",
      severity: "medium"
    }
  ];

  return (
    <motion.div 
      className="feature-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Emergency Guide</h1>
      <div className="emergency-grid">
        {emergencyTypes.map((emergency, index) => (
          <motion.div 
            className={`emergency-card severity-${emergency.severity}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            key={emergency.title}
          >
            <h3>{emergency.title}</h3>
            <div className="symptoms">
              <h4>Symptoms:</h4>
              <ul>
                {emergency.symptoms.map((symptom, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                  >
                    {symptom}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="action">
              <h4>Action:</h4>
              <p>{emergency.action}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Emergency; 