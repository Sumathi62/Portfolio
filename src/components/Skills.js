import React from 'react';

const skillsData = [
  { id: 1, name: 'JavaScript', proficiency: 'Advanced' },
  { id: 2, name: 'React', proficiency: 'Intermediate' },
  { id: 3, name: 'HTML/CSS', proficiency: 'Advanced' },
  { id: 4, name: 'Node.js', proficiency: 'Intermediate' },
  
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        {skillsData.map((skill) => (
          <li key={skill.id}>
            <strong>{skill.name}:</strong> {skill.proficiency}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
