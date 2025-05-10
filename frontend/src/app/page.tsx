'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Image from 'next/image';

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
 // const [blogs, setBlogs] = useState<Blog[]>([]);
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
        <Image
  src="/profile.jpg"
  alt="Profile"
  style={{ width: 200, height: 200, borderRadius: '50%', objectFit: 'cover', marginBottom: 30 }}
/>
        <h3 style={{ fontSize: '1.5rem', color: '#555' }}>Student</h3>
      </motion.section>

      {/* About Section */}
      <section style={{ backgroundColor: '#ffffff', minHeight: '60vh', padding: 50 }}>
        <motion.h2 initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          About Me
        </motion.h2>
        <p style={{ marginTop: 40, maxWidth: 800, marginInline: 'auto' }}>
  Hi, I am Ashritha Velineni, a passionate Computer Science student at Quinnipiac University. I completed my Bachelor degree in 2024 from the Institute of Aeronautical Engineering, graduating with a CGPA of 8.0. I am highly motivated to pursue a career as a Software Engineer and aim to work at one of the world's top multinational companies. I enjoy solving real-world problems with code and continuously strive to expand my knowledge and skills in software development.
  </p>
      </section>

      {/* Skills Section */}
      <section style={{ backgroundColor: '#e0f7fa', minHeight: '60vh', padding: 50 }}>
        <motion.h2 initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          Skills
        </motion.h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20, marginTop: 30 }}>
          {skills.map((skill: Skill) => (
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
          {projects.map((project: Project) => (
            <motion.div key={project.id} whileHover={{ scale: 1.05 }}
              style={{ padding: 20, border: '2px solid #fbc02d', borderRadius: 10, width: 250 }}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" style={{ color: '#f57f17' }}>View Project</a>
            </motion.div>
          ))}
        </div>
      </section>

{/*      
      <section style={{ backgroundColor: '#f3e5f5', minHeight: '60vh', padding: 50 }}>
        <motion.h2 initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          Blogs
        </motion.h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20, marginTop: 30 }}>
          {blogs.map((blog: Blog) => (
            <motion.div key={blog.id} whileHover={{ scale: 1.05 }}
              style={{ padding: 20, border: '2px solid #ba68c8', borderRadius: 10, width: 250 }}>
              <h4>{blog.title}</h4>
              <p>{blog.content.substring(0, 80)}...</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* Contact Section */}
      <section style={{ backgroundColor: '#6a0dad', color: 'white', minHeight: '60vh', padding: 50 }}>
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
