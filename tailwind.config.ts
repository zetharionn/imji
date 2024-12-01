import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

export default {
	content: [
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{ts,tsx}',
		'./index.html'
	],
	darkMode: 'class',
	plugins: [nextui()]
} as Config
