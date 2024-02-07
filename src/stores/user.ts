import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IUser } from '@/types'

export const useUserStore = defineStore('user', () => {
  const currentUser = ref<IUser>({
    image: '',
    name: '',
    username: ''
  })

  function setCurrentUser(user: IUser) {
    currentUser.value = user
  }

  return { currentUser, setCurrentUser }
})
