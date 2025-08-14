<script setup lang="ts">
import { ref } from 'vue'
import { usePrimaryStore } from '@/stores/primary.ts'

import TimerControl from './TimerControl.vue'
import logoUrl from './logo.svg'

const store = usePrimaryStore()
const name = ref('')
</script>

<template>
  <BNavbar type="dark" variant="info" sticky="top">
    <BNavbarBrand href="#">
      <BImg
        :src="logoUrl"
        alt="Talk Piggy Logo"
        height="25"
        width="25"
        class="align-text-top mx-2"
      />
      <h1 class="d-inline">Talk Piggy</h1>
    </BNavbarBrand>
    <BNavbarNav>
      <BNavItem href="#">
        <TimerControl />
      </BNavItem>
    </BNavbarNav>
    <BNavbarNav class="ms-auto">
      <BNavItemDropdown text="Menu">
        <BDropdownItem href="#" v-b-modal.add-speaker-modal> Add Piggy </BDropdownItem>
        <BDropdownItem href="#" @click="store.resetTotalTimes()"> Top Clock Clear </BDropdownItem>
        <BDropdownItem href="#" @click="store.resetSpeakerTimes()">
          Piggy Clock Clear
        </BDropdownItem>
        <BDropdownItem href="#" @click="store.resetState()"> Hard Reset </BDropdownItem>
      </BNavItemDropdown>
    </BNavbarNav>
    <BModal
      ref="modal"
      id="add-speaker-modal"
      title="Add Piggy"
      @show="name = ''"
      @ok="store.addSpeaker(name)"
    >
      <BForm @submit.stop.prevent>
        <BFormInput v-model.trim="name" ref="name-field" placeholder="Type a name" autofocus />
      </BForm>
    </BModal>
  </BNavbar>
</template>
