import { describe, it, expect } from 'vitest'
import { mountWithPinia as mount } from './test-utils'
import SpeakerList from '../SpeakerList.vue'

describe('SpeakerList', () => {
  it('renders default contents', () => {
    const wrapper = mount(SpeakerList)
    expect(wrapper.text()).toContain('Alice')
    expect(wrapper.text()).toContain('Bob')
    expect(wrapper.find('#add-speaker-button').text()).toContain('＋')
  })
})
