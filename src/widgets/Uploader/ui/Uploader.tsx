import { FileButton } from '@features/FileButton'

export const Uploader = () => {
	return (
		<div className='flex flex-col items-center justify-center gap-4'>
			<div>
				<h1 className='text-3xl font-bold'>Save and share your images</h1>
			</div>
			<FileButton />
		</div>
	)
}
