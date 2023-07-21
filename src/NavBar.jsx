import { Navbar, Nav } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';

function NavBars() {
  const [expanded, setExpanded] = useState(false);
  const menuRef = useRef(null);

  const toggleCollapse = () => {
    setExpanded(!expanded);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="h-100 d-flex align-items-center justify-content-center position-static">
      <div className="vertical-centerNav">
        <Navbar
          bg="light"
          expand="lg"
          style={{ borderRadius: '30px', transition: 'transform 0.3s' }}
          expanded={expanded}
          onToggle={toggleCollapse}
          ref={menuRef}
        >
          <div> 
          <Navbar.Toggle
            aria-controls="navbarResponsive"
            aria-expanded={expanded}
            aria-label="Toggle navigation"
            className={`navbar-toggler-right ${expanded ? 'expanded' : ''}`}
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          </div>
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="ml-auto" style={{ flexDirection: 'row' }}>
              <Nav.Link
                href="#mButton"
                style={{ paddingLeft: '20px', fontWeight: 'bold' }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#aboutid"
                style={{ paddingLeft: '20px', fontWeight: 'bold' }}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#projectid"
                style={{ paddingLeft: '20px', fontWeight: 'bold' }}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#skillid"
                style={{ paddingLeft: '20px', fontWeight: 'bold' }}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#contactmeid"
                style={{ paddingLeft: '20px', fontWeight: 'bold' }}
              >
                Contact Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBars;

