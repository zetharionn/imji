import { useCounter } from '../lib'
import { Image } from '@nextui-org/react'
import { AnimatedValue, image } from '@shared/ui'

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
