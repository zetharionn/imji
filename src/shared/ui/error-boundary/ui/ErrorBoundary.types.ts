import type { FC, ReactNode } from 'react'

export interface ErrorBoundaryProps {
	children?: ReactNode
	ErrorComponent: FC
}

export interface ErrorBoundaryState {
	hasError: boolean
	error: Error | null
}
