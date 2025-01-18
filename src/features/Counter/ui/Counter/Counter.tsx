import { Image } from '@heroui/react'
import { AnimatedValue, image } from '@shared/ui'
import { useCounter } from '../../lib'

export const Counter = () => {
	const { amount } = useCounter()

	return (
		<div className='flex flex-row items-center'>
			<Image src={image} />
			<p>
				<AnimatedValue value={amount} duration={3} ease='easeOut' />
				<span> Images Hosted</span>
			</p>
		</div>
	)
}
