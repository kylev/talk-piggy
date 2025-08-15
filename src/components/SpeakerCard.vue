<script setup lang="ts">
import { ref, computed } from 'vue'

import type Speaker from '@/types/Speaker.ts'
import TimeDisplay from './TimeDisplay.vue'

const emit = defineEmits<{
  (e: 'toggle'): void
  (e: 'remove'): void
  (e: 'rename', name: string): void
}>()
const props = defineProps<{
  speaker: Speaker
}>()

const editing = ref(false)
const newName = ref(props.speaker.name)

const color = computed(() => {
  return props.speaker.isSpeaking ? 'primary' : 'light'
})

const handleSave = () => {
  emit('rename', newName.value)
  editing.value = false
}
</script>

<template>
  <BCard @click="$emit('toggle')" :bg-variant="color">
    <BCardTitle>
      <span v-if="!editing">
        {{ speaker.name }}
      </span>
      <BFormInput
        v-if="editing"
        v-model.trim="newName"
        ref="inputField"
        autofocus
        @keyup.enter="handleSave"
        @keyup.esc="editing = false"
        @focusout="editing = false"
        @click.stop
      />
      <BDropdown v-if="!editing" right :variant="color || 'white'" class="float-right">
        <BDropdownItem @click.stop="editing = true"> Edit </BDropdownItem>
        <BDropdownItem @click.stop="$emit('remove')"> Remove </BDropdownItem>
      </BDropdown>
    </BCardTitle>
    <BCardText>
      <TimeDisplay v-bind:time="speaker.speakingSeconds" />
    </BCardText>
  </BCard>
</template>
