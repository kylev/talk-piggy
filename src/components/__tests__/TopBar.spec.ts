import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import { initialState } from '@/stores/primary'
import TopBar from '../TopBar.vue'

describe('TopBar', () => {
  it('renders the "Talk Piggy" title', () => {
    const wrapper = mount(TopBar, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: initialState(),
          }),
        ],
      },
    })
    expect(wrapper.text()).toContain('Talk Piggy')
  })
})
