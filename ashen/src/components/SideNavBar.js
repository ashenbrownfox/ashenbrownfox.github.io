import React, {Component} from 'react';
import profilepic from './../css/images/avatar1.jpg';

class SideNavBar extends Component {
  render(){
    return (
      <div>
        <div id="header">
          <div class="top">
              <div id="logo">
                <span class="image avatar48"><img src={profilepic} alt="" /></span>
                <h1 id="title">Ailun Shen</h1>
                <p>Software Developer</p>
              </div>
              <nav id="nav">
                <ul>
                  <li><a href="#top" id="top-link" class="skel-layers-ignoreHref"><span class="icon fa-home">Intro</span></a></li>
                  <li><a href="#about" id="about-link" class="skel-layers-ignoreHref"><span class="icon fa-user">About Me</span></a></li>
                  <li><a href="#skills" id="skills-link" class="skel-layers-ignoreHref"><span class="icon fa-magic">Skills</span></a></li>
                  <li><a href="#portfolio" id="portfolio-link" class="skel-layers-ignoreHref"><span class="icon fa-th">Portfolio</span></a></li>
                  <li><a href="#contact" id="contact-link" class="skel-layers-ignoreHref"><span class="icon fa-envelope">Contact</span></a></li>
                </ul>
              </nav>
          </div>
          <div class="bottom">
              <ul class="icons">
                <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
                <li><a href="https://github.com/ashenbrownfox" class="icon fa-github"><span class="label">Github</span></a></li>
                <li><a href="https://www.linkedin.com/in/ailun-shen-4b2026109" class="icon fa-linkedin"><span class="label">Linkedin</span></a></li>
                <li><a href="mailto:ailun.shen@wmich.edu" class="icon fa-envelope"><span class="label">Email</span></a></li>
              </ul>
          </div>

          </div>
      </div>
    );
  }
}
export default SideNavBar;