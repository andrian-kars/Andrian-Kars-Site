import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/resume" render={() => <Resume />} />
        <Route path="/portfolio" render={() => <Portfolio />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route component={Home} />
      </Switch>
    </div>
  );
}

export default App;
