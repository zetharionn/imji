import { Spinner } from '@nextui-org/react'

export const Loader = () => {
	return (
		<div className='h-[80vh] flex flex-col text-center items-center justify-center gap-4'>
			<div>
				<Spinner size='lg' />
			</div>
		</div>
	)
}
