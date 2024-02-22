import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IUser } from '@/types'
import { currentUser as jsonUser } from '@/data/data.json'

export const useUserStore = defineStore('user', () => {
  const loader = ref(false)
  const error = ref<any>(null)

  const currentUser = ref<IUser>({
    image: '',
    name: '',
    username: ''
  })

  async function fetchCurrentUser(delay = 300): Promise<IUser | undefined> {
    loader.value = true
    try {
      const responsePromise: Promise<IUser> = new Promise((resolve, reject) => {
        setTimeout(resolve, delay, jsonUser)
      })
      return await responsePromise
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
