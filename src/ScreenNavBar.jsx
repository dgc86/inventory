import { Navbar, Nav } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';

function NavBars() {
  const [isFixed, setIsFixed] = useState(false);
  const menuRef = useRef(null);
  const threshold = 600; 

  const handleScroll = () => {
    setIsFixed(window.pageYOffset >= threshold);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isFixed && (
        <div className={`navbar-wrapper fixed-top`} ref={menuRef}>
          <Navbar
            bg="light"
            expand="lg"
            style={{
              borderRadius: '30px',
              height: '80px', // Adjust the height as needed
              justifyContent: 'center',
              color: 'Teal'
            }}
          >
            <div>
              <Navbar.Toggle
                aria-controls="navbarResponsive"
                aria-label="Toggle navigation"
                className={`navbar-toggler-right expanded`}
              >
                <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
            </div>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="ml-auto" style={{ flexDirection: 'row' }}>
                <Nav.Link
                  href="#mButton"
                  style={{
                    paddingLeft: '450px',
                    paddingRight: '20px',
                    fontWeight: 'bold',
                    fontSize: '20px', 
                  }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#aboutid"
                  style={{
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    fontWeight: 'bold',
                    fontSize: '20px', 
                  }}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  href="#projectid"
                  style={{
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    fontWeight: 'bold',
                    fontSize: '20px',
                  }}
                >
                  Projects
                </Nav.Link>
                <Nav.Link
                  href="#skillid"
                  style={{
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    fontWeight: 'bold',
                    fontSize: '20px',
                  }}
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  href="#contactmeid"
                  style={{
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    fontWeight: 'bold',
                    fontSize: '20px', 
                  }}
                >
                  Contact Me
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      )}
    </div>
  );
}

export default NavBars;
