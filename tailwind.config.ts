import { heroui } from '@heroui/react'
import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/**/*.{ts,tsx}',
		'./node_modules/@heroui/theme/dist/**/*.{js,jsx,ts,tsx}'
	],
	darkMode: 'class',
	plugins: [heroui()]
} satisfies Config
