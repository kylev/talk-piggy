import { describe, it, expect } from 'vitest'
import { mountWithPinia as mount } from './test-utils'
import MainPanel from '../MainPanel.vue'

describe('MainPanel', () => {
  it('renders properly', () => {
    const wrapper = mount(MainPanel)
    expect(wrapper.text()).toContain('Total')
    expect(wrapper.text()).toContain('Crosstalk')
  })
})
