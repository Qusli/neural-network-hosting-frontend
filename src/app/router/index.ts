import { useAppStore } from '@/shared/model/app.store'
import routes from './routes'

import {
  createRouter,
  createWebHistory,
  type RouteLocationAsPathGeneric,
} from 'vue-router'
import { ROUTES } from '@/shared/constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

function checkToAuthPage(to: RouteLocationAsPathGeneric) {
  return (
    to.path === ROUTES.AUTH.LOGIN.PATH ||
    to.path === ROUTES.AUTH.REGISTRATION.PATH ||
    to.path === ROUTES.AUTH.PASSWORD_RECOVERY.PATH
  )
}

router.beforeEach((to, from) => {
  if (!useAppStore().isLogin && !checkToAuthPage(to)) {
    return {
      path: ROUTES.AUTH.LOGIN.PATH,
    }
  }

  if (useAppStore().isLogin && checkToAuthPage(to)) {
    return {
      path: ROUTES.DASHBOARD.HOSTINGS.PATH,
    }
  }

  return true
})

export default router
