import React, { useState } from 'react';
import { Link } from 'react-router-dom';




function Projects() {

  const inventory_Info= () =>{
    window.open("https://github.com/dchaudhari0811/inventorys"); 
    console.log("clicked Linkedin!"); 
   }

   const personal_Info= () =>{
    window.open("https://github.com/dchaudhari0811"); 
    console.log("clicked Linkedin!"); 
   }


  const divStyle = {
    width: '575px',
    height: '375px',
    borderRadius: '15px',
    margin: '20px',
    transition: 'transform 0.3s, box-shadow 0.3s',
    position: 'relative',
    overflow: 'hidden',
  };

  
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: 'teal',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div>
      <div id="projectid">
        <a
          id="ProjectId"
          style={{
            paddingLeft: '85px',
            fontFamily: 'Courier New',
            fontSize: '40px',
            color: 'Teal',
            filter: 'brightness(70%)',
          }}
        >
          Projects
        </a>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px', marginRight: '80px' }}>
          <div
            style={{
              ...divStyle,
              backgroundImage: `url(${require('./inventory.jpg')})`,
              backgroundSize: '102%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              boxShadow:
                hoveredItem === 1
                  ? '0px 20px 40px rgba(0, 0, 0, 0.4)'
                  : '0px 6px 20px rgba(0, 0, 0, 0.2)',
              transform: hoveredItem === 1 ? 'scale(1.05)' : 'scale(1)',
              margin: '0 auto', 
            }}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredItem === 1 && (
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  borderRadius: '15px',
                  background: 'rgba(0, 0, 0, 0.8)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '18px',
                  opacity: 1,
                }}
              >
                <div style={{ marginBottom: '40px' }}>
                  <span
                    style={{
                      color: 'teal',
                      filter: 'brightness(100%)',
                      fontWeight: 'bold',
                      fontSize: '25px',
                    }}
                  >
                    Inventory App
                  </span>
                </div>
                <p style={{ width: '80%', textAlign: 'center'}}>
                  A basic React inventory app streamlines stock tracking for businesses, making inventory management
                  straightforward and efficient. It allows users to easily add, update, and remove items, ensuring a
                  simple and user-friendly experience.
                </p>
                <div style = {{marginTop: '20px'}}>
                <button style={buttonStyle} onClick = {inventory_Info}>Code & more Info.</button>
                </div>
              </div>
            )}
          </div>
          <div
            style={{
              ...divStyle,
              backgroundImage: `url(${require('./profile.jpg')})`,
              backgroundSize: '102%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              boxShadow:
                hoveredItem === 2
                  ? '0px 20px 40px rgba(0, 0, 0, 0.4)'
                  : '0px 6px 20px rgba(0, 0, 0, 0.2)',
              transform: hoveredItem === 2 ? 'scale(1.05)' : 'scale(1)',
            }}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredItem === 2 && (
              <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                borderRadius: '15px',
                background: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '18px',
                opacity: 1,
              }}
            >
              <div style={{ marginBottom: '20px' }}>
                <span
                  style={{
                    color: 'teal',
                    filter: 'brightness(100%)',
                    fontWeight: 'bold',
                    fontSize: '25px',
                  }}
                >
                  Personal Website
                </span>
              </div>
              <p style={{ width: '80%', textAlign: 'center'}}>
              Took the initiative to design and create this website from the ground up, 
              utilizing React and JavaScript to build a dynamic and interactive platform. 
              Incorporating my portfolio, and resume, this self-built website showcases 
              my professional accomplishments and passions effectively, 
              allowing visitors to explore my work, skills, 
              and experiences in an organized and user-friendly manner.
              </p>
              <div style = {{marginTop: '2px'}}>
              <button style={buttonStyle} onClick = {personal_Info}>Code & More Info.</button>
              </div>
            </div>
            )}
          </div>
        </div>

        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          
          <div
            style={{
              ...divStyle,
              backgroundColor: 'black',
              filter: 'brightness(90%)',
              boxShadow:
                hoveredItem === 3
                  ? '0px 20px 40px rgba(0, 0, 0, 0.4)'
                  : '0px 6px 20px rgba(0, 0, 0, 0.2)',
              transform: hoveredItem === 3 ? 'scale(1.05)' : 'scale(1)',
            }}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <div style = {{textAlign: 'center', lineHeight:'400px', fontSize: '60px', fontFamily: 'cursive'}}>
            <p style = {{color: 'white'}}>Working on More...</p>
            </div>
            {hoveredItem === 3 && (
              <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                borderRadius: '15px',
                background: 'rgba(0, 0, 0, 1.0)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '18px',
                opacity: 1,
              }}
            >
              <div style={{ marginBottom: '20px' }}>
                <span
                  style={{
                    color: 'teal',
                    filter: 'brightness(100%)',
                    fontWeight: 'bold',
                    fontSize: '25px',
                  }}
                >
                  Prior Projects
                </span>
              </div>
              <p style={{ width: '80%', textAlign: 'center'}}>
                I have done projects in high school, but I am trying to keep projects that are done mostly outside of college.
              </p>
              <div style = {{marginTop: '20px'}}>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
