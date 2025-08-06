<script setup lang="ts">
import { ref } from 'vue'
import { usePrimaryStore } from '@/stores/primary.ts'

import TimerControl from './TimerControl.vue'
import logoUrl from './logo.svg'

const store = usePrimaryStore()
const name = ref('')
</script>

<template>
  <b-navbar type="dark" variant="info" sticky="top">
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
        <b-dropdown-item href="#" @click="store.resetTotalTimes()">
          Top Clock Clear
        </b-dropdown-item>
        <b-dropdown-item href="#" @click="store.resetSpeakerTimes()">
          Piggy Clock Clear
        </b-dropdown-item>
        <b-dropdown-item href="#" @click="store.resetState()"> Hard Reset </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
    <b-modal
      ref="modal"
      id="add-speaker-modal"
      title="Add Piggy"
      @show="name = ''"
      @ok="store.addSpeaker(name)"
    >
      <b-form @submit.stop.prevent>
        <b-form-input v-model.trim="name" ref="name-field" placeholder="Type a name" autofocus />
      </b-form>
    </b-modal>
  </b-navbar>
</template>
