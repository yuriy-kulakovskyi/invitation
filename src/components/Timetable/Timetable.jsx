import React from 'react';

// banner image
import banner from "../../assets/img/banner.webp";

// styles
import "../styles/Timetable.css";

const Timetable = () => {
  return (
    <section className="timetable" id="time-place">
      <img 
        src={banner}
        alt="Banner"
        className='timetable__banner'
      />

      <div className="timetable__content">
        <h1 className="timetable__title">
          Розклад дня
        </h1>

        <p className="timetable__paragraph">
          Конкурси, розваги та веселощі
        </p>
      </div>
    </section>
  );
}

export default Timetable;
