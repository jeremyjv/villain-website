/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // extend: {
    //   backgroundImage: {
    //     'hero': "url('src/assets/herosection.png')",
    //   }
    // },
    fontFamily: {
      body: ['Azeret Mono']
    },
  },
  plugins: [],
}

