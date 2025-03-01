import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

const WelcomeAnimation = ({ onComplete }) => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
      onComplete();
    }, 4000); // Animation duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-[#1f2937] to-[#2d3748]"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              className="mb-8"
            >
              <FaEnvelope className="text-red-500 text-7xl mx-auto" />
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-4"
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Welcome to
              </motion.h1>
              
              <motion.h2
                className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                Bharat Postal Network
              </motion.h2>
              
              <motion.p
                className="text-gray-300 text-xl mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                Connecting India, Delivering Trust
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="mt-8"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="inline-block"
              >
                <div className="w-16 h-1 bg-red-500 rounded-full mx-auto" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeAnimation; 