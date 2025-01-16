import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Community() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Sarah M.",
      title: "First Trimester Tips",
      content: "Here's what helped me with morning sickness...",
      likes: 24,
      comments: 8,
      timestamp: "2 hours ago",
      isLiked: false
    },
    {
      id: 2,
      author: "Emma K.",
      title: "Exercise During Pregnancy",
      content: "My favorite pregnancy-safe workout routines...",
      likes: 15,
      comments: 5,
      timestamp: "5 hours ago"
    }
  ]);
  
  const [newPost, setNewPost] = useState('');

  const handleCreatePost = () => {
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: "You",
        title: "New Post",
        content: newPost,
        likes: 0,
        comments: 0,
        timestamp: "Just now",
        isLiked: false
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  return (
    <motion.div 
      className="feature-page community-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>MomCare Community</h1>
      
      <div className="community-layout">
        <motion.div 
          className="create-post"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <textarea 
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share your thoughts or ask a question..."
            className="post-input"
          />
          <button 
            className="post-btn"
            onClick={handleCreatePost}
          >
            Create Post
          </button>
        </motion.div>

        <div className="posts-grid">
          {posts.map((post, index) => (
            <motion.div 
              className="post-card"
              key={post.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="post-header">
                <h3>{post.title}</h3>
                <span className="author">by {post.author}</span>
              </div>
              <p>{post.content}</p>
              <div className="post-footer">
                <div className="post-stats">
                  <motion.span 
                    className={`like-button ${post.isLiked ? 'liked' : ''}`}
                    onClick={() => handleLike(post.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {post.isLiked ? '❤️' : '🤍'} {post.likes}
                  </motion.span>
                  <span>💬 {post.comments}</span>
                </div>
                <span className="timestamp">{post.timestamp}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Community; 