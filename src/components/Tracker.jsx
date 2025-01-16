import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Tracker() {
  const [weekNumber, setWeekNumber] = useState(12);
  const [babySize, setBabySize] = useState("Lime");
  
  const milestones = [
    { week: 12, completed: true },
    { week: 20, completed: false },
    { week: 28, completed: false },
    { week: 36, completed: false },
    { week: 40, completed: false }
  ];

  const [dailyStats, setDailyStats] = useState({
    water: 0,
    sleep: 0,
    kicks: 0
  });

  const handleStatsChange = (type, value) => {
    setDailyStats(prev => ({
      ...prev,
      [type]: parseInt(value) || 0
    }));
  };

  return (
    <motion.div 
      className="feature-page tracker-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Pregnancy Tracker</h1>

      <div className="tracker-layout">
        <motion.div 
          className="progress-card"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h2>Week {weekNumber}</h2>
          <div className="baby-size">
            <span>Baby is the size of a</span>
            <h3>{babySize}</h3>
          </div>
          <div className="progress-bar">
            <div 
              className="progress" 
              style={{ width: `${(weekNumber/40) * 100}%` }}
            />
          </div>
        </motion.div>

        <div className="milestones-grid">
          {milestones.map((milestone, index) => (
            <motion.div 
              className={`milestone-card ${milestone.completed ? 'completed' : ''}`}
              key={milestone.week}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>Week {milestone.week}</h3>
              <div className="milestone-marker">
                {milestone.completed ? '✓' : '○'}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="daily-tracker"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2>Daily Tracking</h2>
          <div className="tracking-items">
            <div className="track-item">
              <span>Water Intake</span>
              <input 
                type="number" 
                value={dailyStats.water}
                onChange={(e) => handleStatsChange('water', e.target.value)}
                placeholder="glasses" 
              />
            </div>
            <div className="track-item">
              <span>Sleep Hours</span>
              <input 
                type="number"
                value={dailyStats.sleep}
                onChange={(e) => handleStatsChange('sleep', e.target.value)}
                placeholder="hours" 
              />
            </div>
            <div className="track-item">
              <span>Kick Count</span>
              <input 
                type="number"
                value={dailyStats.kicks}
                onChange={(e) => handleStatsChange('kicks', e.target.value)}
                placeholder="kicks" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Tracker; 