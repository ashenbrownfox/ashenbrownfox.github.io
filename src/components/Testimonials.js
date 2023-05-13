import React from 'react';
import data from './data.json';

const Testimonials = () => {
  const testimonials = data.testimonials;

  
  return (
    <section id="testimonials" className="three">
      <div className="container">
        <header>
          <h2>Testimonials</h2>
        </header>
        {testimonials.map((testimonial) => (
          <div className="testimonial" key={testimonial.id}>
            <blockquote>{testimonial.testimonial}</blockquote>
            <cite>- {testimonial.name}</cite>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
