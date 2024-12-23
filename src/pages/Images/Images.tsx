import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import type { FC } from 'react'

export interface IImages {
	image: string
}

export const Images: FC<IImages> = ({ image }) => {
	return (
		<div className='h-[80vh] flex text-center items-center justify-center'>
			<div>
				<Card>
					<CardHeader>
						<h2 className='text-2xl font-bold'>{image}</h2>
					</CardHeader>
					<CardBody>
						<Image src={image} width={850} />
					</CardBody>
				</Card>
			</div>
		</div>
	)
}
