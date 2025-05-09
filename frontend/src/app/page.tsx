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
      {/* Hero */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
        style={{ backgroundColor: '#fef3c7', padding: '4rem 1rem', textAlign: 'center' }}>
        <img src="/profile.jpg" alt="Ashritha" style={{
          width: 160, height: 160, borderRadius: '50%', objectFit: 'cover', marginBottom: 20,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }} />
        <h1 style={{ fontSize: '2.5rem', margin: '1rem 0' }}>Ashritha Velineni</h1>
        <h3 style={{ color: '#4b5563' }}>Student | Aspiring Full Stack Developer</h3>
      </motion.section>

      {/* About */}
      <section style={{ backgroundColor: '#ffffff', padding: '4rem 2rem', textAlign: 'center' }}>
        <h2>About Me</h2>
        <p style={{ maxWidth: 800, margin: '1rem auto', fontSize: '1.1rem' }}>
          The pig (Sus domesticus), also called swine or hog, is an omnivorous, domesticated, even-toed, hoofed mammal...
        </p>
      </section>

      {/* Skills */}
      <section style={{ backgroundColor: '#e0f2fe', padding: '4rem 2rem' }}>
        <h2 style={{ textAlign: 'center' }}>Skills</h2>
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem',
          marginTop: '2rem'
        }}>
          {skills.map((skill: Skill) => (
            <div key={skill.id} style={{
              background: '#fff', padding: '1rem 2rem', borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
            }}>{skill.name}</div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section style={{ backgroundColor: '#fef9c3', padding: '4rem 2rem' }}>
        <h2 style={{ textAlign: 'center' }}>Projects</h2>
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem',
          marginTop: '2rem'
        }}>
          {projects.map((p: Project) => (
            <div key={p.id} style={{
              background: '#fff', padding: '1.5rem', borderRadius: '10px',
              width: 280, boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
            }}>
              <h4>{p.title}</h4>
              <p>{p.description}</p>
              <a href={p.link} target="_blank" style={{ color: '#2563eb' }}>Visit</a>
            </div>
          ))}
        </div>
      </section>

      {/* Blogs */}
      <section style={{ backgroundColor: '#f3e8ff', padding: '4rem 2rem' }}>
        <h2 style={{ textAlign: 'center' }}>Blogs</h2>
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem',
          marginTop: '2rem'
        }}>
          {blogs.map((blog: Blog) => (
            <div key={blog.id} style={{
              background: '#fff', padding: '1.2rem', borderRadius: '10px',
              width: 260, boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
            }}>
              <h4>{blog.title}</h4>
              <p>{blog.content.slice(0, 90)}...</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section style={{ backgroundColor: '#d1fae5', padding: '4rem 2rem', textAlign: 'center' }}>
        <h2>Contact Me</h2>
        <form onSubmit={handleContactSubmit} style={{
          maxWidth: 400, margin: '2rem auto', display: 'flex',
          flexDirection: 'column', gap: '1rem'
        }}>
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} rows={4} required />
          <button type="submit" style={{
            padding: '0.8rem', backgroundColor: '#059669', color: 'white',
            border: 'none', borderRadius: '6px'
          }}>Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1f2937', color: 'white', padding: '1.5rem', textAlign: 'center' }}>
        © 2025 Ashritha Velineni. All rights reserved.
      </footer>
    </div>
  );
}
