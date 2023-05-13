import React,  { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or further processing here
    console.log('Name:', name);
    console.log('Email:', email);
    setIsSubmitted(true);
    // Reset the form fields
    setName('');
    setEmail('');
  };

  return (
    <section id="contact" className="four">
      <div className="container">
        <header>
          <h2>Contact</h2>
          <h3>Reach out and say hello.</h3>
        </header>

        <p>
          Discover the dead simple email I use to help my clients sell more in 7 days than they had in a month.
          Sign up for free and receive free advice on how to make money and improve your business.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <input type="text" placeholder="Name" id="name" value={name} onChange={handleNameChange} required />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <input type="email" placeholder="Email" id="email" value={email} onChange={handleEmailChange} required />
          </div>
          <button type="submit" style={{ width: '100%', height: '4rem', marginBottom: '1rem' }}>Sign up</button>
          {isSubmitted && <p>Thank you for signing up! Stay tuned!</p>}
        </form>

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
