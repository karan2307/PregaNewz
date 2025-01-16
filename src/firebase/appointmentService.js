import { db } from './config';
import { collection, addDoc } from 'firebase/firestore';

export const addAppointment = async (appointmentData) => {
  try {
    const appointmentRef = collection(db, '1');
    
    // Add timestamp and format data
    const formattedData = {
      ...appointmentData,
      createdAt: new Date().toISOString(),
      phone: appointmentData.phone.toString(), // Ensure phone is stored as string
      status: 'pending'
    };

    const docRef = await addDoc(appointmentRef, formattedData);
    
    if (!docRef.id) {
      throw new Error('Failed to get document reference');
    }
    
    return docRef.id;
  } catch (error) {
    console.error('Error scheduling appointment:', error);
    throw new Error('Failed to schedule appointment: ' + error.message);
  }
}; 