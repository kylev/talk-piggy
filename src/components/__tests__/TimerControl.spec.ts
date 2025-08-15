import { describe, it, expect } from 'vitest'
import { mountWithPinia as mount } from './test-utils'

import { usePrimaryStore } from '@/stores/primary'
import TimerControl from '../TimerControl.vue'

describe('TimerControl', () => {
  it('renders properly', () => {
    const wrapper = mount(TimerControl)
    expect(wrapper.text()).toContain('Start')
  })

  it('responds to clicks', async () => {
    const wrapper = mount(TimerControl)

    const store = usePrimaryStore()
    await wrapper.find('button').trigger('click')
    expect(store.startTimer).toHaveBeenCalledTimes(1)
  })
})
