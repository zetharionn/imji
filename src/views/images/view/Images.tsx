import { Viewer } from '@widgets/viewer'
import type { FC } from 'react'
import type { IImages } from './Images.types.ts'

const Images: FC<IImages> = ({ path }) => {
	return (
		<div className='h-dvh flex flex-col items-center justify-center text-center gap-5'>
			<Viewer path={path} />
		</div>
	)
}

export default Images
