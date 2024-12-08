import { compose } from '@shared/helpers'
import type { ComponentType } from 'react'
import { NextUI } from '../providers'

export const withAppProviders = compose<ComponentType>(NextUI)
