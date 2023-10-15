import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Certificates from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Education/>
      <Skills />
      <Certificates/>
      <Contact />
    </div>
  );
}

export default App;
