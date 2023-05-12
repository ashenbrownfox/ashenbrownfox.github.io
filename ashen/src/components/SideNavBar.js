import React from 'react';
import pfp from  './../images/avatar1.jpg';

const SideNavBar = () => {
  return (
    <div>
      <div id="header">
        <div className="top">
          <div id="logo">
            <span className="image avatar48">
              <img src={pfp} alt="pfp" />
            </span>
            <h1 id="title">Ailun Shen</h1>
            <p>Software Engineer</p>
          </div>
          <nav id="nav">
            <ul>
              <li>
                <a href="#top" id="top-link" className="skel-layers-ignoreHref">
                  <span className="icon fa-home">Intro</span>
                </a>
              </li>
              <li>
                <a href="#about" id="about-link" className="skel-layers-ignoreHref">
                  <span className="icon fa-user">About Me</span>
                </a>
              </li>
              <li>
                <a href="#skills" id="skills-link" className="skel-layers-ignoreHref">
                  <span className="icon fa-magic">Skills</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" id="portfolio-link" className="skel-layers-ignoreHref">
                  <span className="icon fa-th">Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#contact" id="contact-link" className="skel-layers-ignoreHref">
                  <span className="icon fa-envelope">Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="bottom">
          <ul className="icons">
            <li>
              <a href="#" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/ashenbrownfox" className="icon fa-github">
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ailun-shen" className="icon fa-linkedin">
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a href="mailto:ailun.shen@wmich.edu" className="icon fa-envelope">
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
