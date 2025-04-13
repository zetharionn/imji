import type { Metadata } from 'next'
import Home from '@pages/Home'

export const metadata: Metadata = {
	title: 'Imji | Home'
}

const Page = () => {
	return <Home />
}

export default Page
