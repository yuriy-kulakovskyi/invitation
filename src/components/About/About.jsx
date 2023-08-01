import React from 'react';

// styles
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="about__title">
        Про іменинника
      </h1>

      {/* card with information about the birthday boy */}
      <div className="about__card">
        <div className="about__card__img"></div>

        <div className="about__card__info">
          <h2 className="about__card__info__name">
            Роман
          </h2>

          <h3 className="about__card__info__subtitle">
            Іменинник
          </h3>
        </div>
      </div>
    </section>
  );
}

export default About;
