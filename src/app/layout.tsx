import { Devtools } from '@shared/ui'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import type { FC, PropsWithChildren } from 'react'
import { Providers } from './providers/Providers.tsx'
import './styles/index.css'
import { Header } from '@widgets/header'

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
					<Header />
					{children}
					<Devtools />
				</Providers>
			</body>
		</html>
	)
}

export default Layout
