import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StatusBar from './components/StatusBar';
import './App.css';

const App = () => (
  <div>
    <Nav />
    <StatusBar />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default App;
