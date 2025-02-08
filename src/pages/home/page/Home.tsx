import { Counter } from '@features/counter'
import { Image } from '@heroui/react'
import { bolt } from '@shared/ui'
import { Uploader } from '@widgets/uploader'

const Home = () => {
	return (
		<>
			<title>Imji | Home</title>
			<div className='h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center gap-5'>
				<div className='flex flex-col flex-wrap text-center gap-1'>
					<h1 className='text-5xl font-bold'>Save and share your images</h1>
					<p className='text-sm text-neutral-400'>
						An open source service for saving and sharing images with anyone,
						anytime.
					</p>
				</div>

				<Uploader />

				<div className='flex flex-wrap gap-5'>
					<Counter />
					<div className='flex items-center'>
						<Image src={bolt} />
						<p className='text-sm text-neutral-200 font-medium'>
							<span>Blazing fast CDN</span>
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
