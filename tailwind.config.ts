import { heroui } from '@heroui/react'
import type { Config } from 'tailwindcss'

export default {
	content: [
		'./node_modules/@heroui/theme/dist/**/*.{js,jsx,ts,tsx}',
		'./src/**/*.{ts,tsx}',
		'./index.html'
	],
	darkMode: 'class',
	plugins: [
		heroui({
			defaultTheme: 'dark',
			defaultExtendTheme: 'dark'
		})
	]
} satisfies Config
