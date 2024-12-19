import { FileButton } from '@features/FileButton'

export const Uploader = () => {
	return (
		<div className='flex flex-col text-center items-center justify-center gap-4'>
			<div>
				<h1 className='sm:text-2xl md:text-3xl lg:text-4xl font-bold'>
					Save and share your images
				</h1>
			</div>
			<FileButton />
		</div>
	)
}
