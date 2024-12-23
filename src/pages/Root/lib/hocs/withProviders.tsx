import { compose } from '@shared/lib'
import type { FC } from 'react'
import { NextUI, Query } from '../providers'

export const withProviders = compose<FC>(NextUI, Query)
