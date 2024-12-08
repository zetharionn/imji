import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { withAppProviders } from './lib'
import { Routing } from './ui'
import './ui'

const App = () => {
	return (
		<>
			<Analytics />
			<Routing />
			<SpeedInsights />
		</>
	)
}

export default withAppProviders(App)
