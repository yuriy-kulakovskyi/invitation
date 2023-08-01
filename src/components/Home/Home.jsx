// React import
import React from 'react';

// Aside component import
import Aside from './Aside/Aside';

// Header component import
import Header from './Header/Header';

// Main component import
import Main from './Main/Main';

// styles
import '../styles/Home.css';

// navigation array
const navLinks = [
  {
    id: 0,
    title: "Про іменинника",
    link: "#about"
  },

  {
    id: 1,
    title: "Час та Місце",
    link: "#time-place"
  }
];

const Home = ({ openMenu, setOpenMenu }) => {
  return (
    <section className="home">
      {/* Header */}
      <Header
        navLinks={navLinks}
        setOpenMenu={setOpenMenu}
        openMenu={openMenu}
      />

      {/* Aside */}
      <Aside
        navLinks={navLinks}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />

      {/* Main */}
      <Main />

    </section>
  );
}

export default Home;
