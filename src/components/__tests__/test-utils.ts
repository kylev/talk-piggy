import { initialState } from '@/stores/primary'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { vi } from 'vitest'
import type { Component } from 'vue'

export const mountWithPinia = (component: Component, options = {}) => {
  return mount(component, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
          initialState: { primary: initialState() },
        }),
      ],
    },
    ...options,
  })
}
