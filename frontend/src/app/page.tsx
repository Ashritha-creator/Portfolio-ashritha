'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Image from 'next/image';
import './HomePage.css';

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

export default function HomePage() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const skillsRes = await axios.get('https://portfolio-ashritha.onrender.com/skills');
        const projectsRes = await axios.get('https://portfolio-ashritha.onrender.com/projects');
        setSkills(skillsRes.data);
        setProjects(projectsRes.data);
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
    <div className="container">
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero-banner">
        <div className="hero-overlay">

          <div className="hero-text">
            <p>Hello, I am</p>
            <h1>Ashritha Velineni</h1>
            <h2>Student</h2>
          </div>
        </div>

        <div className="hero-image-circle">
          <Image
            src="/profile.jpg"
            alt="Ashritha"
            width={140}
            height={140}
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
        </div>
      </section>

      <section id="about" className="about">
        <motion.h2 className="section-heading" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          About Me
        </motion.h2>
        <p>
          Hi, I am Ashritha Velineni, a passionate Computer Science student at Quinnipiac University. I completed my
          Bachelor degree in 2024 from the Institute of Aeronautical Engineering, graduating with a CGPA of 8.0. I am
          highly motivated to pursue a career as a Software Engineer and aim to work at one of the world&apos;s top
          multinational companies. I enjoy solving real-world problems with code and continuously strive to expand my
          knowledge and skills in software development.
        </p>
      </section>

      <section id="skills" className="skills">
        <motion.h2 className="section-heading" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          Skills
        </motion.h2>
        <div className="skills-grid">
          {skills.map((skill: Skill) => (
            <motion.div key={skill.id} className="skill-card" whileHover={{ scale: 1.1 }}>
              {skill.name}
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="projects">
        <motion.h2 className="section-heading" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project: Project) => (
            <motion.div key={project.id} className="project-card" whileHover={{ scale: 1.05 }}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-form">
        <motion.h2 className="section-heading" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          Contact Me
        </motion.h2>
        <form onSubmit={handleContactSubmit}>
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <button type="submit">Send</button>
        </form>
      </section>

      <footer className="footer">
        © 2025 Ashritha Velineni | All Rights Reserved
      </footer>
    </div>
  );
}
