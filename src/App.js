import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/about" render={() => <About />} />
      <Route exact path="/resume" render={() => <Resume />} />
      <Route exact path="/portfolio" render={() => <Portfolio />} />
      <Route exact path="/contact" render={() => <Contact />} />
    </div>

  );
}

export default App;
