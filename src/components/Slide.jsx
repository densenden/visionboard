import React from 'react';

// This component renders a single slide with background image and text
function Slide({ backgroundImage, title, affirmation }) {
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

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // dark semi-transparent overlay
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    padding: '0 20px',
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

  // Function to render title with different font weights
  const renderTitle = () => {
    if (!title.includes('.')) return <h1 style={titleStyle}>{title}</h1>;
    
    // Split by dots to apply different weights
    return (
      <h1 style={titleStyle}>
        {title.split('.').map((part, index) => {
          // Determine font weight based on position
          let weight;
          if (index === 0) weight = 900; // First part - Black
          else if (index === 1) weight = 100; // Second part - Thin
          else if (index === 2) weight = 500; // Third part - Medium
          else weight = 900; // Last part - Black
          
          return (
            <span key={index} style={{ fontWeight: weight }}>
              {part}{index < title.split('.').length - 1 ? '.' : ''}
            </span>
          );
        })}
      </h1>
    );
  };

  return (
    <div className="slide" style={slideStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        {renderTitle()}
        <p style={affirmationStyle}>{affirmation}</p>
      </div>
    </div>
  );
}

export default Slide; 