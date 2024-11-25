import { useState } from 'react';
import { motion } from 'framer-motion';

const Share = () => {
  const [progress, setProgress] = useState(0);

  const handleShare = () => {
    if (progress < 100) {
      setProgress((prev) => Math.min(prev + 20, 100));

      setTimeout(() => {
        if (progress < 80) {
          window.open(
            'https://api.whatsapp.com/send?text=Check+out+this+amazing+website! http://localhost:5174/share',
            '_blank'
          );
        } else {
          alert('Thank you for sharing!');
        }
      }, 600);
    }
  };

  return (
    // <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center px-4">
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg backdrop-blur-md w-full max-w-md bg-gradient-to-r from-indigo-500 to-purple-600"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-2xl font-bold text-white mb-4 uppercase tracking-wide text-center "
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
        >
          Share This Website
        </motion.h1>
        <motion.p
          className="text-white text-center mb-6 text-lg"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Click the button below to share on WhatsApp and help us grow!
        </motion.p>
        <motion.button
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-lg transition-transform duration-300 shadow-md flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShare}
        >
          Share on WhatsApp
        </motion.button>
        <div className="mt-6 relative bg-gray-300 h-4 rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-green-500 rounded-full"
            style={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
          <motion.span
            className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {progress}%
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
};

export default Share;
