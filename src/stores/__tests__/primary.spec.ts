import { describe, it, expect, beforeEach } from 'vitest'

import { setActivePinia, createPinia } from 'pinia'
import { usePrimaryStore } from '../primary'

describe('Primary Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('initial values', () => {
    const store = usePrimaryStore()

    expect(store.tickSeconds).toBe(0)
    expect(store.crosstalkSeconds).toBe(0)
    expect(store.speakers.length).toBe(2)
    expect(store.isRunning).toBe(false)
  })
})
