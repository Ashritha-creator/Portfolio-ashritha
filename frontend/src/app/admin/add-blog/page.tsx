'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function AddBlogPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/blogs', {
        title,
        content,
      });
      alert('Blog Added Successfully!');
      router.push('/admin');
    } catch (err) {
      console.error(err);
      alert('Error adding blog!');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Add Blog</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} style={{ display: 'block', marginBottom: 10 }} />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} style={{ display: 'block', marginBottom: 10 }} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
