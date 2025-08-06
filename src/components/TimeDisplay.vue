<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps<{ time: number }>()

const hours = computed(() => {
  const h = Math.floor(props.time / 3600)
  return h > 0 ? h : null
})

const minutes = computed(() => {
  return (Math.floor(props.time / 60) % 60).toString().padStart(2, '0')
})

const seconds = computed(() => {
  return (props.time % 60).toString().padStart(2, '0')
})
</script>

<template>
  <div>
    <span v-if="hours">{{ hours }}:</span>
    <span>{{ minutes }}:</span>
    <span>{{ seconds }}</span>
  </div>
</template>
