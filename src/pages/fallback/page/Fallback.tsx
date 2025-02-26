import type { FC } from 'react'
import type { IFallback } from './Fallback.types'
import { Alert } from '@heroui/react'

const Fallback: FC<IFallback> = ({ error }) => {
	return (
		<>
			<title>Imji | Error</title>
			<div className='h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center gap-5'>
				<div>
					<Alert color='danger' title='Error' description={error.message} />
				</div>
			</div>
		</>
	)
}

export default Fallback
