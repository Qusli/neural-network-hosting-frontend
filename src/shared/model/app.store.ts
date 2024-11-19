import { defineStore } from 'pinia'
import type { IAccount } from '../types/account.types'

interface State {
  isLogin: boolean
  account: IAccount
}

export const useAppStore = defineStore({
  id: 'app-store',
  state: (): State => ({
    isLogin: true,
    account: {
      id: 0,
      email: "test@mail.com"
    }
  }),
  getters: {},
  actions: {
    /* INIT */
    async init() {
      console.log('APP START')
    },
    /* END INIT */
  },
})
