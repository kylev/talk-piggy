import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../TimeDisplay.vue'

describe('HelloWorld', () => {
  it('renders without hours by default', () => {
    const wrapper = mount(HelloWorld, { props: { time: 0 } })
    expect(wrapper.text()).toContain('00:00')
    expect(wrapper.text()).not.toContain('0:00:00')
  })

  it('renders with hours when time is greater than 3600 seconds', () => {
    const wrapper = mount(HelloWorld, { props: { time: 3661 } })
    expect(wrapper.text()).toContain('1:01:01')
  })
})
