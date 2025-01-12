import { animate, motion, useMotionValue } from 'framer-motion'
import { useCounter } from '../lib'
import { useEffect, useState } from 'react'
import { Image } from '@nextui-org/react'
import { image } from '@shared/ui'

export const Counter = () => {
	const { amount } = useCounter()
	const motionAmount = useMotionValue(0)
	const [value, setValue] = useState(0)

	useEffect(() => {
		const animation = animate(motionAmount, amount, {
			duration: 3,
			ease: 'easeOut',
			onUpdate: value => {
				setValue(Math.round(value))
			}
		})

		return () => animation.stop()
	}, [motionAmount, amount])

	return (
		<div className='flex flex-row items-center'>
			<Image src={image} />
			<motion.p className='text-sm text-gray-300 font-medium'>
				{value} Images Hosted
			</motion.p>
		</div>
	)
}
