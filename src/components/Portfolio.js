import React from 'react';

const Portfolio = ({ projects }) => {
  return (
    <section id="portfolio" className="four">
      <div className="container">
        <header>
          <h2>Portfolio</h2>
        </header>
        <p>Some projects and snippets I've been working on.</p>

        <div className="row">
          {projects.map((project, index) => (
            <div className="4u 12u$(mobile)" key={index}>
              <article className="item">
                <a href={project.link} className="image fit">
                  <img src={project.imageSrc} alt="" />
                </a>
                <header>
                  <h3>{project.title}</h3>
                </header>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
