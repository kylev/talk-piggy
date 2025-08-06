<script setup lang="ts">
defineProps<{ time: number }>()

const str0s = (n: number) => n.toString().padStart(2, '0')

const hours = (t: number) => {
  const h = Math.floor(t / 3600)
  return h > 0 ? h : null
}
</script>

<template>
  <div>
    <span v-if="hours(time)">{{ hours(time) }}:</span>
    <span>{{ str0s(Math.floor(time / 60) % 60) }}:</span>
    <span>{{ str0s(time % 60) }}</span>
  </div>
</template>
