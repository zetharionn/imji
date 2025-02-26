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
		return { hasError: true, error }
	}

	render() {
		if (this.state.hasError && this.state.error) {
			return <this.props.errorComponent error={this.state.error} />
		}

		return <>{this.props.children}</>
	}
}
