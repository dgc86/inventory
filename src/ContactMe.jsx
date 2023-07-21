import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_c32bb0s', 'template_gb75wsz', form.current, 'B5EOuIlNsVCgcuY2t')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  useEffect(() => {
    const sendButton = document.getElementById('sendButton');
    const resizeButton = () => {
      if (window.innerWidth < 768) {
        sendButton.style.width = '100%';
        sendButton.style.height = '50px';
        sendButton.style.fontSize = '20px';
      } else {
        sendButton.style.width = '415px';
        sendButton.style.height = '75px';
        sendButton.style.fontSize = 'inherit';
      }
    };
    window.addEventListener('resize', resizeButton);
    resizeButton();
    return () => {
      window.removeEventListener('resize', resizeButton);
    };
  }, []);

  return (
    <div id="contactmeid">
      <a
        id="aboutId"
        style={{
          paddingLeft: '60px',
          fontFamily: 'Courier New',
          fontSize: '40px',
          color: 'Teal',
          filter: 'brightness(70%)',
        }}
      >
        Contact Me
      </a>

      <div>
        <div id="aboutFieldOutside">
          <div className="container col-8">
            <div
              className="col-12  rounded-5 border-dark position-static border"
              id="contactId"
              style={{
                font: '18px',
                transition: 'transform 0.4s',
                transformOrigin: 'center',
                transform: 'scale(1)',
                marginTop: '20px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#00827f',
              }}
              onMouseEnter={() => {
                const contactId = document.getElementById('contactId');
                contactId.style.transform = 'scale(1.10)';
                contactId.style.boxShadow =
                  '0px 5px 10px 5px rgba(0, 0, 0, 0.5)';
              }}
              onMouseLeave={() => {
                const contactId = document.getElementById('contactId');
                contactId.style.transform = 'scale(1)';
                contactId.style.boxShadow = '';
                contactId.style.backgroundColor = '#00827f';
              }}
            >
              <div style={{ width: '50%', color: '#F5F5F5' }}>
                <p
                  className="custom-paragraph"
                  style={{
                    marginBottom: '20px',
                    marginLeft: '20px',
                    alignItems: 'center',
                    fontSize: '18px',
                  }}
                >
                  Thank you for exploring my website! I'm excited to connect with you and continue our journey together.
                  If you have any questions, ideas, or just want to say hello, don't hesitate to reach out using the
                  contact information below. Let's bring your visions to life and create something extraordinary.
                  I can't wait to hear from you and embark on this thrilling adventure!
                </p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '100px',
                  }}
                >
                  <div className="vertical-line mr-4"></div>
                  <div style={{ textAlign: 'center', color: '#F5F5F5' }}>
                    <p className="mb-0 font-weight-bold">Contact Information:</p>
                    <p className="mb-0">
                      Phone: +1 (201) 892-9911
                      <br />
                      Email: dchaudhari2003@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: '50%',
                  paddingLeft: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <h2 style={{ fontType: 'Myriad' }}>Contact Form</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="form-group row">
                    <div className="col" style={{ marginTop: '20px' }}>
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        className="form-control rounded-3"
                        name="name"
                        style={{ width: '80%', backgroundColor: '#F5F5F5' }}
                      />
                    </div>
                    <div className="col" style={{ marginTop: '20px' }}>
                      <label htmlFor="phoneNumber">Phone Number:</label>
                      <input
                        type="text"
                        className="form-control rounded-3"
                        name="phone_Number"
                        style={{ width: '80%', backgroundColor: '#F5F5F5' }}
                      />
                    </div>
                  </div>
                  <div className="form-group" style={{ marginTop: '20px' }}>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control rounded-3"
                      name="email"
                      style={{ width: '90%', backgroundColor: '#F5F5F5' }}
                    />
                  </div>
                  <div className="form-group" style={{ marginTop: '20px' }}>
                    <label htmlFor="subject">Subject:</label>
                    <input
                      type="text"
                      className="form-control rounded-3"
                      name="subject"
                      style={{ width: '90%', backgroundColor: '#F5F5F5' }}
                    />
                  </div>
                  <div className="form-group" style={{ marginTop: '20px' }}>
                    <label htmlFor="message">Message:</label>
                    <textarea
                      className="form-control rounded-5"
                      name="message"
                      rows="5"
                      style={{ width: '90%', backgroundColor: '#F5F5F5' }}
                    ></textarea>
                  </div>
                  <div className="form-group" style={{ marginTop: '20px' }}>
                    <button
                      id="sendButton"
                      type="submit"
                      className="btn mt-4 rounded-4 btn-lg form-control"
                      style={{
                        backgroundColor: '#F5F5F5',
                        marginBottom: '40px',
                        fontFamily: 'inherit',
                        width: '415px',
                        height: '75px',
                        position: 'relative',
                      }}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
