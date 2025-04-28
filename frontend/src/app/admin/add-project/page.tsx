'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function AddProjectPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/projects', {
        title,
        description,
        link,
      });
      alert('Project Added Successfully!');
      router.push('/admin');
    } catch (err) {
      console.error(err);
      alert('Error adding project!');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Add Project</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} style={{ display: 'block', marginBottom: 10 }} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} style={{ display: 'block', marginBottom: 10 }} />
        <input type="text" placeholder="Link" value={link} onChange={(e) => setLink(e.target.value)} style={{ display: 'block', marginBottom: 10 }} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
