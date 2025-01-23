# IP Address Tracker

A web application built with Next.js that allows users to track IP addresses and domains, showing their geographical location on a map along with additional information.

## Preview

### Desktop View (1440px)

![Desktop Preview](/public/images/desktop-preview.png)

### Mobile View (375px)

![Mobile Preview](/public/images/mobile-preview.png)

## Features

- View the optimal layout for each page depending on device's screen size
- See hover states for all interactive elements on the page
- Search for any IP addresses or domains
- View key information about searched IP/domain including:
  - IP Address
  - Location
  - Timezone
  - ISP
- Interactive map showing the location
- Fully responsive design
- Server-side API handling for secure API key management

## Tech Stack

- [Next.js](https://nextjs.org) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [Material-UI (MUI)](https://mui.com/) - UI Components
- [React Query](https://tanstack.com/query/latest) - Data Fetching
- [React Hook Form](https://react-hook-form.com/) - Form Management
- [MapLibre GL](https://maplibre.org/) - Maps Integration

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/ip-address-tracker.git
```

## Project Structure

```bash
ip-address-tracker/
├── src/
│   ├── components/
│   │   ├── InfoPanel/
│   │   ├── Map/
│   │   └── SearchBar/
│   ├── pages/
│   │   ├── api/
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   ├── styles/
│   │   ├── theme.ts
│   │   └── globals.css
│   └── types/
│       └── index.ts
├── public/
│   └── images/
└── ...config files
```
