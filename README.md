# Vision Board

An elegant, motivational React website featuring three fullscreen sections. Each section includes an inspiring image, a headline, and a supporting affirmation. The page automatically scrolls and snaps when scrolled manually. 

## Features

- Fullscreen sections with beautiful background images
- Auto-scrolling with snap effect using @fullpage/react-fullpage
- Minimalist on-page navigation with emoji icons
- Typography featuring Geist font with varying weights
- Responsive design for all screen sizes

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

3. Build for production:
   ```
   npm run build
   ```

## Project Structure

- `/public/images/`: Contains the background images
  - `office.jpg`: Office in high-rise - symbolizes ambition and focus
  - `bungalow.jpg`: Bungalow in nature - represents calm and balance
  - `holiday.jpg`: Holiday home in southern France - conveys freedom and joy

- `/src/components/`: React components
  - `Slide.jsx`: Component for each fullscreen section

- Main files:
  - `App.jsx`: Main application component
  - `styles.css`: Global styles and animations
  - `index.js`: Entry point

## Content

### Section 1: Office in High-Rise
- Headline: "Home. Inspiration. Relaxation. Bliss."
- Affirmation: "Start your day with clarity and purpose."

### Section 2: Bungalow in Nature
- Headline: "Serenity in Nature"
- Affirmation: "Embrace the calm and find your center."

### Section 3: Holiday Home in Southern France
- Headline: "Escape to Tranquility"
- Affirmation: "Let go and rejuvenate your spirit."

## Dependencies

- React
- @fullpage/react-fullpage for scrolling effects
- Google Fonts for Geist font 