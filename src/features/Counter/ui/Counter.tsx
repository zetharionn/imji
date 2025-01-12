import { animate, motion, useMotionValue } from 'framer-motion'
import { useCounter } from '../lib'
import { useEffect, useState } from 'react'

export const Counter = () => {
	const { amount } = useCounter()
	const motionAmount = useMotionValue(0)
	const [value, setValue] = useState(0)

	useEffect(() => {
		const animation = animate(motionAmount, amount, {
			duration: 3,
			ease: 'easeInOut',
			onUpdate: value => {
				setValue(Math.round(value))
			}
		})

		return () => animation.stop()
	}, [motionAmount, amount])

	return (
		<div>
			<motion.p className='text-sm text-gray-300 font-medium'>
				{value} Images Hosted
			</motion.p>
		</div>
	)
}
