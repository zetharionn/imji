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
			defaultExtendTheme: 'dark',
			themes: {
				dark: {
					colors: {
						default: {
							'50': '#fefefe',
							'100': '#fbfbfb',
							'200': '#f9f9f9',
							'300': '#f7f7f7',
							'400': '#f5f5f5',
							'500': '#f3f3f3',
							'600': '#c8c8c8',
							'700': '#9e9e9e',
							'800': '#737373',
							'900': '#494949',
							foreground: '#000',
							DEFAULT: '#f3f3f3'
						},
						primary: {
							'50': '#fefefe',
							'100': '#fbfbfb',
							'200': '#f9f9f9',
							'300': '#f7f7f7',
							'400': '#f5f5f5',
							'500': '#f3f3f3',
							'600': '#c8c8c8',
							'700': '#9e9e9e',
							'800': '#737373',
							'900': '#494949',
							foreground: '#000',
							DEFAULT: '#f3f3f3'
						},
						secondary: {
							'50': '#e4e4e4',
							'100': '#bebebe',
							'200': '#979797',
							'300': '#717171',
							'400': '#4b4b4b',
							'500': '#252525',
							'600': '#1f1f1f',
							'700': '#181818',
							'800': '#121212',
							'900': '#0b0b0b',
							foreground: '#fff',
							DEFAULT: '#252525'
						},
						success: {
							'50': '#e9f8e7',
							'100': '#caefc5',
							'200': '#abe5a3',
							'300': '#8cdc82',
							'400': '#6dd260',
							'500': '#4ec93e',
							'600': '#40a633',
							'700': '#338328',
							'800': '#255f1d',
							'900': '#173c13',
							foreground: '#000',
							DEFAULT: '#4ec93e'
						},
						warning: {
							'50': '#fff7e3',
							'100': '#ffecbc',
							'200': '#ffe194',
							'300': '#ffd56d',
							'400': '#ffca45',
							'500': '#ffbf1e',
							'600': '#d29e19',
							'700': '#a67c14',
							'800': '#795b0e',
							'900': '#4d3909',
							foreground: '#000',
							DEFAULT: '#ffbf1e'
						},
						danger: {
							'50': '#ffe6e7',
							'100': '#ffc2c5',
							'200': '#ff9fa2',
							'300': '#ff7c80',
							'400': '#ff585e',
							'500': '#ff353c',
							'600': '#d22c32',
							'700': '#a62227',
							'800': '#79191d',
							'900': '#4d1012',
							foreground: '#000',
							DEFAULT: '#ff353c'
						},
						background: '#0a0a0a',
						foreground: '#ffffff',
						content1: {
							DEFAULT: '#18181b',
							foreground: '#fff'
						},
						content2: {
							DEFAULT: '#27272a',
							foreground: '#fff'
						},
						content3: {
							DEFAULT: '#3f3f46',
							foreground: '#fff'
						},
						content4: {
							DEFAULT: '#55555d',
							foreground: '#fff'
						},
						focus: '#f3f3f3',
						overlay: '#ffffff'
					}
				}
			},
			layout: {
				disabledOpacity: '0.5'
			}
		})
	]
} satisfies Config
