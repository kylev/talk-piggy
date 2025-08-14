import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TimerControl from '../TimerControl.vue'
import { createTestingPinia } from '@pinia/testing'
import { initialState, usePrimaryStore } from '@/stores/primary'

describe('TimerControl', () => {
  it('renders properly', () => {
    const wrapper = mount(TimerControl, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: initialState(),
          }),
        ],
      },
    })
    expect(wrapper.text()).toContain('Start')
  })

  it('responds to clicks', async () => {
    const wrapper = mount(TimerControl, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: initialState(),
          }),
        ],
      },
    })

    const store = usePrimaryStore()
    await wrapper.find('button').trigger('click')
    expect(store.startTimer).toHaveBeenCalledTimes(1)
  })
})
