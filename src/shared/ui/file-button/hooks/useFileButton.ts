import { type ChangeEvent, useCallback, useRef } from 'react'
import type { PressEvent } from './useFileButton.types'

export const useFileButton = () => {
	const ref = useRef<HTMLInputElement>(null)
	const onChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>, callback: (file: File) => void) =>
			event.currentTarget.files?.[0] && callback(event.currentTarget.files[0]),
		[]
	)
	const onPress = useCallback(
		(event: PressEvent, callback: (event: PressEvent) => void) => {
			ref.current?.click()
			callback(event)
		},
		[]
	)

	return { ref, onChange, onPress }
}
