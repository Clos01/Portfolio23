import React from 'react';

// Individual skill component with a progress bar
const Skill = ({ name, level }) => (
  <div className="skill-item">
    <div className="skill-name">{name}</div>
    <div className="skill-bar-container">
      <div className="skill-bar"
      style={{ animation: `skillBarAnimation${level} 3s infinite` }}></div>
      {/* Create a dynamic @keyframes animation based on the level */}
      <style>{`
        @keyframes skillBarAnimation${level} {
          0% {
            width: 0%;
          }
          100% {
            width: ${level}%;
          }
        }
      `}</style>
    </div>
  </div>
);

// Main skills component
export default function Skills() {
  // Define an array of skills with their respective levels
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 75 },
    { name: 'express.js', level: 30 },
    { name: 'Node.js', level: 20 },
    { name: 'NativeReact', level: 10 },
    { name: 'Nod.js', level: 10 },
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
}
