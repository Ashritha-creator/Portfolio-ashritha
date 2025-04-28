'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function AddSkillPage() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('https://portfolio-ashritha.onrender.com/skills',
        { name },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      alert('Skill Added Successfully!');
      router.push('/admin');
    } catch (err) {
      console.error(err);
      alert('Error adding skill!');
    }
  };
  
  return (
    <div style={{ padding: 20 }}>
      <h1>Add Skill</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Skill Name" value={name} onChange={(e) => setName(e.target.value)} style={{ display: 'block', marginBottom: 10 }} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
