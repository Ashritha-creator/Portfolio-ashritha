'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ textAlign: 'center', marginBottom: 50 }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Pig_farm_Vampula_1.jpg/640px-Pig_farm_Vampula_1.jpg"
        alt="Profile"
        style={{ width: 200, borderRadius: '50%', marginBottom: 20 }}
      />
      <h1>Ashritha Velineni</h1>
      <h3>Student</h3>
      <p>
        The pig (Sus domesticus), also called swine (pl.: swine) or hog, is an omnivorous, domesticated, even-toed, hoofed mammal...
      </p>
    </motion.div>
  );
}
