const fs = require('fs');
const path = require('path');

// Copy hero image to public folder as OG image
const src = path.join(__dirname, 'src', 'assets', 'full.webp');
const dest = path.join(__dirname, 'public', 'og-image.webp');

fs.copyFileSync(src, dest);
console.log('Copied OG image to public/og-image.webp');

// Also copy the logo
const logoSrc = path.join(__dirname, 'src', 'assets', 'bagheera logo.png');
const logoDest = path.join(__dirname, 'public', 'bagheera-logo.png');
fs.copyFileSync(logoSrc, logoDest);
console.log('Copied logo to public/bagheera-logo.png');
