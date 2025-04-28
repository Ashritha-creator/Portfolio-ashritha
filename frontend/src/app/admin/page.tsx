'use client';

import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Dashboard</h1>
      <div style={{ marginTop: 20 }}>
        <button onClick={() => router.push('/admin/add-project')} style={{ marginBottom: 10 }}>
          Add Project
        </button><br/>
        <button onClick={() => router.push('/admin/add-skill')} style={{ marginBottom: 10 }}>
          Add Skill
        </button><br/>
        <button onClick={() => router.push('/admin/add-blog')} style={{ marginBottom: 10 }}>
          Add Blog
        </button>
      </div>
    </div>
  );
}
