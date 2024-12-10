import { compose } from '@shared/helpers'
import { NextUI } from '../providers'
import type { FC } from 'react'

export const withProviders = compose<FC>(NextUI)
