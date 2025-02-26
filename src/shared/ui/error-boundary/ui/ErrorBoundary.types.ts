import type { FC, ReactNode } from 'react'

export interface IErrorComponent {
	error: Error
}

export interface ErrorBoundaryProps {
	children: ReactNode
	errorComponent: FC<IErrorComponent>
}

export interface ErrorBoundaryState {
	hasError: boolean
	error: Error | null
}
