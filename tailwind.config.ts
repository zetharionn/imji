import { heroui } from '@heroui/react'
import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/**/*.{ts,tsx}',
		'./node_modules/@heroui/theme/dist/**/*.{js,jsx,ts,tsx}'
	],
	darkMode: 'class',
	plugins: [
		heroui({
			defaultTheme: 'dark',
			defaultExtendTheme: 'dark',
			themes: {
				dark: {
					colors: {
						default: {
							'50': '#040404',
							'100': '#080808',
							'200': '#0d0d0d',
							'300': '#111111',
							'400': '#151515',
							'500': '#444444',
							'600': '#737373',
							'700': '#a1a1a1',
							'800': '#d0d0d0',
							'900': '#ffffff',
							foreground: '#fff',
							DEFAULT: '#151515'
						},
						primary: {
							'50': '#484848',
							'100': '#727272',
							'200': '#9d9d9d',
							'300': '#c7c7c7',
							'400': '#f1f1f1',
							'500': '#f3f3f3',
							'600': '#f6f6f6',
							'700': '#f8f8f8',
							'800': '#fbfbfb',
							'900': '#fdfdfd',
							foreground: '#000',
							DEFAULT: '#f1f1f1'
						},
						secondary: {
							'50': '#434343',
							'100': '#6a6a6a',
							'200': '#929292',
							'300': '#b9b9b9',
							'400': '#e0e0e0',
							'500': '#e5e5e5',
							'600': '#ebebeb',
							'700': '#f0f0f0',
							'800': '#f6f6f6',
							'900': '#fbfbfb',
							foreground: '#000',
							DEFAULT: '#e0e0e0'
						},
						success: {
							'50': '#0b4125',
							'100': '#11673a',
							'200': '#178d4f',
							'300': '#1db365',
							'400': '#23d97a',
							'500': '#4ae091',
							'600': '#70e6a9',
							'700': '#97edc0',
							'800': '#bdf4d7',
							'900': '#e4faee',
							foreground: '#000',
							DEFAULT: '#23d97a'
						},
						warning: {
							'50': '#4d3d12',
							'100': '#79601c',
							'200': '#a68426',
							'300': '#d2a731',
							'400': '#ffcb3b',
							'500': '#ffd45d',
							'600': '#ffdd80',
							'700': '#ffe6a2',
							'800': '#ffefc4',
							'900': '#fff9e7',
							foreground: '#000',
							DEFAULT: '#ffcb3b'
						},
						danger: {
							'50': '#4d1616',
							'100': '#792323',
							'200': '#a63030',
							'300': '#d23d3d',
							'400': '#ff4a4a',
							'500': '#ff6a6a',
							'600': '#ff8989',
							'700': '#ffa9a9',
							'800': '#ffc9c9',
							'900': '#ffe8e8',
							foreground: '#000',
							DEFAULT: '#ff4a4a'
						},
						background: '#0f0f0f',
						foreground: '#f1f1f1',
						content1: {
							DEFAULT: '#080808',
							foreground: '#fff'
						},
						content2: {
							DEFAULT: '#0d0d0d',
							foreground: '#fff'
						},
						content3: {
							DEFAULT: '#111111',
							foreground: '#fff'
						},
						content4: {
							DEFAULT: '#151515',
							foreground: '#fff'
						},
						focus: '#151515',
						overlay: '#f1f1f1'
					}
				}
			}
		})
	]
} satisfies Config
