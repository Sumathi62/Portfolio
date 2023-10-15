import React from 'react';

const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science',
    institution: 'VIT-AP University',
    year: '2021 - 2025',
  },
  {
    id: 2,
    degree: 'Intermediate MPC',
    institution: 'Sri Gowtami Junior College',
    year: '2019 - 2021',
  },
  {
    id: 3,
    degree: 'Secondary Education',
    institution: 'Pratibha VidyaNiketan',
    year: '2018 - 2019',
  },
];

function Education() {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <ul>
        {educationData.map((entry) => (
          <li key={entry.id}>
            <h3>{entry.degree}</h3>
            <p>{entry.institution}</p>
            <p>{entry.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;
