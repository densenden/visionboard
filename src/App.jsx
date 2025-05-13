import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Slide from './components/Slide';
import './styles.css';

const slides = [
  {
    id: 'office',
    backgroundImage: '/images/office.jpg',
    title: 'Home Inspiration Relaxation Bliss',
    affirmation: 'Start your day with clarity and purpose. Visualize your goals before taking action.',
    icon: '•'
  },
  {
    id: 'bungalow',
    backgroundImage: '/images/bungalow.jpg',
    title: 'Serenity Nature Balance Growth',
    affirmation: 'Embrace the calm and find your center. Connect with the peaceful rhythm of life.',
    icon: '•'
  },
  {
    id: 'holiday',
    backgroundImage: '/images/holiday.jpg',
    title: 'Escape Tranquility Freedom Joy',
    affirmation: 'Let go and rejuvenate your spirit. Create space for new possibilities to emerge.',
    icon: '•'
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle navigation click
  const handleNavClick = (index) => {
    window.fullpage_api.moveTo(index + 1);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <div className="navigation">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`nav-item ${currentSlide === index ? 'active' : ''}`}
            onClick={() => handleNavClick(index)}
            aria-label={`Go to ${slide.id}`}
            title={slide.id}
          >
            {slide.icon}
          </button>
        ))}
      </div>

      {/* Fullpage scroll */}
      <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'} // For development, it works without a key with watermark
        scrollingSpeed={1000}
        navigation={false}
        autoScrolling={true}
        scrollHorizontally={false}
        afterLoad={(origin, destination) => {
          setCurrentSlide(destination.index);
        }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {slides.map(slide => (
                <div key={slide.id} className="section">
                  <Slide
                    id={slide.id}
                    backgroundImage={slide.backgroundImage}
                    title={slide.title}
                    affirmation={slide.affirmation}
                  />
                </div>
              ))}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}

export default App; 