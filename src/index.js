import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/out.css';
import Nav from './components/Nav.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    {/* <About />
    <Skills />
    <Experience />
    <Projects /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
