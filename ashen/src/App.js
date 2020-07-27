import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import './css/main.css'
import SideNavBar from './components/SideNavBar';
import Copywrite from './components/Copywrite';
import Intro from './components/Intro';
import About from './components/AboutMe';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

class App extends Component {
  render(){
    const projects = [
      {name: "Breaking Bad Chart", url: "https://ashenbrownfox.github.io/bbchart/", imgUrl: "", des: "A React App showing a breakdown of breaking bad characters" },
      {name: "EntreDev", url: "https://salty-oasis-29940.herokuapp.com", imgUrl: "", des: "Pairs Entrepreneurs and Devs" },
      {name: "Job Searching", url: "https://ashenbrownfox.github.io/GitHubJobs/", imgUrl: "", des: "Job Aggregator using github api" }
    ];
    return (
      <div className="App">
        <SideNavBar/>
        <div id="main">
        <Intro />
        <About/>
          <header className="App-header">
            <img src="https://i.redd.it/vvkdu8k9y4d51.jpg" className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </header>
          <Tech/>
          <Portfolio projects={projects}/>
          <Contact/>       
        </div>
        <Copywrite/>
      
      </div>
    );
  }
}

export default App;
