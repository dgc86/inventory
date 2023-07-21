import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaFileExcel, FaReact, FaJava, FaPython, FaHtml5, FaCss3, FaGitAlt } from 'react-icons/fa';
import { AiFillPlusSquare } from 'react-icons/ai';

function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skillsSection');
      const rect = element.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight;
      setIsInView(isInView);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update card sizes and positions here
    }, 50); // Adjust the interval for smoother or faster motion

    return () => clearInterval(interval);
  }, []);

  const cardConfigurations = [
    { skill: 'Excel', x: -180, y: -80, icon: FaFileExcel },
    { skill: 'React', x: -60, y: -80, icon: FaReact },
    { skill: 'Java', x: 60, y: -80, icon: FaJava },
    { skill: 'Python', x: 180, y: -80, icon: FaPython },
    { skill: 'HTML', x: -180, y: 0, icon: FaHtml5 },
    { skill: 'CSS', x: -60, y: 0, icon: FaCss3 },
    { skill: 'Tableau', x: 60, y: 0, icon: AiFillPlusSquare },
    { skill: 'Git', x: 180, y: 0, icon: FaGitAlt },
  ];

  const cardSize = { width: 115, height: 55 };
  const gridGap = 20;
  const gridColumns = Math.min(Math.floor(100 / gridGap), 4);
  const gridRows = Math.ceil(cardConfigurations.length / gridColumns);
  const cardScale = 2.0; // Scale factor for card size

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div id="skillsSection">
      <div id="skillid">
        <a
          id="skillId"
          style={{
            paddingLeft: '100px',
            fontFamily: 'Courier New',
            fontSize: '40px',
            color: 'Teal',
            filter: 'brightness(70%)',
          }}
        >
          Skills
        </a>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridColumns}, ${70 * cardScale}px)`,
          gridTemplateRows: `repeat(${gridRows}, ${cardSize.height * cardScale}px)`,
          justifyContent: 'left',
          marginLeft: '300px',
          gap: `${gridGap}px`,
          marginTop: '60px',
          filter: 'brightness(80%)',
        }}
      >
        {cardConfigurations.map(({ skill, x, y, icon: Icon }, index) => (
          <motion.div
            key={index}
            style={{
              width: `${cardSize.width}px`,
              height: `${cardSize.height}px`,
              borderRadius: '15px',
              border: '1px solid black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              transition: 'transform 0.3s',
              transformOrigin: 'center center',
              scale: hoveredIndex === index ? 2.5 : cardScale,
              opacity: isInView ? 1 : 0, // Fade in when in view
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{ x: isInView ? x + 100 : 75 }} // Animate when in view
            transition={{ delay: 0.1 }}
            whileHover={{
              boxShadow: '0px 6px 20px rgba(64, 224, 208, 1)', // Change the shadow color here
            }}
          >
            <div style={{ marginRight: '22px' }}>
              <motion.div whileHover={{ color: 'black' }}>
                <Icon size={24} color="teal" style={{ filter: 'brightness(95%)' }} />
              </motion.div>
            </div>
            <motion.span
              whileHover={{ color: 'teal', filter: 'brightness(80%)' }}
              style={{ color: 'black', fontSize: '15px', fontFamily: 'Courier New', alignItems: 'center' }}
            >
              {skill}
            </motion.span>
          </motion.div>
        ))}
      </div>
      <div style={{ paddingLeft: '1000px' }}>
        <p style={{ fontSize: '8px', fontFamily: 'Courier New' }} whileHover={{ color: 'teal' }}>
          *These are just the ones that I have used most
        </p>
      </div>
    </div>
    </div>
  );
}

export default Skills;
