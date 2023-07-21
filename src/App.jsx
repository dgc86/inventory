import React, { useState, useEffect } from 'react';
import Socials from "./Socials";
import Top from "./Top";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import ContactMe from "./ContactMe";
import NavBar from "./NavBar";
import Resumes from "./Resumes";
import { Route, Routes } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import './App.css';
import ProfileImage from "./ProfileImage";
import ScreenNavBar from "./ScreenNavBar"


function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [showBubbles, setShowBubbles] = useState(true);
  const [bubblesPositions, setBubblesPositions] = useState([]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setShowScrollButton(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowBubbles(false);
    }, 5000); 

    return () => {
      clearTimeout(timer);
    };
  }, []);

  
  const checkOverlap = (x, y) => {
    const overlap = bubblesPositions.some((position) => {
      const distance = Math.sqrt((x - position.x) ** 2 + (y - position.y) ** 2);
      return distance < 80; 
    });

    return overlap;
  };

  
  const spawnRandomBubble = () => {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let left, top;
    do {
      left = Math.random() * viewportWidth;
      top = Math.random() * viewportHeight;
    } while (checkOverlap(left, top));

    bubble.style.left = `${left}px`;
    bubble.style.top = `${top}px`;

    document.querySelector(".bubbles-container").appendChild(bubble);
    setBubblesPositions((prevPositions) => [...prevPositions, { x: left, y: top }]);
  };

  useEffect(() => {
    if (showBubbles) {
      for (let i = 0; i < 101; i++) {
        spawnRandomBubble();
      }
    }
  }, [showBubbles]);

  return (
    <div className="App_Personal">
     
      {showBubbles && (
        <div className="bubbles-container" onClick={spawnRandomBubble}>
         
        </div>
      )}

      <Socials />
      <Routes>
        <Route path="/" element={<Home setShowScrollButton={setShowScrollButton} scrollToTop={scrollToTop} />} />
        <Route path="/Resumes" element={<Resumes />} />
      </Routes>
      {showScrollButton && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: 'turquoise',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            zIndex: '999',
          }}
          onClick={scrollToTop}
          whileHover = {{}}
        >
          <FaArrowUp style={{ color: 'white', fontSize: '20px' }} />
        </div>
      )}
    </div>
  );
}

function Home({ setShowScrollButton, scrollToTop }) {
  useEffect(() => {
    const handleScrollRight = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      setShowScrollButton(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScrollRight);
    return () => window.removeEventListener('scroll', handleScrollRight);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <Top />
      <NavBar />
      <ScreenNavBar/>
      <About />
      <ProfileImage/>
      <Projects />
      <Skills />
      <ContactMe />
    </div>
  );
}

export default App;
