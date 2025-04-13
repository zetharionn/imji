import type { Metadata } from 'next'
import type { FC, PropsWithChildren } from 'react'
import './styles'

export const metadata: Metadata = {
	applicationName: 'Imji',
	authors: [{ name: 'zetharionn' }],
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
			<body>{children}</body>
		</html>
	)
}

export default Layout
