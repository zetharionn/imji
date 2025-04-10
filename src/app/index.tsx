import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Routing } from './routing'
import './styles'

export const App = () => {
	return (
		<>
			<Analytics />
			<Routing />
			<SpeedInsights />
		</>
	)
}
