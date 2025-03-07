import type { Easing } from 'framer-motion'

export interface IAnimatedValue {
	value: number
	initial?: number
	duration?: number
	ease?: Easing | Easing[]
}
