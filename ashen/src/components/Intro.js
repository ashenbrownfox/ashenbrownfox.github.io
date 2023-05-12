import React from 'react';

const Intro = () => {
  return (
    <section id="top" className="one dark cover">
      <div className="container">
        <header>
          <h2 className="alt">
            Hi! I'm <strong>Ailun Shen</strong>, a Full Stack Software Engineer.
          </h2>
          <p>Scroll down below to learn more about me</p>
        </header>

        <footer>
          <a href="#about" className="button scrolly">Click to find out</a>
        </footer>
      </div>
    </section>
  );
};

export default Intro;