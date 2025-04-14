import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { FC, PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { Devtools } from './ui'
import './styles'

export const metadata: Metadata = {
	applicationName: 'Imji',
	authors: [{ name: 'zetharionn' }],
	icons: {
		icon: '/favicon.svg'
	},
	title: 'Imji',
	description:
		'An open source service for saving and sharing images with anyone, anytime.',
	robots: 'all',
	alternates: {
		canonical: 'https://imji.vercel.app/'
	},
	openGraph: {
		title: 'Imji',
		description:
			'An open source service for saving and sharing images with anyone, anytime.'
	},
	twitter: {
		title: 'Imji',
		description:
			'An open source service for saving and sharing images with anyone, anytime.'
	}
}

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang='en'>
			<body>
				<Analytics />
				<Devtools />
				{children}
				<SpeedInsights />
			</body>
		</html>
	)
}

export default Layout
