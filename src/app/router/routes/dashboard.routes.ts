import { ROUTES } from '@/shared/constants'
import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/dashboard',
    component: () => import('@/app/templates/MainTemplate.vue'),
    children: [
      {
        path: ROUTES.DASHBOARD.HOSTINGS.PATH,
        name: ROUTES.DASHBOARD.HOSTINGS.NAME,
        component: () => import('@/pages/dashboard/Hostings.vue'),
      },
    ],
  },
] as RouteRecordRaw[]
