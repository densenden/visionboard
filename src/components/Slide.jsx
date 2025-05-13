import React from 'react';

// This component renders a single slide with background image and text
function Slide({ backgroundImage, title, affirmation, id }) {
  const slideStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end', // Align content to bottom
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
  };

  const gradientOverlayStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '33%', // Bottom third has gradient
    background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))',
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    padding: '0 20px',
    marginBottom: '10vh', // Position in lower third
  };

  const titleStyle = {
    fontSize: '4rem',
    marginBottom: '1rem',
    lineHeight: 1.2,
  };

  const affirmationStyle = {
    fontSize: '1.5rem',
    fontWeight: 300,
  };

  const brandingStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '1.2rem',
    fontWeight: 100,
    letterSpacing: '1px',
    color: 'black',
    zIndex: 2,
  };

  // Function to render title with different font weights
  const renderTitle = () => {
    // Split by words to apply different weights
    const words = title.split(' ');
    
    return (
      <h1 style={titleStyle}>
        {words.map((word, index) => {
          // Determine font weight based on position
          let weight;
          if (index === 0) weight = 900; // First word - Black
          else if (index === 1) weight = 100; // Second word - Thin
          else if (index === 2) weight = 500; // Third word - Medium
          else weight = 900; // Last word - Black
          
          return (
            <span key={index} style={{ fontWeight: weight, display: 'inline-block' }}>
              {word}{index < words.length - 1 ? ' ' : ''}
            </span>
          );
        })}
      </h1>
    );
  };

  return (
    <div className="slide" style={slideStyle}>
      <div style={gradientOverlayStyle}></div>
      {id === 'office' && <div style={brandingStyle}>SenVision</div>}
      <div style={contentStyle}>
        {renderTitle()}
        <p style={affirmationStyle}>{affirmation}</p>
      </div>
    </div>
  );
}

export default Slide; 