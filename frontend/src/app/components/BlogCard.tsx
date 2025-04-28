'use client';

type Blog = {
    id: number;
    title: string;
    content: string;
  };
  
  export default function BlogCard({ blog }: { blog: Blog }) {
    return (
    <div style={{ padding: 20, border: '2px solid #ba68c8', borderRadius: 10, width: 250 }}>
      <h4>{blog.title}</h4>
      <p>{blog.content.substring(0, 80)}...</p>
    </div>
  );
}
