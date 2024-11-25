# Wedding Countdown Website

A beautiful, interactive wedding countdown website built with React and Tailwind CSS, featuring a Blue Willow theme. The site includes a real-time countdown, photo slideshow, and various sections for wedding details.

## Features

- **Real-time Countdown Timer**: Displays days, hours, minutes, and seconds until the wedding
- **Interactive Photo Slideshow**: Auto-playing slideshow with navigation controls
- **Responsive Navigation**: Easy access to different sections
- **Blue Willow Theme**: Elegant design inspired by Blue Willow china patterns
- **Multiple Sections**:
  - Home (Countdown and Quick Facts)
  - Photo Gallery
  - Wedding Schedule
  - Love Letters (Coming Soon)
  - Venue Details (Coming Soon)

## Tech Stack

- React
- Vite
- Tailwind CSS
- Lucide Icons
- JavaScript/ES6

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/[your-username]/Wedding-Countdown-Web.git
cd Wedding-Countdown-Web
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## Project Structure

```
Wedding-Countdown-Web/
├── public/
│   └── images/         # Store your images here
├── src/
│   ├── App.jsx        # Main application component
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Deployment

This project is deployed using Vercel. Any pushes to the main branch will automatically trigger a new deployment.

## Customization

### Adding Photos
1. Add your images to the `public/images` directory
2. Update the `photos` array in the `PhotoGallery` component

### Updating Wedding Details
- Modify the wedding date in the main `WeddingCountdown` component
- Update schedule details in the `ScheduleContent` component
- Add venue information in the `VenueContent` component

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

- Blue Willow pattern inspiration
- Lucide for the beautiful icons
- Tailwind CSS for the styling utilities
