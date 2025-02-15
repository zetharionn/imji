import { favicon } from '@shared/ui'

export const Head = () => {
	return (
		<>
			<meta charSet='utf-8' />
			<meta name='application-name' content='Imji' />
			<meta name='author' content='zetharionn' />
			<meta
				name='description'
				content='An open source service for saving and sharing images with anyone, anytime.'
			/>
			<meta
				name='viewport'
				content='width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes'
			/>
			<meta name='robots' content='all' />
			<meta name='og:title' content='Imji' />
			<meta
				name='og:description'
				content='An open source service for saving and sharing images with anyone, anytime.'
			/>
			<meta name='twitter:title' content='Imji' />
			<meta
				name='twitter:description'
				content='An open source service for saving and sharing images with anyone, anytime.'
			/>
			<link rel='icon' type='image/svg+xml' sizes='64x64' href={favicon} />
			<link rel='canonical' href='https://imji.vercel.app/' />
			<link rel='alternate' href='https://imji-zetharion.vercel.app/' />
		</>
	)
}
