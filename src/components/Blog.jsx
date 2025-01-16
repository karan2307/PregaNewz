import React from 'react';
import { motion } from 'framer-motion';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Essential Nutrients During Pregnancy",
      excerpt: "Discover the vital nutrients that support your baby's growth and development. From folic acid to omega-3s, learn what to include in your daily diet for a healthy pregnancy journey.",
      image: "https://i.pinimg.com/736x/bc/d1/0f/bcd10f3b70385b94d68e2594e8f4dd16.jpg",
      category: "Nutrition",
      readTime: "5 min read",
      author: "Dr. Sarah Wilson",
      date: "March 15, 2024",
      articleLink: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9182711/"
    },
    {
      id: 2,
      title: "Preparing for Labor and Delivery",
      excerpt: "Expert tips on preparing for the big day. From packing your hospital bag to understanding the stages of labor, get ready for a smooth delivery experience with our comprehensive guide.",
      image: "https://www.gentlenursery.com/wp-content/uploads/2023/09/23.jpg.webp",
      category: "Labor & Delivery",
      readTime: "8 min read",
      author: "Emma Thompson, Midwife",
      date: "March 12, 2024",
      articleLink: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9623903/"
    },
    {
      id: 3,
      title: "Self-Care During Pregnancy",
      excerpt: "Prioritize your well-being with these essential self-care practices. Learn how to manage stress, stay active, and maintain emotional balance throughout your pregnancy journey.",
      image: "https://pregnantchicken.com/content/images/2023/04/mother.jpg",
      category: "Wellness",
      readTime: "6 min read",
      author: "Dr. Emily Parker",
      date: "March 10, 2024",
      articleLink: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11608932/"
    }
  ];

  const handleReadMore = (articleLink) => {
    window.open(articleLink, '_blank');
  };

  return (
    <motion.div 
      className="feature-page blog-page"
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
        Pregnancy Blog
      </motion.h1>
      
      <motion.p
        className="page-description"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Expert insights and helpful tips for your pregnancy journey
      </motion.p>
      
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <motion.article 
            className="blog-card"
            key={post.id}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
            }}
          >
            <div className="blog-image-container">
              <motion.img 
                src={post.image} 
                alt={post.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="category-badge"
                whileHover={{ scale: 1.1 }}
              >
                {post.category}
              </motion.div>
            </div>
            
            <div className="blog-content">
              <div className="blog-meta">
                <motion.span 
                  className="author"
                  whileHover={{ color: "#ff6b6b" }}
                >
                  {post.author}
                </motion.span>
                <span className="date">{post.date}</span>
              </div>
              
              <motion.h2
                whileHover={{ color: "#ff6b6b" }}
              >
                {post.title}
              </motion.h2>
              
              <p className="excerpt">{post.excerpt}</p>
              
              <div className="blog-footer">
                <span className="read-time">
                  <motion.span 
                    className="icon"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    ⏱️
                  </motion.span>
                  {post.readTime}
                </span>
                
                <motion.button 
                  className="read-more-btn"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#ff4d8d"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleReadMore(post.articleLink)}
                >
                  Read More
                </motion.button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}

export default Blog; 