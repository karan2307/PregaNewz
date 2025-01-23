import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { db } from '../firebase/config';
import { useNavigate } from 'react-router-dom';

function AuthForm() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const auth = getAuth();

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, redirect to home
        navigate('/');
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [auth, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const firestore = getFirestore();

    try {
      if (isRegistering) {
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;

        await addDoc(collection(firestore, 'users'), {
          uid: user.uid,
          name: formData.name,
          phone: formData.phone,
          email: formData.email
        });

        localStorage.setItem('user', JSON.stringify({ uid: user.uid, name: formData.name }));
        alert('Registration successful!');
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;

        localStorage.setItem('user', JSON.stringify({ uid: user.uid, email: formData.email }));
        alert('Login successful!');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      alert(error.message);
    }

    console.log("Form Data:", formData);
  };

  console.log("AuthForm component rendered");

  return (
    <motion.div 
      className="auth-form-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isRegistering && (
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
        )}
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-btn">{isRegistering ? 'Register' : 'Login'}</button>
      </form>
      <p onClick={() => setIsRegistering(!isRegistering)} className="toggle-form">
        {isRegistering ? 'Already have an account? Login' : 'New here? Register'}
      </p>
    </motion.div>
  );
}

export default AuthForm; 