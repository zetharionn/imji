'use client'

import { ToastProvider } from '@heroui/react'
import type { FC } from 'react'

export const Toast: FC = () => {
	return <ToastProvider placement='bottom-center' />
}
