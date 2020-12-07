import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div>
          <Navigation />

            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/projects" component={Projects}/>
             <Route path="/workExperience" component={WorkExperience}/>
            <Route component={Error}/>
           </Switch>


           <Particles
                 params={{
                   particles: {
                     line_linked: {
                       shadow: {
                         enable: true,
                         color: "#3CA9D1",
                         blur: 5
                       }
                     }
                   }
                 }}
                 style={{
                   width: '100%',
                   height: '100%'
                 }}
               />
               
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
