import React from 'react';
import myPhoto from './mine.jpg'; 

function About() {
  return (
    <div className="about">
      <img src={myPhoto} alt="Your Name" className="profile-photo" />
      <h2>About Me</h2>
      <p>
        Hello, I am Sumathi. Currently, I am pursuing in VIT-AP University.
      </p>
      <p>
        I  work hard to get success in my work. I am very enthusiastic to gain more and more
skills. I am ready to work with the skills I have and I am very excited to gain
the skills which are unknown to me.
      </p>
    </div>
  );
}

export default About;
