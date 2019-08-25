import React, {Component} from 'react';
import './App.css';
import NavigationBar from './Components/Navbar'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import ContactMe from './Components/ContactMe'


class App extends Component {

  render() {
   return (
      <div className="App">
        <NavigationBar />
          <br/>
        <AboutMe/>
          <br />
        <Projects />
          <br />
        <ContactMe />
          <br />
      </div>
    );
  }
}

export default App;
