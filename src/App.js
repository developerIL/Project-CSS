import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import Projects from './components/Projects'
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Slider />
        <About/>
        <Projects />
        <Skills />
        <Contact />
        <Footer />

      {/* <div style={{marginLeft: '30rem'}}>
        <h2>Skills</h2>
                    <Skills
                        skill="Html/css"
                        progress={100}
                    />
                    <Skills
                        skill="Bootstrap"
                        progress={90}
                    />
                        <Skills
                        skill="Javascript"
                        progress={75}
                    />
                    <Skills
                        skill="React(js)"
                        progress={75}
                    />
                    <Skills
                        skill="Redux(js)"
                        progress={50}
                    />
                    <Skills
                        skill="Powershell"
                        progress={50}
                    />
                   </div> */}
      </Router>

    </React.Fragment>
  );
}

export default App;
