import { db } from './config';
import { 
  collection, 
  getDocs, 
  addDoc, 
  doc, 
  deleteDoc, 
  updateDoc,
  query,
  orderBy
} from 'firebase/firestore';

// Get all blog posts
export const getBlogPosts = async () => {
  try {
    const blogRef = collection(db, 'blogs');
    const q = query(blogRef, orderBy('date', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting blog posts:', error);
    throw error;
  }
};

// Add a new blog post
export const addBlogPost = async (blogPost) => {
  try {
    const blogRef = collection(db, 'blogs');
    const docRef = await addDoc(blogRef, {
      ...blogPost,
      date: new Date().toISOString()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding blog post:', error);
    throw error;
  }
};

// Update a blog post
export const updateBlogPost = async (id, updates) => {
  try {
    const blogRef = doc(db, 'blogs', id);
    await updateDoc(blogRef, updates);
  } catch (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }
};

// Delete a blog post
export const deleteBlogPost = async (id) => {
  try {
    const blogRef = doc(db, 'blogs', id);
    await deleteDoc(blogRef);
  } catch (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }
}; 