<script setup lang="ts">
import { usePrimaryStore } from '@/stores/primary.ts'
import SpeakerCard from './SpeakerCard.vue'

const store = usePrimaryStore()
</script>

<template>
  <b-container>
    <b-row>
      <b-col v-for="s in store.speakers" :key="s.id" md="4" lg="3" class="py-2">
        <SpeakerCard
          :speaker="s"
          @toggle="store.updateTalking({ id: s.id, value: !s.isSpeaking })"
          @remove="store.removeSpeaker({ id: s.id })"
          @rename="(name: string) => store.editSpeakerName({ id: s.id, name })"
        />
      </b-col>
      <b-col md="4" lg="3" class="py-2 text-center align-self-center">
        <b-button v-b-modal.add-speaker-modal size="lg" variant="outline-primary" class="fs-1"
          >＋</b-button
        >
      </b-col>
    </b-row>
  </b-container>
</template>
