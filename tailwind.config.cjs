import starlightPlugin from '@astrojs/starlight-tailwind';
import colors from 'tailwindcss/colors';

import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#83dccb', 600: '#09B3BF', 900: '#003c34', 950: '#002b25' };
const gray = { 100: '#f3f7f9', 200: '#e7eff2', 300: '#bac4c8', 400: '#7b8f96', 500: '#495c62', 700: '#2a3b41', 800: '#182a2f', 900: '#121a1c' };

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {accent, gray}
		},
	},
	plugins: [starlightPlugin()],
}
