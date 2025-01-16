import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Calendar() {
  const [currentWeek, setCurrentWeek] = useState(1);
  
  const weeklyData = {
    1: {
      development: "Your baby is the size of a poppy seed. The fertilized egg creates a blastocyst that will develop into the baby's organs and body parts.",
      symptoms: [
        "Missed period",
        "Mild cramping",
        "Spotting (implantation bleeding)",
        "Fatigue"
      ],
      tips: [
        "Start taking prenatal vitamins",
        "Quit smoking and alcohol",
        "Schedule your first prenatal visit",
        "Track your symptoms"
      ],
      size: "Poppy seed (0.1 inch)"
    },
    4: {
      development: "Your baby is the size of a sweet pea. The neural tube is developing, which will become the brain and spinal cord.",
      symptoms: [
        "Morning sickness",
        "Tender breasts",
        "Frequent urination",
        "Food aversions"
      ],
      tips: [
        "Eat small, frequent meals",
        "Stay hydrated",
        "Get plenty of rest",
        "Avoid raw foods"
      ],
      size: "Sweet pea (0.2 inch)"
    },
    8: {
      development: "Your baby is the size of a raspberry. Tiny fingers and toes are forming, and major organs are developing.",
      symptoms: [
        "Nausea and vomiting",
        "Food cravings",
        "Mood swings",
        "Bloating"
      ],
      tips: [
        "Try ginger for morning sickness",
        "Wear comfortable bras",
        "Start pregnancy exercises",
        "Join a prenatal class"
      ],
      size: "Raspberry (0.6 inch)"
    },
    12: {
      development: "Your baby is the size of a lime. The baby's reflexes are developing, and they can now move their fingers and toes.",
      symptoms: [
        "Decreased nausea",
        "Visible bump",
        "Increased energy",
        "Dizziness"
      ],
      tips: [
        "Start sleeping on your side",
        "Plan your maternity wardrobe",
        "Schedule prenatal tests",
        "Stay active with gentle exercises"
      ],
      size: "Lime (2.1 inches)"
    },
    16: {
      development: "Your baby is the size of an avocado. The baby can make facial expressions and their eyes are becoming sensitive to light.",
      symptoms: [
        "Round ligament pain",
        "Increased appetite",
        "Reduced morning sickness",
        "Nasal congestion"
      ],
      tips: [
        "Start doing Kegel exercises",
        "Plan your maternity photoshoot",
        "Stay hydrated with water and fresh juices",
        "Consider starting a pregnancy journal"
      ],
      size: "Avocado (4.6 inches)"
    },
    20: {
      development: "Your baby is the size of a banana. This is a milestone week as you can find out the baby's gender during the anatomy scan.",
      symptoms: [
        "Visible baby movements",
        "Heartburn and indigestion",
        "Lower back pain",
        "Swollen ankles"
      ],
      tips: [
        "Schedule your anatomy scan",
        "Start doing pregnancy-safe exercises",
        "Use a pregnancy pillow for better sleep",
        "Begin planning your nursery"
      ],
      size: "Banana (6.5 inches)"
    },
    24: {
      development: "Your baby is the size of a corn. Their face is fully formed, and they're developing a sleep-wake cycle.",
      symptoms: [
        "Braxton Hicks contractions",
        "Stretch marks appearing",
        "Increased body temperature",
        "Leg cramps at night"
      ],
      tips: [
        "Start counting baby kicks",
        "Take regular breaks at work",
        "Moisturize skin to help with stretch marks",
        "Consider joining prenatal classes"
      ],
      size: "Corn (8.7 inches)"
    }
  };

  const getWeekData = (selectedWeek) => {
    const weeks = Object.keys(weeklyData).map(Number);
    const closestWeek = weeks.reduce((prev, curr) => {
      return Math.abs(curr - selectedWeek) < Math.abs(prev - selectedWeek) ? curr : prev;
    });
    return weeklyData[closestWeek];
  };

  const currentWeekData = getWeekData(currentWeek);

  return (
    <motion.div 
      className="feature-page calendar-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="page-title"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Pregnancy Calendar
      </motion.h1>

      <div className="calendar-layout">
        <motion.div 
          className="week-selector"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="week-display">
            <motion.h2
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              Week {currentWeek}
            </motion.h2>
            <motion.p 
              className="baby-size"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Baby is the size of a {currentWeekData.size}
            </motion.p>
          </div>
          <div className="slider-container">
            <input 
              type="range" 
              min="1" 
              max="40" 
              value={currentWeek}
              onChange={(e) => setCurrentWeek(parseInt(e.target.value))}
              className="week-slider"
            />
            <motion.div 
              className="week-labels"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span>First Trimester</span>
              <span>Second Trimester</span>
              <span>Third Trimester</span>
            </motion.div>
          </div>
        </motion.div>

        <div className="info-grid">
          <motion.div 
            className="info-card development"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="card-header">
              <motion.span 
                className="icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                👶
              </motion.span>
              <h3>Baby's Development</h3>
            </div>
            <p>{currentWeekData.development}</p>
          </motion.div>

          <motion.div 
            className="info-card symptoms"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="card-header">
              <motion.span 
                className="icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                🌡️
              </motion.span>
              <h3>Common Symptoms</h3>
            </div>
            <ul>
              {currentWeekData.symptoms.map((symptom, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {symptom}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="info-card tips"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="card-header">
              <motion.span 
                className="icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                💡
              </motion.span>
              <h3>Weekly Tips</h3>
            </div>
            <ul>
              {currentWeekData.tips.map((tip, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {tip}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Calendar; 