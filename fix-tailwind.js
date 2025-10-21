const fs = require('fs');

// Mettre à jour postcss.config.js
const postcssConfig = `module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}`;

fs.writeFileSync('postcss.config.js', postcssConfig);
console.log('✅ postcss.config.js mis à jour');

// Vérifier tailwind.config.js
const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages//*.{js,ts,jsx,tsx,mdx}",
    "./components//*.{js,ts,jsx,tsx,mdx}",
    "./app//*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          900: '#0c4a6e',
        },
        accent: {
          500: '#f59e0b',
          600: '#d97706',
        }
      },
    },
  },
  plugins: [],
}`;

fs.writeFileSync('tailwind.config.js', tailwindConfig);
console.log('✅ tailwind.config.js vérifié');

console.log('\n📦 Installation de @tailwindcss/postcss...');