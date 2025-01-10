import { Uploader } from '@widgets/Uploader'

const Home = () => {
	return (
		<div className='h-[80vh] flex flex-col text-center items-center justify-center gap-4'>
			<div>
				<h1 className='sm:text-2xl md:text-3xl lg:text-4xl font-bold'>
					Save and share your images
				</h1>
			</div>
			<div>
				<Uploader />
			</div>
		</div>
	)
}

export default Home
