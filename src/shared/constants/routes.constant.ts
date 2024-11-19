export const ROUTES = {
  AUTH: {
    LOGIN: {
      PATH: '/auth/login/',
      NAME: 'login',
    },
    REGISTRATION: {
      PATH: '/auth/registration/',
      NAME: 'registration',
    },
    PASSWORD_RECOVERY: {
      PATH: '/auth/password-recovery/',
      NAME: 'password-recovery',
    },
  },
  DASHBOARD: {
    HOSTINGS: {
      PATH: '/dashboard/hostings/',
      NAME: 'hostings',
    },
  },
} as const
