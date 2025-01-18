import { Image } from '@heroui/react'
import { AnimatedValue, image } from '@shared/ui'
import { useCounter } from '../../lib'

export const Counter = () => {
	const { amount } = useCounter()

	return (
		<div className='flex items-center'>
			<Image src={image} />
			<p className='text-sm text-neutral-200 font-medium'>
				<AnimatedValue value={amount} duration={3} ease='easeOut' />
				<span> Images Hosted</span>
			</p>
		</div>
	)
}
