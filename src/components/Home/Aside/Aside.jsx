// React import
import React from 'react';

const Aside = ({ navLinks, openMenu }) => {
  return (
    <aside className="aside-nav" style={{left: openMenu ? "0" : "-100%"}}>
      <ul className="nav__list">
        {navLinks.map(({ id, title, link }) => (
          <li key={id} className="nav__list-item">
            <a
              key={id}
              href={link}
              className="nav__list-link"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
      
    </aside>
  );
}

export default Aside;
