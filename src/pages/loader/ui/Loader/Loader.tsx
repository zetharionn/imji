import { Spinner } from '@heroui/react'

export const Loader = () => {
	return (
		<div className='h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center gap-5'>
			<div>
				<Spinner size='lg' />
			</div>
		</div>
	)
}
