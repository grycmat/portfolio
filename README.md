# Portfolio - React Version

A modern React-based portfolio website built with TypeScript, Vite, and the latest React patterns.

## Features

- ⚛️ **React 18.3** with TypeScript
- ⚡ **Vite** for fast development and optimized builds
- 🎨 **CSS Modules** for component-scoped styling
- 🎭 **Framer Motion** for smooth animations
- 📱 **Fully Responsive** design
- ♿ **Accessibility** focused
- 🎯 **React Hook Form** for form handling
- 👁️ **Intersection Observer** for scroll animations
- 🚀 **Performance Optimized** with code splitting

## Tech Stack

- **Framework**: React 18.3
- **Language**: TypeScript 5.6
- **Build Tool**: Vite 6.0
- **Styling**: CSS Modules
- **Animations**: Framer Motion 11
- **Icons**: Font Awesome 6
- **Form Handling**: React Hook Form 7
- **Linting**: ESLint 9

## Project Structure

```
reactV/
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/         # Portfolio data
│   ├── hooks/        # Custom React hooks
│   ├── styles/       # Global styles
│   ├── types/        # TypeScript types
│   ├── App.tsx       # Main app component
│   └── main.tsx      # Entry point
├── index.html        # HTML template
├── package.json      # Dependencies
├── tsconfig.json     # TypeScript config
└── vite.config.ts    # Vite config
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Navigate to the React app directory:
```bash
cd reactV
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at http://localhost:3000

### Build

Build for production:
```bash
npm run build
```

The optimized build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Modern React Patterns Used

1. **Functional Components with Hooks**
   - All components are functional using modern React hooks
   - Custom hooks for reusable logic (useScrollAnimation, useSmoothScroll)

2. **TypeScript Integration**
   - Full type safety across the application
   - Interfaces for all data structures
   - Strict mode enabled

3. **CSS Modules**
   - Component-scoped styling
   - No global CSS pollution
   - Better maintainability

4. **Performance Optimizations**
   - Lazy loading with React.lazy (can be added)
   - Memoization with useMemo and useCallback
   - Optimized re-renders

5. **Modern Animation Patterns**
   - Framer Motion for declarative animations
   - Intersection Observer for scroll-triggered animations
   - Smooth transitions and micro-interactions

6. **Form Handling**
   - React Hook Form for efficient form state management
   - Built-in validation
   - Optimized re-renders

7. **Component Architecture**
   - Single Responsibility Principle
   - Reusable and composable components
   - Clear separation of concerns

## Key Improvements Over Original

- **Type Safety**: Full TypeScript support prevents runtime errors
- **Better Performance**: Vite's HMR and optimized builds
- **Modern Tooling**: Latest React ecosystem tools
- **Component Reusability**: Modular component structure
- **Better DX**: Hot Module Replacement, better error messages
- **Maintainability**: Clear file structure and separation of concerns
- **Animations**: Smooth, performant animations with Framer Motion
- **Form Validation**: Built-in form validation with React Hook Form

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

© 2025 Mateusz Gryc. All Rights Reserved.
