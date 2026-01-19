# Umpqua United Soccer Club Website

A modern, responsive website for Umpqua United Soccer Club built with Jekyll and hosted on GitHub Pages.

## Features

- 🎨 Modern, clean design with a vibrant green color scheme
- 📱 Fully responsive layout that works on all devices
- ⚡ Fast loading times and optimized performance
- 🎯 Easy navigation with clear information architecture
- 🗺️ Interactive field map visualization
- 📧 Contact form integration ready
- 🔍 SEO optimized

## Local Development

### Prerequisites

- Ruby 3.1 or higher
- Bundler gem

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/umpqua_united.git
cd umpqua_united
```

2. Install dependencies:
```bash
bundle install
```

3. Run the Jekyll server:
```bash
bundle exec jekyll serve
```

4. Open your browser and navigate to `http://localhost:4000`

## Project Structure

```
umpqua_united/
├── _config.yml          # Jekyll configuration
├── _layouts/            # Page layouts
│   ├── default.html     # Default layout
│   └── home.html        # Homepage layout
├── _includes/           # Reusable components
│   ├── header.html      # Site header/navigation
│   └── footer.html      # Site footer
├── assets/              # Static assets
│   ├── css/             # Stylesheets
│   │   └── main.css     # Main stylesheet
│   └── js/              # JavaScript files
│       └── main.js      # Main JavaScript
├── index.html           # Homepage
├── about.md             # About page
├── programs.md          # Programs page
├── fields.md            # Fields page
├── contact.md           # Contact page
└── Gemfile              # Ruby dependencies
```

## GitHub Pages Deployment

This site is configured to automatically deploy to GitHub Pages when you push to the `main` branch. The GitHub Actions workflow (`.github/workflows/jekyll.yml`) handles the build and deployment process.

### Manual Deployment

If you need to deploy manually:

1. Ensure your repository is set to use GitHub Pages
2. Go to Settings > Pages in your GitHub repository
3. Select "GitHub Actions" as the source
4. Push to the `main` branch to trigger the workflow

## Customization

### Updating Site Information

Edit `_config.yml` to update:
- Site title and description
- Email address
- Social media links
- Navigation menu

### Changing Colors

The color scheme is defined in CSS variables at the top of `assets/css/main.css`. Modify the `:root` variables to change the color palette.

### Adding New Pages

1. Create a new `.md` file in the root directory
2. Add front matter with layout and title
3. Add the page to the navigation in `_config.yml`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

All rights reserved. Umpqua United Soccer Club.

## Contact

For questions or issues, please contact: info@umpquaunited.org
