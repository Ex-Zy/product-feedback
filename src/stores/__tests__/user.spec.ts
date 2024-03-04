import { flushPromises } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

import { useUserStore } from '@/stores/user'
import type { IUser } from '@/types'

const getUser = (): IUser => ({
  image: 'image-zena.jpg',
  name: 'Zena Kelley',
  username: 'velvetround'
})

describe('Test "user" store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Correct initial state', () => {
    const state = useUserStore()

    expect(state.currentUser).toEqual({
      image: '',
      name: '',
      username: ''
    })
    expect(state.loader).toBeFalsy()
    expect(state.error).toBeNull()
  })

  it('Call action "fetchCurrentUser" for fetch user', async () => {
    const { fetchCurrentUser } = useUserStore()
    const currentUser = await fetchCurrentUser()

    expect(currentUser).toEqual(getUser())
  })

  it('Call action "loadCurrentUserToStore" for saving currentUser into store', async () => {
    const state = useUserStore()

    await state.loadCurrentUserToStore()
    await flushPromises()

    expect(state.currentUser).toEqual(getUser())
  })
})
