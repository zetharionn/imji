import { Spinner } from '@heroui/react'

const Loader = () => {
	return (
		<>
			<title>Imji | Waving</title>
			<div className='h-dvh flex flex-col items-center justify-center text-center gap-5'>
				<div>
					<Spinner size='lg' variant='wave' label='Waving...' />
				</div>
			</div>
		</>
	)
}

export default Loader
