import { Alert } from '@heroui/alert'

export const Christmas = () => {
	return (
		<div className='relative w-[25vw]'>
			<Alert hideIcon radius='lg' className='group'>
				<div className='flex justify-center w-full'>
					<p className='text-xl'>Happy new year</p>
				</div>
				<div className='absolute inset-0 bg-linear-to-r from-fuchsia-500 via-red-500 to-amber-500 rounded-lg blur-md opacity-50 group-hover:opacity-100 transition ease-out duration-1000 -z-1' />
			</Alert>
		</div>
	)
}
