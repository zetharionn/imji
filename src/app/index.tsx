import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Routing } from './routing'
import './styles'
import { imjiMark } from '@shared/ui'

export const App = () => {
	return (
		<>
			<link rel='icon' type='image/svg+xml' href={imjiMark} />
			<title>Imji</title>
			<Analytics />
			<Routing />
			<SpeedInsights />
		</>
	)
}
