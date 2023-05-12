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
          Let's have a chat. Please feel free to reach out to me if you have any questions or comments about how I can help you. Also, feel free to just say hello.
        </p>

        <ul className="icons">
          <li>
            <a href="https://github.com/ashenbrownfox" className="icon fa-github">
              <span className="label">Github</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ailun-shen-4b2026109" className="icon fa-linkedin">
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
