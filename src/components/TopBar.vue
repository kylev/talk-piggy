<template>
  <b-navbar type="dark" variant="info" sticky>
    <b-navbar-brand href="#">
      <b-img
        :src="logoUrl"
        alt="Talk Piggy Logo"
        height="25"
        width="25"
        class="align-text-top mx-2"
      />
      <h1 class="d-inline">Talk Piggy</h1>
    </b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item href="#">
        <TimerControl />
      </b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ms-auto">
      <b-nav-item-dropdown text="Menu">
        <b-dropdown-item href="#" v-b-modal.add-speaker-modal> Add Piggy </b-dropdown-item>
        <b-dropdown-item href="#" @click="resetTotalTimes"> Top Clock Clear </b-dropdown-item>
        <b-dropdown-item href="#" @click="resetSpeakerTimes"> Piggy Clock Clear </b-dropdown-item>
        <b-dropdown-item href="#" @click="resetState"> Hard Reset </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
    <b-modal
      ref="modal"
      id="add-speaker-modal"
      @ok="handleOk"
      @shown="focusInput"
      title="Add Piggy"
    >
      <b-form @submit.stop.prevent="handleSubmit">
        <b-form-input v-model.trim="name" ref="name-field" placeholder="Type a name" />
      </b-form>
    </b-modal>
  </b-navbar>
</template>

<script>
import { mapActions } from 'pinia'
import { usePrimaryStore } from '@/stores/primary'

import logoUrl from './logo.svg'
import TimerControl from './TimerControl.vue'

export default {
  components: { TimerControl },
  data() {
    return {
      name: '',
      logoUrl,
    }
  },
  methods: {
    ...mapActions(usePrimaryStore, [
      'addSpeaker',
      'resetState',
      'resetSpeakerTimes',
      'resetTotalTimes',
    ]),
    focusInput() {
      this.$refs['name-field'].focus()
    },
    handleOk() {
      this.addSpeaker(this.name)
      this.name = ''
    },
    handleSubmit() {
      this.handleOk(this.name)
      this.$refs.modal.hide()
    },
  },
}
</script>
