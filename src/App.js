import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StatusBar from './components/StatusBar';
import Experience from './components/Experience';
import './App.css';

const App = () => (
  <div>
    <Nav />
    <StatusBar />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </div>
);

export default App;
