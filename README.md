# Courtney Beka - Design Portfolio

A modern, interactive portfolio website showcasing UX/UI design, branding, and creative work with smooth animations and visual effects.

## Features

- **Modern Design**: Clean, professional aesthetic with vibrant creative elements
- **Interactive Elements**: Smooth animations and transitions using Framer Motion
- **3D Visuals**: Stunning 3D elements with React Three Fiber and Three.js
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **Dark/Light Mode**: Automatic theme switching based on user preference
- **Contact Form**: Interactive form for potential clients to reach out

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: 
  - Framer Motion
  - GSAP
  - React Three Fiber / Three.js
- **Smooth Scrolling**: Lenis
- **Deployment**: Ready for deployment on Vercel

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm (v8 or later)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/courtney-portfolio.git
cd courtney-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/src/app` - App router pages and layout
- `/src/components` - Reusable UI components
- `/public` - Static assets including images
- `/src/styles` - Global CSS and theme settings

## Customization

### Changing Content

- Update the project data in the respective page files
- Replace images in the `/public/images` directory
- Adjust contact information in the contact page and footer

### Styling

- Main color scheme and theme variables are in `globals.css`
- Component-specific styling is included within each component using Tailwind

## Deployment

This project is set up for easy deployment on [Vercel](https://vercel.com) or any other hosting platform that supports Next.js applications.

```bash
npm run build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from various modern portfolio websites
- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com) - For styling
- [Framer Motion](https://www.framer.com/motion/) - For animations
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - For 3D graphics
