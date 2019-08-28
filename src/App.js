import React, {Component} from 'react';
import './App.css';
import NavigationBar from './Components/NavigationBar'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
// import ContactMe from './Components/ContactMe'
import Blogs from './Components/Blogs'
import Landing from './Components/Landing'
import Footer from './Components/Footer'

class App extends Component {

  render() {
   return (
      <div className="App">
       <NavigationBar />
        <Landing/>
          <br />
           <AboutMe />
              <Projects />
              <Blogs />
            <br /><br />  
          {/* <ContactMe />*/}
        <Footer />
      </div>
    );
  }
}

export default App;
