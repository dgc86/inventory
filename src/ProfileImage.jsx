import React from 'react';
import InventoryImage from './PWebImg.JPG';

function ProfileImage() {
  const containerStyle = {
    width: '500px',
    height: '500px',
    borderRadius: '40%',
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer', 
    transition: 'transform 0.3s ease',
    marginLeft: '900px',
    marginTop: '-200px',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: '100%', 
    display: 'block',
    transition: 'opacity 0.3s ease', 
    opacity: '0.85', 
  };

  
  const handleHover = () => {
    const container = document.getElementById('imageContainer');
    container.style.transform = 'scale(1.1)';

    
    const image = document.getElementById('profileImage');
    image.style.opacity = '1';
  };

  
  const handleHoverOut = () => {
    const container = document.getElementById('imageContainer');
    container.style.transform = 'scale(1)'; 

    
    const image = document.getElementById('profileImage');
    image.style.opacity = '0.8';
  };

  return (
    <div
      id="imageContainer"
      style={containerStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    >
      <img
        id="profileImage"
        src={InventoryImage}
        style={imageStyle}
        alt="Inventory Image"
      />
    </div>
  );
}

export default ProfileImage;
