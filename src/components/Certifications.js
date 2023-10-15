import React from 'react';

const certificationData = [
  {
    id: 1,
    title: 'Certified in C-Language',
  },
  {
    id: 2,
    title: 'Certied in Java',
  },
  {
    id: 2,
    title: 'Certied in Python',
  },
];

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>
      <ul>
        {certificationData.map((certification) => (
          <li key={certification.id}>
            <p>{certification.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;
