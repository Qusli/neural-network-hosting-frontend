import { ROUTES } from '@/shared/constants'

import type { Navigation } from '../types'

export const NAVIGATION: Navigation[] = [
  {
    path: ROUTES.DASHBOARD.HOSTINGS.PATH,
    label: 'Хостинги',
    icon: 'hostings',
  },
  {
    path: 'sad',
    label: 'Хостинги',
    icon: 'hostings',
  },
] as const
