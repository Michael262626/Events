import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const images = [
  '/assets/background.jpeg',
  '/assets/dImage.jpeg',
  '/assets/dImage2.jpeg',
  '/assets/dImage3.jpeg',
];

export default function AnimatedBackground() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full bg-cover bg-center relative text-white flex justify-center items-center">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[currentImage]}
          src={images[currentImage]}
          alt={`Background ${currentImage + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>
    </div>
  );
}
