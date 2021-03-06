import React, {Component} from 'react';
import './Stylesheets/App.css'
import NavigationBar from './Components/NavigationBar'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
// import ContactMe from './Components/ContactMe'
import Landing from './Components/Landing'
import Footer from './Components/Footer'
import Articles from './Components/Articles'

class App extends Component {

  render() {
   return (
     <div className="App">
      <NavigationBar />
      <Landing/>
      <AboutMe />
      <Projects />
      <Articles />
      <Footer />
    </div>
    );
  }
}

export default App;
