/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
	fontFamily: {
		youth: ['"Youth Black"'],
		uncut: ['"Uncut sans"'],
		esphimere: ['Esphimere'],
	  },
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {},
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

