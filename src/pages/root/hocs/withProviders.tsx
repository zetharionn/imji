import { compose } from '@shared/lib'
import type { FC } from 'react'
import { Boundary, HeroUI, Query } from '../providers'

export const withProviders = compose<FC>(HeroUI, Query, Boundary)
