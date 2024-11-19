import type { RouteRecordRaw } from 'vue-router'
import authRoutes from './auth.routes'
import dashboardRoutes from './dashboard.routes'

export default [...authRoutes, ...dashboardRoutes] as RouteRecordRaw[]
