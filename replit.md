# AgriRover

A marketing and informational website for AI AgriRover — an AI-powered autonomous agricultural rover designed to assist small and medium-sized farmers in India.

## Project Overview

AgriRover is a smart robotic farming system designed to help small farmers automate their agricultural work, bringing precision, efficiency, and intelligence. The website showcases the product, technology, team, investor information, blog, and contact pages.

## Tech Stack

- **Frontend:** Pure HTML5, CSS3, and Vanilla JavaScript (no build system)
- **Multi-language support:** English, Hindi, Marathi, Tamil, Telugu, and Punjabi — all 6 languages fully translated across all 7 pages (via `js/lang.js`)
- **Icons:** Font Awesome (CDN)
- **Server (dev):** Python `http.server`

## Project Structure

```
/
├── index.html          # Landing/home page
├── product.html        # Product details
├── technology.html     # Technology overview
├── team.html           # Team members
├── investors.html      # Investor information
├── blog.html           # Blog
├── contact.html        # Contact page
├── 404.html            # Custom 404 page
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   ├── lang.js         # Multi-language support
│   └── script.js       # UI logic (nav, scroll effects)
├── image/              # Images and assets
├── style.css           # Root-level stylesheet (legacy)
├── style2.css          # Additional styles (legacy)
└── script.js           # Root-level script (legacy)
```

## Running the App

The app is served via Python's built-in HTTP server on port 5000:

```
python3 -m http.server 5000 --bind 0.0.0.0
```

## Deployment

Configured as a **static** deployment with the root directory (`.`) as the public directory.
