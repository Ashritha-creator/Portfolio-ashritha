'use client';

type Skill = {
    id: number;
    name: string;
  };
  
  export default function SkillCard({ skill }: { skill: Skill }) {
    return (
    <div style={{ padding: 10, border: '1px solid black', borderRadius: 5 }}>
      <h4>{skill.name}</h4>
    </div>
  );
}
