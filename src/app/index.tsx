import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Routing } from './routing'
import './styles'
import { imjiMark } from '@shared/ui'

export const App = () => {
	return (
		<>
			<head>
				<link rel='icon' type='image/svg+xml' href={imjiMark} />
				<title>Imji</title>
			</head>
			<Analytics />
			<Routing />
			<SpeedInsights />
		</>
	)
}
