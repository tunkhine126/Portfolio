import React, {Component} from 'react';
import './App.css';
import NavBar from './Components/Navbar'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import ContactMe from './Components/ContactMe'
import Blogs from './Components/Blogs'
import Landing from './Components/Landing'


class App extends Component {

  render() {
   return (
      <div className="App">
        <NavBar />
          <Landing/>
            <br />  
          <AboutMe/>
            <br />
          <Projects />
            <br />
         <Blogs />
          <br />
        <ContactMe />
          <br />
      </div>
    );
  }
}

export default App;
