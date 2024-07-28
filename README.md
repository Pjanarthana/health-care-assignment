# One Life Health Care

One Life Health Care is a modern, responsive web application built with React. It showcases a healthcare service platform with features like global access, personalized care, and 24/7 support.

## Features

- Responsive design for various screen sizes
- Dark mode support
- Interactive UI components
- Testimonials section
- Call-to-action for user engagement

## Tech Stack

- React
- CSS3 with CSS Variables for theming
- Context API for state management (dark mode)

## Project Structure

The project is organized into several React components, each with its corresponding CSS file:

- `App.js`: Main component that brings everything together
- `Header.js`: Top navigation bar
- `Sidebar.js`: Collapsible side navigation
- `Hero.js`: Landing section with main message and CTA
- `Features.js`: Showcases key features of the service
- `Testimonials.js`: Displays client testimonials
- `CallToAction.js`: Encourages user sign-up
- `Footer.js`: Contains site links and copyright information
- `ThemeToggle.js`: Allows users to switch between light and dark modes

## Styling

The project uses a modular CSS approach with separate CSS files for each component. Global styles and theme variables are defined in `global.css`.

Key styling features include:

- CSS Variables for easy theming and dark mode implementation
- Responsive grid layouts
- Smooth transitions and hover effects
- Accessibility considerations in color contrast

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Customization

You can easily customize the color scheme and other theme variables by modifying the CSS variables in `global.css`.

## Accessibility

The project aims to be accessible, with proper color contrast and interactive elements designed for keyboard navigation. However, always test thoroughly and consider getting an accessibility audit for production use.

## Future Improvements

- Implement React Router for better navigation and SEO
- Add more interactive features and animations
- Enhance mobile responsiveness
- Implement form validation for the sign-up process
- Add unit and integration tests

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).