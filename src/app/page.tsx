import Home from '@views/home'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Imji | Home'
}

const Page = () => {
	return <Home />
}

export default Page
