import { memo } from 'react'
import { RouterDevtools } from './RouterDevtools'
import { QueryDevtools } from './QueryDevtools'

export const Devtools = memo(() => {
	return (
		<>
			<RouterDevtools />
			<QueryDevtools />
		</>
	)
})
