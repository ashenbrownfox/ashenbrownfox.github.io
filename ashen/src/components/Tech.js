import React from 'react';
import s1 from './../images/javascript.png';
import s2 from './../images/csharp.png';
import s3 from './../images/dnet.png';
import s4 from './../images/react.png';
import s5 from './../images/py.png';
import s6 from './../images/java.png';
import s7 from './../images/node.png';
import s8 from './../images/php.png';
import s9 from './../images/angular.png';
import s10 from './../images/sql.png';
import s11 from './../images/redis.svg';
import s12 from './../images/aws.png';

const skills = [
  { image: s1 },
  { image: s2 },
  { image: s3 },
  { image: s4 },
  { image: s5 },
  { image: s6 },
  { image: s7 },
  { image: s8 },
  { image: s9 },
  { image: s10 },
  { image: s11 },
  { image: s12 },
];

const Tech = () => {
  return (
    <section id="skills" className="three">
      <div className="container skill-container">
        <header>
          <h2>Languages/Frameworks</h2>
          <div className="title-icon">
            <i className="fa fa-magic"></i>
          </div>
        </header>

        <div className="row">
          {skills.map((skill, index) => (
            <div className="3u 12u(mobile) skill" key={index}>
              <section className="box style1">
                <img src={skill.image} className="skill-image" alt="" />
                <p></p>
              </section>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
