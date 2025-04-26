'use client'

import { Spinner } from '@heroui/react'

const Loader = () => {
	return (
		<>
			<div className='h-dvh flex flex-col items-center justify-center text-center gap-5'>
				<Spinner size='lg' variant='wave' label='Waving...' />
			</div>
		</>
	)
}

export default Loader
