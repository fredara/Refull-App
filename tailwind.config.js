/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'custom-orange': '#FF4500',
        'custom-blue': '#004D4D ',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}