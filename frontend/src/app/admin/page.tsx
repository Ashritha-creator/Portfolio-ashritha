'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to Admin Dashboard!</h1>
      <p>You are logged in as Admin.</p>
    </div>
  );
}
