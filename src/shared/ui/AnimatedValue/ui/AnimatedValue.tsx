import { memo, useEffect, useState, type FC } from 'react'
import type { IAnimatedValue } from './AnimatedValue.types'
import { animate, motion, useMotionValue } from 'framer-motion'

export const AnimatedValue: FC<IAnimatedValue> = memo(
	({ value, initial = 0, duration = 5, ease = 'linear' }) => {
		const motionValue = useMotionValue(initial)
		const [displayValue, setDisplayValue] = useState(initial)

		useEffect(() => {
			const animation = animate(motionValue, value, {
				duration,
				ease,
				onUpdate: value => {
					setDisplayValue(Math.round(value))
				}
			})

			return () => animation.stop()
		}, [motionValue, value, duration, ease])

		return <motion.span>{displayValue}</motion.span>
	}
)
