import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { addAppointment } from '../firebase/appointmentService';

function Resources() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleScheduleAppointment = async (provider) => {
    setSelectedProvider(provider);
    setShowModal(true);
  };

  const handleCourseAccess = (link) => {
    if (link && (link.startsWith('http://') || link.startsWith('https://'))) {
      window.open(link, '_blank');
    } else {
      alert('Course link will be available soon!');
    }
  };

  const validateForm = (formData) => {
    const errors = {};
    if (formData.get('phone').length !== 10) {
      errors.phone = 'Phone number must be 10 digits';
    }
    if (formData.get('name').length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    return errors;
  };

  const handleSubmitAppointment = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const errors = validateForm(formData);
    
    if (Object.keys(errors).length > 0) {
      setNotification({
        show: true,
        type: 'error',
        message: Object.values(errors).join(', ')
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const appointmentData = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        date: new Date().toISOString(),
        hospital: selectedProvider.name,
        status: 'pending'
      };

      const appointmentId = await addAppointment(appointmentData);
      
      if (!appointmentId) {
        throw new Error('No appointment ID returned');
      }

      setNotification({
        show: true,
        type: 'success',
        message: `Appointment scheduled successfully at ${selectedProvider.name}! We will contact you shortly at ${formData.get('phone')}.`
      });
      setShowModal(false);
      
    } catch (error) {
      console.error('Error:', error);
      setNotification({
        show: true,
        type: 'error',
        message: 'Unable to schedule appointment. Please try again or contact the hospital directly.'
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setNotification({ show: false, type: '', message: '' });
      }, 5000);
    }
  };

  const resources = {
    healthcare: [
      {
        name: "Apollo Hospital",
        contact: "022 3350 3350",
        services: ["24/7 Emergency Care", "Prenatal Classes", "Labor & Delivery"],
        rating: 4.8,
        image: "https://th.bing.com/th/id/OIP.7JtzFq56rVVkt0rHFRwebQHaE8?w=1980&h=1320&rs=1&pid=ImgDetMain"
      },
      {
        name: "Fortis Hospital",
        contact: "022 3919 9222",
        services: ["Obstetrics", "Ultrasound", "Genetic Counseling"],
        rating: 4.9,
        image: "https://supernutritious.net/wp-content/uploads/2022/07/lotus-births-the-potential-risks-and-benefits-d393e04.jpg"
      }
    ],
    education: [
      {
        title: "Understanding Your Pregnancy",
        duration: "6 hours",
        instructor: "National Geography",
        link: "https://youtu.be/XEfnq4Q4bfk?feature=shared",
        thumbnail: "https://themomsatodds.com/wp-content/uploads/2018/10/s-a-r-a-h-s-h-a-r-p-973519-unsplash-1024x680.jpg"
      },
      {
        title: "Preparing for Labor",
        duration: "4 weeks",
        instructor: "Margaret Matheny",
        link: "https://youtu.be/SW2qtG7ZROw?feature=shared",
        thumbnail: "https://i.pinimg.com/originals/df/ef/22/dfef224e9e6e9f14503b912b27b1acd9.jpg"
      }
    ]
  };

  return (
    <motion.div 
      className="feature-page resources-page"
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
        Resources & Support
      </motion.h1>

      <div className="resources-layout">
        {/* Healthcare Providers Section */}
        <motion.section 
          className="healthcare-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="section-title">Healthcare Providers</h2>
          <div className="providers-grid">
            {resources.healthcare.map((provider, index) => (
              <motion.div 
                className="provider-card"
                key={index}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="provider-image">
                  <img src={provider.image} alt={provider.name} />
                </div>
                <div className="provider-content">
                  <h3>{provider.name}</h3>
                  <div className="rating">
                    {"⭐".repeat(Math.floor(provider.rating))}
                    <span className="rating-number">({provider.rating})</span>
                  </div>
                  <p className="contact">{provider.contact}</p>
                  <ul className="services-list">
                    {provider.services.map((service, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                      >
                        {service}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button 
                    className="contact-btn"
                    whileHover={{ scale: 1.05, backgroundColor: "#ff4d8d" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleScheduleAppointment(provider)}
                  >
                    Schedule Appointment
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Educational Resources Section */}
        <motion.section 
          className="education-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="section-title">Educational Resources</h2>
          <div className="education-grid">
            {resources.education.map((resource, index) => (
              <motion.div 
                className="education-card"
                key={index}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="resource-thumbnail">
                  <img src={resource.thumbnail} alt={resource.title} />
                  <div className="resource-type">{resource.type}</div>
                </div>
                <div className="resource-content">
                  <h3>{resource.title}</h3>
                  <p className="instructor">{resource.instructor}</p>
                  <p className="duration">{resource.duration}</p>
                  <motion.button 
                    className="access-btn"
                    whileHover={{ scale: 1.05, backgroundColor: "#4a314a" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCourseAccess(resource.link)}
                  >
                    Access Video
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {showModal && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="modal-content"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h2>Schedule Appointment</h2>
            <h3>{selectedProvider?.name}</h3>
            <form onSubmit={handleSubmitAppointment}>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" name="name" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number"
                />
              </div>
              <div className="modal-buttons">
                <motion.button 
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isLoading}
                >
                  {isLoading ? 'Scheduling...' : 'Confirm Appointment'}
                </motion.button>
                <motion.button 
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowModal(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cancel
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

      <AnimatePresence>
        {notification.show && (
          <motion.div
            className={`notification ${notification.type}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="notification-content">
              {notification.type === 'success' ? '✅' : '❌'}
              <p>{notification.message}</p>
            </div>
            <button 
              className="close-notification"
              onClick={() => setNotification({ show: false, type: '', message: '' })}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Resources; 