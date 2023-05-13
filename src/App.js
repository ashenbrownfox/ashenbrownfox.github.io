import React from 'react';
import './css/App.css';
import './css/main.css'
import SideNavBar from './components/SideNavBar';
import Footer from './components/Footer';
import Intro from './components/Intro';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import p1 from './images/p1.jpg';
import p2 from './images/p2.jpg';
import p3 from './images/p3.jpg';
import p4 from './images/p4.jpg';
import p5 from './images/p5.jpg';
import p6 from './images/p6.jpg';
import p7 from './images/p7.jpg';

const App = () => {
    const projects = [
      {
        title: "FizzBuzz!",
        imageSrc: p1,
        link: "https://645fa7ea04596954b48526a7--regal-rugelach-04c811.netlify.app/",
      },
      {
        title: "Patatap Clone",
        imageSrc: p2,
        link: "https://645fa63004596953ab85267e--incandescent-sprinkles-aa9824.netlify.app/",
      },
      {
        title: "Meme Gen",
        imageSrc: p3,
        link: "/memegen",
      },
      {
        title: "Breaking Bad",
        imageSrc: p4,
        link: "https://ashenbrownfox.github.io/bbchart/",
      },
      {
        title: "Guess Color",
        imageSrc: p5,
        link: "https://645fa82f00a471546617e168--effortless-cannoli-e070a1.netlify.app/",
      },
      {
        title: "Inspired by: Pokeball One",
        imageSrc: p6,
        link: "https://645fa8f915bb464dd5b5fbc3--effulgent-melba-fdc8ec.netlify.app/",
      },
      {
        title: "Tic-Tac-Toe",
        imageSrc: p7,
        link: "https://645fa93469629c549875c942--subtle-basbousa-c7868d.netlify.app/",
      },
      {
        title: "Webshop",
        imageSrc: p2,
        link: "https://benekefabricators.netlify.app/",
      },
      {
        title: "EntrepreDev",
        imageSrc: p4,
        link: "https://salty-oasis-29940.herokuapp.com/",
      },
      {
        title: "Job Searching",
        imageSrc: p6,
        link: "https://ashenbrownfox.github.io/GitHubJobs/",
      },
      {
        title: "3D Sphere, powered by AFrame",
        imageSrc: p3,
        link: "/VirtualReality",
      },
      {
        title: "Dev Portfolio",
        imageSrc: p6,
        link: "http://dyno-portfolio.s3-website-us-east-1.amazonaws.com/",
      },
    ];
    
    return (
      <div className="App">
        <SideNavBar/>
        <div id="main">
        <Intro />
        <About/>
        <Testimonials/>
          <Tech/>
          <Portfolio projects={projects}/>
          <Contact/>       
        </div>
        <Footer/>
      
      </div>
    );
}

export default App;
