import type { FC, ReactNode } from 'react'

export interface IFallback {
	error: Error
}

export interface ErrorBoundaryProps {
	children: ReactNode
	fallback: FC<IFallback>
}

export interface ErrorBoundaryState {
	hasError: boolean
	error: Error | null
}
