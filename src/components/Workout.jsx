import React from 'react';
import { motion } from 'framer-motion';

function Workout() {
  const exercises = [
    {
      title: "Pregnancy Yoga",
      description: "Gentle stretching and breathing exercises",
      image: "https://source.unsplash.com/800x600/?pregnancy,yoga",
      duration: "20-30 minutes"
    },
    {
      title: "Walking",
      description: "Low-impact cardiovascular exercise",
      image: "https://source.unsplash.com/800x600/?walking,nature",
      duration: "15-30 minutes"
    },
    {
      title: "Swimming",
      description: "Perfect for reducing joint pressure",
      image: "https://source.unsplash.com/800x600/?swimming,pool",
      duration: "20-30 minutes"
    }
  ];

  return (
    <motion.div 
      className="feature-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Safe Pregnancy Exercises</h1>
      <div className="exercise-grid">
        {exercises.map((exercise, index) => (
          <motion.div 
            className="exercise-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            key={exercise.title}
          >
            <motion.img 
              src={exercise.image} 
              alt={exercise.title}
              whileHover={{ scale: 1.05 }}
            />
            <h3>{exercise.title}</h3>
            <p>{exercise.description}</p>
            <span className="duration">Duration: {exercise.duration}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Workout; 