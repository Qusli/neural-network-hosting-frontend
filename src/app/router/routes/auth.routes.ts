import { ROUTES } from '@/shared/constants'
import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/auth',
    component: () => import('@/app/templates/AuthTemplate.vue'),
    children: [
      {
        path: ROUTES.AUTH.LOGIN.PATH,
        name: ROUTES.AUTH.LOGIN.NAME,
        component: () => import('@/pages/auth/Login.vue'),
      },
      {
        path: ROUTES.AUTH.REGISTRATION.PATH,
        name: ROUTES.AUTH.REGISTRATION.NAME,
        component: () => import('@/pages/auth/Registration.vue'),
      },
      {
        path: ROUTES.AUTH.PASSWORD_RECOVERY.PATH,
        name: ROUTES.AUTH.PASSWORD_RECOVERY.NAME,
        component: () => import('@/pages/auth/PasswordRecovery.vue'),
      },
    ],
  },
] as RouteRecordRaw[]
