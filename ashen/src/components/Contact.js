import React, {Component} from 'react';

class Contact extends Component {
  render(){
    return (
        <section id="contact" class="four">
            <div class="container">
                <header>
                    <h2>Contact</h2>
                    <h3>Reach out and say hello.</h3>
                </header>

                <p>Let's have a chat. Please feel free to reach out to me if you have any questions or comments about how I can help you. Also, feel free to just say hello.
                </p>
                <ul class="icons">
                    <li><a href="https://github.com/ashenbrownfox" class="icon fa-github"><span class="label">Github</span></a></li>
                    <li><a href="https://www.linkedin.com/in/ailun-shen-4b2026109" class="icon fa-linkedin"><span class="label">Linkedin</span></a></li>
                    <li><a href="mailto:ailun.shen@wmich.edu" class="icon fa-envelope"><span class="label">Email</span></a></li>
                    <li><a href="tel:269-389-9719" class="icon fa-phone"><span class="label">Phone</span></a></li>
                </ul>
            </div>
        </section>
    );
  }
}
export default Contact;
