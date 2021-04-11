import React from 'react'
import './App.scss'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Resume from './components/Resume/Resume'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Home navPage={props.state.navPage} />} />
        <Route path="/about" render={() => <About aboutPage={props.state.aboutPage} navPage={props.state.navPage} />} />
        <Route path="/resume" render={() => <Resume navPage={props.state.navPage} />} />
        <Route path="/portfolio" render={() => <Portfolio navPage={props.state.navPage} />} />
        <Route path="/contact" render={() => <Contact navPage={props.state.navPage} />} />
      </Switch>
    </div>
  );
}

export default App