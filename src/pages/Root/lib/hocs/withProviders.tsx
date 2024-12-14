import { compose } from '@shared/helpers'
import type { FC } from 'react'
import { NextUI, Query } from '../providers'

export const withProviders = compose<FC>(NextUI, Query)
