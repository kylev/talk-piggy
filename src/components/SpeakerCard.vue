<script setup lang="ts">
import { ref, computed } from 'vue'

import type { Speaker } from '@/types.ts'
import TimeDisplay from './TimeDisplay.vue'

defineEmits<{
  (e: 'toggle'): void
  (e: 'remove'): void
  (e: 'rename', name: string): void
}>()
const props = defineProps<{
  speaker: Speaker
}>()

const hover = ref(false)
const editing = ref(false)
const newName = ref(props.speaker.name)

const color = computed(() => {
  return props.speaker.isSpeaking ? 'primary' : 'light'
})
</script>

<template>
  <b-card
    @click="$emit('toggle')"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    :bg-variant="color"
  >
    <b-card-title>
      <span v-if="!editing">
        {{ speaker.name }}
      </span>
      <b-form-input
        v-if="editing"
        v-model.trim="newName"
        ref="inputField"
        autofocus
        @keyup.enter="$emit('rename', newName)"
        @keyup.esc="editing = false"
        @focusout="editing = false"
        @click.stop
      />
      <b-dropdown v-if="!editing" right :variant="color || 'white'" class="float-right">
        <b-dropdown-item @click.stop="editing = true"> Edit </b-dropdown-item>
        <b-dropdown-item @click.stop="$emit('remove')"> Remove </b-dropdown-item>
      </b-dropdown>
    </b-card-title>
    <b-card-text>
      <TimeDisplay v-bind:time="speaker.speakingSeconds" />
    </b-card-text>
  </b-card>
</template>
