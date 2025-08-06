import { event } from 'vue-gtag'
import { defineStore } from 'pinia'

interface Speaker {
  id: string
  name: string
  speakingSeconds: number
  isSpeaking: boolean
}

function createSpeaker(name: string): Speaker {
  return {
    id: Math.random().toString(),
    name,
    isSpeaking: false,
    speakingSeconds: 0,
  }
}

function findSpeakerIndex(speakers: Speaker[], id: string): number {
  return speakers.findIndex((e) => e.id === id)
}

function initialState() {
  return {
    speakers: [createSpeaker('Alice'), createSpeaker('Bob')],
    tickSeconds: 0,
    // tickTimer: null as ReturnType<typeof setInterval> | null,
    tickTimer: undefined as number | undefined,
    tickLast: new Date() as Date,
    crosstalkSeconds: 0,
  }
}

export const usePrimaryStore = defineStore('primary', {
  state: initialState,
  persist: {
    pick: ['speakers', 'tickSeconds', 'crosstalkSeconds'],
  },
  getters: {
    isRunning: (state) => state.tickTimer !== undefined,
  },
  actions: {
    resetState() {
      // TODO Is there a more built-in hook to clear the timer and reset state?
      clearInterval(this.tickTimer)
      // acquire initial state
      // const s = initialState();
      // Object.keys(s).forEach(key => {
      //   this[key] = s[key];
      // });
    },
    resetSpeakerTimes() {
      this.speakers.map((s) => {
        s.speakingSeconds = 0
      })
    },
    resetTotalTimes() {
      this.tickSeconds = 0
      this.crosstalkSeconds = 0
    },
    addSpeaker(name: string) {
      this.speakers.push(createSpeaker(name))
      event('add_speaker', { name })
    },
    editSpeakerName({ id, name }: { id: string; name: string }) {
      const i = findSpeakerIndex(this.speakers, id)

      if (i >= 0) {
        const s = this.speakers[i]
        this.speakers[i] = { ...s, name }
      }
    },
    removeSpeaker({ id }: { id: string }) {
      this.speakers = this.speakers.filter((item) => item.id !== id)
    },
    setSpeakerValue({ id, attr, value }: { id: string; attr: string; value: string | boolean }) {
      const i = findSpeakerIndex(this.speakers, id)

      if (i >= 0) {
        const s = this.speakers[i]
        this.speakers[i] = { ...s, [attr]: value }
      }
    },
    setTickLast(date: Date) {
      this.tickLast = date
    },
    incrementTick(newTime: Date) {
      const elapsed = Math.round((newTime.getTime() - this.tickLast.getTime()) / 1000)
      const updateCount = this.speakers.reduce((accum, item) => {
        if (item.isSpeaking) {
          item.speakingSeconds += elapsed
          return accum + 1
        } else {
          return accum
        }
      }, 0)

      if (updateCount > 1) {
        this.crosstalkSeconds += elapsed
      }
      this.tickLast = new Date()
      this.tickSeconds += elapsed
    },
    updateTalking(payload: { id: string; value: boolean }) {
      if (payload.value) {
        this.startTimer()
      }
      this.setSpeakerValue({ ...payload, attr: 'isSpeaking' })
    },
    startTimer() {
      if (!this.tickTimer) {
        this.setTickLast(new Date())
        this.tickTimer = window.setInterval(() => {
          this.incrementTick(new Date())
        }, 1000)
        event('start_timer', {})
      }
    },
    stopTimer() {
      if (this.tickTimer) {
        clearInterval(this.tickTimer)
        this.tickTimer = undefined
        event('stop_timer', {})
      }
    },
  },
})
