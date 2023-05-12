import React from 'react';
import s1 from './../images/html.png';
import s2 from './../images/csharp.png'; 
import s3 from './../images/bootstrap.png'; 
import s4 from './../images/git.png'; 
import s5 from './../images/javascript.png'; 
import s6 from './../images/java.png'; 
import s7 from './../images/node.png'; 
import s8 from './../images/php.png'; 
import s9 from './../images/rails.png'; 
import s10 from './../images/sql.png'; 
import s11 from './../images/jquery.png'; 
import s12 from './../images/DNET.jpg'; 

const Tech = () => {
  return (
    <section id="skills" className="three">
      <div className="container skill-container">
        <header>
          <h2>Technology Proficiency</h2>
          <div className="title-icon"> <i className="fa fa-magic"></i> </div>
        </header>

        <div className="row">
          <div className="3u 12u(mobile) skill">
            <section className="box style1">
              <img src={s1} className="skill-image" alt="" />
              <p></p>
            </section>
          </div>
          <div className="3u 12u(mobile) skill">
            <section className="box style1">
              <img src={s2} className="skill-image" alt="" />
              <p></p>
            </section>
          </div>
          <div className="3u 12u(mobile) skill">
            <section className="box style1">
              <img src={s3} className="skill-image" alt="" />
              <p></p>
            </section>
          </div>
          <div className="3u 12u(mobile) skill">
            <section className="box style1">
              <img src={s4} className="skill-image" alt="" />
              <p></p>
            </section>
          </div>
        </div>

        <div className="row">
          <div className="3u 12u(mobile) skill">
            <section className="box style1">
              <img src={s5} className="skill-image" alt="" />
              <p></p>
            </section>
          </div>
          <div className="3u 12u(mobile) skill">
            <section className="box style1">
              <img src={s6} className="skill-image" alt="" />
              <p></p>
            </section>
          </div>
          <div className="3u 12u(mobile) skill">
            <section className="box style1">
              <img src={s7} className="skill-image" alt="" />
              <p></p>
            </section>
          </div>
          <div className="3u 12u(mobile) skill">
            <section className="box style1">
              <img src={s8} className="skill-image" alt="" />
              <p></p>
            </section>
          </div>
        </div>

        <div className="row">
          <div className="3u 12u(mobile) skill">
            <section className="box style1">
              <img src= {s9} className="skill-image" alt="" />
              <p></p>
            </section>
          </div>
          <div className="3u 12u(mobile) skill">
            <section className="box style1">
              <img src= {s10} className="skill-image" alt="" />
              <p></p>
            </section>
          </div>
          <div className="3u 12u(mobile) skill">
            <section className="box style1">
              <img src={s11} className="skill-image" alt="" />
              <p></p>
            </section>
          </div>
          <div className="3u 12u(mobile) skill">
            <section className="box style1">
            <img src={s12} className="skill-image" alt="" />
              <p></p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
