import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import './ui'

const App = () => {
	return (
		<>
			<Analytics />
			<div>Imji</div>
			<SpeedInsights />
		</>
	)
}

export default App
