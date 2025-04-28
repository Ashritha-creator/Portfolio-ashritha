'use client';

export default function BlogCard({ blog }: { blog: any }) {
  return (
    <div style={{ padding: 20, border: '2px solid #ba68c8', borderRadius: 10, width: 250 }}>
      <h4>{blog.title}</h4>
      <p>{blog.content.substring(0, 80)}...</p>
    </div>
  );
}
