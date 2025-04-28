'use client';

export default function ProjectCard({ project }: { project: any }) {
  return (
    <div style={{ padding: 10, border: '1px solid black', borderRadius: 5, width: 250 }}>
      <h4>{project.title}</h4>
      <p>{project.description}</p>
      <a href={project.link} target="_blank">View Project</a>
    </div>
  );
}
