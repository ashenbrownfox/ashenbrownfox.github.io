import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="four">
      <div className="container">
        <header>
          <h2>Contact</h2>
          <h3>Reach out and say hello.</h3>
        </header>

        <p>
          Discover the dead simple email I use to help my clients sell more in 7 days than they had in a month.
          Sign up and receive a PDF  with the email and a step step walkthrough.
        </p>

        <ul className="icons">
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
          <li>
            <a href="tel:269-389-9719" className="icon fa-phone">
              <span className="label">Phone</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
