<script setup lang="ts">
import { usePrimaryStore } from '@/stores/primary.ts'

import TimeDisplay from './TimeDisplay.vue'

const store = usePrimaryStore()
</script>

<template>
  <b-container class="py-md-2">
    <b-row>
      <b-col class="text-center">
        <b-card title="Total">
          <TimeDisplay :time="store.tickSeconds" class="h1" />
        </b-card>
      </b-col>
      <b-col class="text-center">
        <b-card title="Crosstalk">
          <TimeDisplay :time="store.crosstalkSeconds" class="h1" />
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
