<script setup lang="ts">
import { usePrimaryStore } from '@/stores/primary.ts'

const store = usePrimaryStore()
</script>

<template>
  <section>
    <BButton v-if="!store.isRunning" @click="store.startTimer" variant="light"> Start </BButton>
    <BButton v-if="store.isRunning" @click="store.stopTimer"> Pause </BButton>
  </section>
</template>
