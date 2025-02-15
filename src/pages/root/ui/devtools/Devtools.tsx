import { memo } from 'react'
import { QueryDevtools } from '../query-devtools'
import { RouterDevtools } from '../router-devtools'

export const Devtools = memo(() => {
	return (
		<>
			<RouterDevtools />
			<QueryDevtools />
		</>
	)
})
