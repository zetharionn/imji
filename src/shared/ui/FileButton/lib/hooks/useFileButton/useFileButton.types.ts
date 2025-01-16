export type PointerType = 'mouse' | 'pen' | 'touch' | 'keyboard' | 'virtual'

export interface PressEvent {
	type: 'pressstart' | 'pressend' | 'pressup' | 'press'
	pointerType: PointerType
	target: Element
	shiftKey: boolean
	ctrlKey: boolean
	metaKey: boolean
	altKey: boolean
	x: number
	y: number
	continuePropagation: () => void
}
