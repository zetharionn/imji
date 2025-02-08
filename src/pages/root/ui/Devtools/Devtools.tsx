import { memo } from 'react'
import { QueryDevtools } from '../QueryDevtools'
import { RouterDevtools } from '../RouterDevtools'

export const Devtools = memo(() => {
	return (
		<>
			<RouterDevtools />
			<QueryDevtools />
		</>
	)
})
