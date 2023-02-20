const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				white: '#fff',
				black: '#000',
			},
			fontFamily: {
				'open-sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
				code: ['Source Code Pro', ...defaultTheme.fontFamily.mono]
			}
		}
	},
	plugins: []
};
