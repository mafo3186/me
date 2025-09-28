# Deployment Guide

This Next.js project is configured for static export and can be deployed to any shared hosting provider.

## Build Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. The static files will be generated in the `out/` directory.

## Deployment to Shared Hosting

1. Upload all contents of the `out/` directory to your web hosting root directory
2. The site will be accessible at your domain
3. All pages are pre-rendered as static HTML for fast loading

## Development

Run the development server:
```bash
npm run dev
```

The site will be available at http://localhost:3000

## Configuration

- Static export is configured in `next.config.js`
- All images are unoptimized for static hosting compatibility
- Trailing slashes are enabled for better shared hosting compatibility