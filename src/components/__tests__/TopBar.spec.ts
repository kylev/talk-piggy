import { describe, it, expect } from 'vitest'
import { mountWithPinia as mount } from './test-utils'

import TopBar from '../TopBar.vue'

describe('TopBar', () => {
  it('renders the "Talk Piggy" title', () => {
    const wrapper = mount(TopBar)
    expect(wrapper.text()).toContain('Talk Piggy')
  })
})
