<script setup lang="ts">
import { usePrimaryStore } from '@/stores/primary.ts'

import TimeDisplay from './TimeDisplay.vue'

const store = usePrimaryStore()
</script>

<template>
  <BContainer class="py-md-2">
    <BRow>
      <BCol class="text-center">
        <BCard title="Total">
          <TimeDisplay :time="store.tickSeconds" class="h1" />
        </BCard>
      </BCol>
      <BCol class="text-center">
        <BCard title="Crosstalk">
          <TimeDisplay :time="store.crosstalkSeconds" class="h1" />
        </BCard>
      </BCol>
    </BRow>
  </BContainer>
</template>
