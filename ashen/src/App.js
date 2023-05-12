import React from 'react';
import './css/App.css';
import './css/main.css'
import SideNavBar from './components/SideNavBar';
import Footer from './components/Footer';
import Intro from './components/Intro';
import About from './components/AboutMe';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

const App = () => {
  {
    const projects = [
      {name: "Breaking Bad Chart", url: "https://ashenbrownfox.github.io/bbchart/", imgUrl: "", desc: "A React App showing a breakdown of breaking bad characters" },
      {name: "EntreDev", url: "https://salty-oasis-29940.herokuapp.com", imgUrl: "", desc: "Pairs Entrepreneurs and Devs" },
      {name: "Job Searching", url: "https://ashenbrownfox.github.io/GitHubJobs/", imgUrl: "", desc: "Job Aggregator using github api" }
    ];
    return (
      <div className="App">
        <SideNavBar/>
        <div id="main">
        <Intro />
        <About/>
          <Tech/>
          <Portfolio projects={projects}/>
          <Contact/>       
        </div>
        <Footer/>
      
      </div>
    );
  }
}

export default App;
