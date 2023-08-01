import React from 'react';

// styles 
import "../styles/Footer.css";

// banner
import banner from "../../assets/img/banner.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <img 
        className='footer__banner'
        src={banner}
        alt="Banner" 
      />

      <h1 className="footer__title">
        Буду радий бачити тебе
      </h1>

      <p className="footer__paragraph">
        Якщо з якихось причин ти не зможеш бути зі мною на моєму святі, будь ласка, повідом мене про твою відсутність якнайшвидше.
      </p>
    </footer>
  );
}

export default Footer;
