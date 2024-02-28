import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IUser } from '@/types'
import { API_USER } from '@/constants'

export const useUserStore = defineStore('user', () => {
  const loader = ref(false)
  const error = ref<any>(null)

  const currentUser = ref<IUser>({
    image: '',
    name: '',
    username: ''
  })

  async function fetchCurrentUser(): Promise<IUser | undefined> {
    loader.value = true
    try {
      const promiseResponse: Response = await fetch(API_USER)

      return (await promiseResponse.json()) as IUser
    } catch (err) {
      error.value = 'Failed to load currentUser'
      console.log(err)
    } finally {
      loader.value = false
    }
  }

  async function loadCurrentUserToStore() {
    const user = await fetchCurrentUser()

    if (user) {
      currentUser.value = user
    }
  }

  return { loader, error, currentUser, fetchCurrentUser, loadCurrentUserToStore }
})
