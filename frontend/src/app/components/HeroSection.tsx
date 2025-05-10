'use client';

import { motion } from 'framer-motion';'
import Image from 'next/image;

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ textAlign: 'center', marginBottom: 50 }}
    >
      <Image
        src="/profile.jpg"
        alt="Profile"
        style={{ width: 200, borderRadius: '50%', marginBottom: 20 }}
      />
      <h1>Ashritha Velineni</h1>
      <h3>Student</h3>
    </motion.div>
  );
}
