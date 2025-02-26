import { Component } from 'react'
import type {
	ErrorBoundaryProps,
	ErrorBoundaryState
} from './ErrorBoundary.types'

export class ErrorBoundary extends Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false, error: null }
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true, error: error }
	}

	render() {
		if (this.state.hasError) {
			return <this.props.ErrorComponent />
		}

		return this.props.children
	}
}
