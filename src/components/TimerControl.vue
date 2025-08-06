<script setup lang="ts">
import { usePrimaryStore } from '@/stores/primary.ts'

const store = usePrimaryStore()
</script>

<template>
  <section>
    <b-button v-if="!store.isRunning" v-on:click="store.startTimer" variant="light">
      Start
    </b-button>
    <b-button v-if="store.isRunning" v-on:click="store.stopTimer">Pause</b-button>
  </section>
</template>
