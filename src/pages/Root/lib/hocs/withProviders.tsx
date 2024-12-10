import { compose } from '@shared/helpers'
import { NextUI, Query } from '../providers'
import type { FC } from 'react'

export const withProviders = compose<FC>(NextUI, Query)
