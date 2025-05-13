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
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    padding: '0 20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add text shadow for better readability
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
    opacity: 0.8,
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
      <div style={contentStyle}>
        {id === 'office' && <div style={brandingStyle}>SenVision</div>}
        {renderTitle()}
        <p style={affirmationStyle}>{affirmation}</p>
      </div>
    </div>
  );
}

export default Slide; 