'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function HomePage() {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const skillsRes = await axios.get('https://portfolio-ashritha.onrender.com/skills');
        const projectsRes = await axios.get('https://portfolio-ashritha.onrender.com/projects');
        const blogsRes = await axios.get('https://portfolio-ashritha.onrender.com/blogs');
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
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Hero Section */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
        style={{ backgroundColor: '#ffe4e6', minHeight: '100vh', textAlign: 'center', padding: 50 }}>
        <img src="/profile.png"
          alt="Profile" style={{ width: 150, height: 150, borderRadius: '50%', objectFit: 'cover', marginBottom: 20 }} />
        <h1 style={{ fontSize: '2.5rem' }}>Ashritha Velineni</h1>
        <h3 style={{ fontSize: '1.5rem', color: '#555' }}>Student</h3>
      </motion.section>

      {/* About Section */}
      <section style={{ backgroundColor: '#ffffff', minHeight: '60vh', padding: 50 }}>
        <motion.h2 initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          About Me
        </motion.h2>
        <p style={{ marginTop: 20, maxWidth: 800, marginInline: 'auto' }}>
          My Name is Ashritha Velineni , Here is my intro 
        </p>
      </section>

      {/* Skills Section */}
      <section style={{ backgroundColor: '#e0f7fa', minHeight: '60vh', padding: 50 }}>
        <motion.h2 initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          Skills
        </motion.h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20, marginTop: 30 }}>
          {skills.map((skill: any) => (
            <motion.div key={skill.id} whileHover={{ scale: 1.1 }}
              style={{ padding: 20, border: '2px solid #00acc1', borderRadius: 10, minWidth: 100 }}>
              {skill.name}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section style={{ backgroundColor: '#fff9c4', minHeight: '60vh', padding: 50 }}>
        <motion.h2 initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          Projects
        </motion.h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20, marginTop: 30 }}>
          {projects.map((project: any) => (
            <motion.div key={project.id} whileHover={{ scale: 1.05 }}
              style={{ padding: 20, border: '2px solid #fbc02d', borderRadius: 10, width: 250 }}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" style={{ color: '#f57f17' }}>View Project</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blogs Section */}
      <section style={{ backgroundColor: '#f3e5f5', minHeight: '60vh', padding: 50 }}>
        <motion.h2 initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          Blogs
        </motion.h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20, marginTop: 30 }}>
          {blogs.map((blog: any) => (
            <motion.div key={blog.id} whileHover={{ scale: 1.05 }}
              style={{ padding: 20, border: '2px solid #ba68c8', borderRadius: 10, width: 250 }}>
              <h4>{blog.title}</h4>
              <p>{blog.content.substring(0, 80)}...</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ backgroundColor: '#c8e6c9', minHeight: '60vh', padding: 50 }}>
        <motion.h2 initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          Contact Me
        </motion.h2>
        <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 20 }}>
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)}
            style={{ marginBottom: 10, padding: 10, width: '300px' }} />
          <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: 10, padding: 10, width: '300px' }} />
          <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)}
            style={{ marginBottom: 10, padding: 10, width: '300px', height: 100 }} />
          <button type="submit" style={{ padding: 10, width: '150px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: 5 }}>
            Send
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#263238', color: 'white', padding: 20, textAlign: 'center' }}>
        © 2025 Ashritha Velineni | All Rights Reserved
      </footer>
    </div>
  );
}
