# Vision Board

An elegant, motivational React website featuring three fullscreen sections. Each section includes an inspiring image, a headline with varied font weights, and a supporting affirmation. The page automatically scrolls and snaps when scrolled manually. 

## Features

- Fullscreen sections with beautiful background images
- Auto-scrolling with snap effect using @fullpage/react-fullpage
- Minimalist dot navigation for simple section switching
- Typography featuring Geist font with varying weights
- SenVision branding on the first page
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
- Headline: "Home Inspiration Relaxation Bliss" (with varying font weights)
- Affirmation: "Start your day with clarity and purpose. Visualize your goals before taking action."
- Branding: "SenVision" in top-left corner

### Section 2: Bungalow in Nature
- Headline: "Serenity Nature Balance Growth" (with varying font weights)
- Affirmation: "Embrace the calm and find your center. Connect with the peaceful rhythm of life."

### Section 3: Holiday Home in Southern France
- Headline: "Escape Tranquility Freedom Joy" (with varying font weights)
- Affirmation: "Let go and rejuvenate your spirit. Create space for new possibilities to emerge."

## Typography & Design

- Font weights vary within each headline for visual interest
- First word uses Black (900) weight
- Second word uses Thin (100) weight
- Third word uses Medium (500) weight
- Fourth word uses Black (900) weight
- Text shadow provides readability against image backgrounds
- Hover effects on headline words for interactive engagement

## Dependencies

- React
- @fullpage/react-fullpage for scrolling effects
- Google Fonts for Geist font 