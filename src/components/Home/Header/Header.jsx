import React from 'react';

const Header = ({ navLinks, setOpenMenu, openMenu }) => {
  // when the user scrolls the page, set background color for header and aside nav
  window.onscroll = () => {
    const header = document.querySelector('.header');
    const aside = document.querySelector('.aside-nav');

    if (window.pageYOffset > 0) {
      header.classList.add('header--active');
      aside.classList.add('aside-nav--active');
    } else {
      header.classList.remove('header--active');
      aside.classList.remove('aside-nav--active');
    }
  };

  return (
    <header className="header">
      {/* Menu button */}
      <button className="header__menu-btn" onClick={() => setOpenMenu(!openMenu)}>
        <span className="menu-btn__burger-line"></span>
        <span className="menu-btn__burger-line"></span>
        <span className="menu-btn__burger-line"></span>
      </button>

      {/* Navigation */}
      <nav className="header__nav">
        <ul className="header__nav__list">
          {navLinks.map(({ id, title, link }) => (
            <li key={id} className="header__nav__list-item">
              <a
                key={id}
                href={link}
                className="header__nav__list-link"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
