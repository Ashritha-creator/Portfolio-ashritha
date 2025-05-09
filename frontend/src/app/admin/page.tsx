'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

type Skill = {
  id: number;
  name: string;
};

type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
};

type Blog = {
  id: number;
  title: string;
  content: string;
};

export default function HomePage() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const [skillsRes, projectsRes, blogsRes] = await Promise.all([
          axios.get('https://portfolio-ashritha.onrender.com/skills'),
          axios.get('https://portfolio-ashritha.onrender.com/projects'),
          axios.get('https://portfolio-ashritha.onrender.com/blogs'),
        ]);
        setSkills(skillsRes.data);
        setProjects(projectsRes.data);
        setBlogs(blogsRes.data);
      } catch (err) {
        console.error('Error fetching data', err);
      }
    }
    fetchData();
  }, []);

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for reaching out, Ashritha will get back to you!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', lineHeight: 1.6 }}>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          minHeight: '100vh',
          backgroundColor: '#111827',
          color: '#ffffff',
          alignItems: 'center',
          padding: '3rem',
        }}
      >
        {/* Left side: Image */}
        <div style={{ flex: '1 1 400px', textAlign: 'center' }}>
          <img
            src="/profile.jpg"
            alt="Ashritha"
            style={{
              width: '100%',
              maxWidth: '400px',
              borderRadius: '12px',
              objectFit: 'cover',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.5)',
            }}
          />
        </div>

        {/* Right side: Text */}
        <div style={{ flex: '1 1 400px', padding: '2rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>My Portfolio</h1>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#d1d5db' }}>
            Welcome to my personal portfolio website. Here you can explore my projects, skills, and blog articles.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button style={{
              padding: '0.8rem 1.5rem',
              backgroundColor: '#f9fafb',
              color: '#111827',
              fontWeight: 'bold',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer'
            }}>
              Explore Now
            </button>
            <button style={{
              padding: '0.8rem 1.5rem',
              backgroundColor: 'transparent',
              border: '2px solid #f9fafb',
              color: '#f9fafb',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Play Video ▶
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
