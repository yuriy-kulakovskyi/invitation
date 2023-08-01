// React import
import React, { useState } from 'react';

// styles
import './App.css';

// Home component import
import Home from './components/Home/Home';

// About component import
import About from './components/About/About';

// Gallery component import
import Gallery from './components/Gallery/Gallery';

// Timetable component import
import Timetable from './components/Timetable/Timetable';

// Footer component import
import Footer from './components/Footer/Footer';

function App() {
  // open menu state
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="App"
      onClick={() => {
        if (openMenu) {
          setOpenMenu(false);
        }
      }}
    >
      {/* Home */}
      <Home 
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />

      {/* About */}
      <About />

      {/* Gallery */}
      <Gallery />

      {/* Timetable */}
      <Timetable />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
