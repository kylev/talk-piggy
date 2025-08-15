import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SpeakerCard from '../SpeakerCard.vue'

describe('SpeakerCard', () => {
  it('Initial display', () => {
    const wrapper = mount(SpeakerCard, {
      props: {
        speaker: {
          id: 'abc123',
          name: 'Alice',
          isSpeaking: false,
          speakingSeconds: 0,
        },
      },
    })

    expect(wrapper.text()).toContain('Alice')
    expect(wrapper.text()).toContain('00:00')
    expect(wrapper.classes()).not.toContain('bg-primary')
  })

  describe('when the speaker is speaking', () => {
    it('displays the speaking time', () => {
      const wrapper = mount(SpeakerCard, {
        props: {
          speaker: {
            id: 'abc123',
            name: 'Alice',
            isSpeaking: true,
            speakingSeconds: 90,
          },
        },
      })

      expect(wrapper.text()).toContain('Alice')
      expect(wrapper.text()).toContain('01:30')
      expect(wrapper.classes()).toContain('bg-primary')
    })
  })
})
