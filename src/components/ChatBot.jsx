import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your pregnancy assistant. How can I help you today?", isBot: true }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setMessages(prev => [...prev, { text: inputText, isBot: false }]);

    const response = getBotResponse(inputText.toLowerCase());
    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 1000);

    setInputText('');
  };

  const getBotResponse = (input) => {
    if (input.includes('hello') || input.includes('hi')) {
      return "Hi there! How can I assist you with your pregnancy journey?";
    }
    if (input.includes('pain') || input.includes('cramp')) {
      return "If you're experiencing severe pain, please contact your healthcare provider immediately. For mild cramps, try resting and staying hydrated.";
    }
    if (input.includes('nausea') || input.includes('morning sickness')) {
      return "Try eating small, frequent meals and ginger tea. If severe, consult your doctor about anti-nausea medication.";
    }
    if (input.includes('appointment')) {
      return "You can schedule an appointment through our Resources page. Would you like me to guide you there?";
    }
    if (input.includes('exercise') || input.includes('workout')) {
      return "Check out our Workout page for safe pregnancy exercises. Always consult your doctor before starting any exercise routine.";
    }
    return "I'm not sure about that. Would you like to speak with a healthcare provider? You can schedule an appointment in our Resources section.";
  };

  return (
    <>
      <motion.div
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? '×' : '💬'}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <div className="chatbot-header">
              <h3>Pregnancy Assistant</h3>
              <span className="online-status">●</span>
            </div>

            <div className="chatbot-messages">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`message ${message.isBot ? 'bot' : 'user'}`}
                  initial={{ opacity: 0, x: message.isBot ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {message.text}
                </motion.div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="chatbot-input">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatBot; 