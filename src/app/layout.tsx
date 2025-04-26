import { Devtools } from '@shared/ui'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import type { FC, PropsWithChildren } from 'react'
import { Providers } from './providers'
import './styles'

const outfit = Outfit({
	subsets: ['latin']
})

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
		<html lang='en' className={outfit.className}>
			<body>
				<Providers>
					<Analytics />
					<Devtools />
					{children}
					<SpeedInsights />
				</Providers>
			</body>
		</html>
	)
}

export default Layout
