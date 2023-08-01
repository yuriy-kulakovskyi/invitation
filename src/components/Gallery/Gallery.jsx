import React from 'react';

// gallery the first photo
import gallery1 from '../../assets/img/gallery1.webp';

// gallery the second photo
import gallery2 from '../../assets/img/gallery2.webp';

// gallery the third photo
import gallery3 from '../../assets/img/gallery3.webp';

// styles
import '../styles/Gallery.css';

const Gallery = () => {
  return (
    <section className="gallery">
      <h1 className="gallery__title">
        Буду радий бачити тебе на моєму святі
      </h1>

      <a 
        href="#time-place"
        className='gallery__link'
      >
        Дізнатися деталі
      </a>

      <div className="gallery__images">
        <img 
          className="gallery__image"
          src={gallery1}
          alt="Gallery 1" 
        />

        <img
          className="gallery__image"
          src={gallery2}
          alt="Gallery 2"
        />

        <img
          className="gallery__image"
          src={gallery3}
          alt="Gallery 3"
        />
      </div>
    </section>
  );
}

export default Gallery;
