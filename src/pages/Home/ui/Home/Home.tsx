import { Counter } from '@features/Counter'
import { Image } from '@heroui/react'
import { bolt } from '@shared/ui'
import { Uploader } from '@widgets/Uploader'

const Home = () => {
	return (
		<div className='h-[80vh] flex flex-col text-center items-center justify-center gap-4'>
			<div>
				<h1 className='text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent'>
					Save and share your images
				</h1>
				<p className='text-lg text-gray-200'>
					An open source service for saving and sharing images with anyone,
					anytime.
				</p>
			</div>
			<Uploader />
			<div className='flex flex-row gap-5'>
				<Counter />
				<div className='flex flex-row items-center'>
					<Image src={bolt} />
					<p className='text-sm text-gray-300 font-medium'>Blazing fast CDN</p>
				</div>
			</div>
		</div>
	)
}

export default Home
