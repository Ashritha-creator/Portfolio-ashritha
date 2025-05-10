'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

type Skill = { id: number; name: string };
type Project = { id: number; title: string; description: string; link: string };

export default function AdminPage() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [newSkill, setNewSkill] = useState('');
  const [newProject, setNewProject] = useState({ title: '', description: '', link: '' });

  useEffect(() => {
    async function fetchData() {
      const skillRes = await axios.get('https://portfolio-ashritha.onrender.com/skills');
      const projRes = await axios.get('https://portfolio-ashritha.onrender.com/projects');
      setSkills(skillRes.data);
      setProjects(projRes.data);
    }
    fetchData();
  }, []);

  const addSkill = async () => {
    if (!newSkill.trim()) return;
    const res = await axios.post('https://portfolio-ashritha.onrender.com/skills', { name: newSkill });
    setSkills([...skills, res.data]);
    setNewSkill('');
  };

  const deleteSkill = async (id: number) => {
    await axios.delete(`https://portfolio-ashritha.onrender.com/skills/${id}`);
    setSkills(skills.filter(s => s.id !== id));
  };

  const addProject = async () => {
    const { title, description, link } = newProject;
    if (!title || !description || !link) return;
    const res = await axios.post('https://portfolio-ashritha.onrender.com/projects', newProject);
    setProjects([...projects, res.data]);
    setNewProject({ title: '', description: '', link: '' });
  };

  const deleteProject = async (id: number) => {
    await axios.delete(`https://portfolio-ashritha.onrender.com/projects/${id}`);
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Admin Dashboard</h1>

      {/* Skills Section */}
      <section style={{ marginTop: '2rem' }}>
        <h2>Manage Skills</h2>
        <input
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="New skill"
          style={{ padding: '0.5rem', marginRight: '1rem' }}
        />
        <button onClick={addSkill}>Add Skill</button>

        <ul>
          {skills.map(skill => (
            <li key={skill.id} style={{ marginTop: '0.5rem' }}>
              {skill.name}
              <button onClick={() => deleteSkill(skill.id)} style={{ marginLeft: '1rem', color: 'red' }}>Delete</button>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects Section */}
      <section style={{ marginTop: '3rem' }}>
        <h2>Manage Projects</h2>
        <input
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
          placeholder="Title"
          style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem' }}
        />
        <input
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          placeholder="Description"
          style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem' }}
        />
        <input
          value={newProject.link}
          onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
          placeholder="Link"
          style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem' }}
        />
        <button onClick={addProject}>Add Project</button>

        <ul>
          {projects.map(project => (
            <li key={project.id} style={{ marginTop: '0.5rem' }}>
              <strong>{project.title}</strong> — {project.link}
              <button onClick={() => deleteProject(project.id)} style={{ marginLeft: '1rem', color: 'red' }}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
