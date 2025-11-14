# Juspay Drawer

A modern, accessible navigation drawer component for Next.js with smooth slide animations and drag-to-dismiss gestures.

## Features

- **Smooth Slide Transitions** - Navigate between menu levels with left-to-right slide animations
- **Drag to Dismiss** - Swipe down (mobile) or right (desktop) to close the drawer
- **Nested Menu Support** - Unlimited depth menu hierarchy with breadcrumb navigation
- **Responsive Design** - Optimized for mobile and desktop experiences
- **Accessible** - Full keyboard navigation, ARIA labels, and screen reader support
- **Type-Safe** - Built with TypeScript for better developer experience

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```


## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Framer Motion** - Smooth animations and gestures
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library

## Project Structure

```
├── app/                    # Next.js app directory
├── components/
│   └── drawer/            # Drawer components
│       ├── Drawer.tsx     # Main drawer component
│       ├── DrawerMenu.tsx # Menu rendering
│       └── DrawerDemo.tsx # Demo implementation
├── data/
│   └── menu.json          # Menu data structure
├── lib/                   # Utilities
└── types/                 # TypeScript definitions
```

## License

MIT
