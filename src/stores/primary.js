// import Vue from "vue";
// import Vuex from "vuex";
// import VuexPersistence from "vuex-persist";
import { event } from 'vue-gtag'
import { defineStore } from 'pinia'

// Vue.use(Vuex);

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage,
//   reducer: state => ({
//     speakers: state.speakers,
//     tickSeconds: state.tickSeconds,
//     crosstalkSeconds: state.crosstalkSeconds
//   })
// });

function createSpeaker(name) {
  return {
    id: Math.random().toString(),
    name,
    isSpeaking: false,
    speakingSeconds: 0,
  }
}

function findSpeakerIndex(speakers, id) {
  return speakers.findIndex((e) => e.id === id)
}

function initialState() {
  return {
    speakers: [createSpeaker('Alice'), createSpeaker('Bob')],
    tickSeconds: 0,
    tickTimer: null,
    tickLast: new Date(),
    crosstalkSeconds: 0,
  }
}

export const usePrimaryStore = defineStore('primary', {
  state: initialState,
  // plugins: [vuexLocal.plugin],
  getters: {
    isRunning: (state) => state.tickTimer !== null,
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
    addSpeaker(name) {
      this.speakers.push(createSpeaker(name))
      event('add_speaker', { name })
    },
    editSpeakerName({ id, name }) {
      const i = findSpeakerIndex(this.speakers, id)

      if (i >= 0) {
        const s = this.speakers[i]
        this.speakers[i] = { ...s, name }
      }
    },
    removeSpeaker({ id }) {
      this.speakers = this.speakers.filter((item) => item.id !== id)
    },
    setSpeakerValue({ id, attr, value }) {
      const i = findSpeakerIndex(this.speakers, id)

      if (i >= 0) {
        const s = this.speakers[i]
        this.speakers[i] = { ...s, [attr]: value }
      }
    },
    setTickLast(date) {
      this.tickLast = date
    },
    incrementTick(newTime) {
      const elapsed = Math.round((newTime - this.tickLast) / 1000)
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
    updateTalking(payload) {
      if (payload.value) {
        this.startTimer()
      }
      this.setSpeakerValue({ ...payload, attr: 'isSpeaking' })
    },
    startTimer() {
      if (!this.tickTimer) {
        this.setTickLast(new Date())
        this.tickTimer = setInterval(() => {
          this.incrementTick(new Date())
        }, 1000)
        event('start_timer', {})
      }
    },
    stopTimer() {
      if (this.tickTimer) {
        clearInterval(this.tickTimer)
        this.tickTimer = null
        event('stop_timer', {})
      }
    },
  },
})
