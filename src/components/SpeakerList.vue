<template>
  <b-container>
    <b-row>
      <b-col v-for="s in speakers" :key="s.id" md="4">
        <SpeakerCard
          :speaker="s"
          @toggle="updateTalking({ id: s.id, value: !s.isSpeaking })"
          @remove="removeSpeaker({ id: s.id })"
          @rename="name => editSpeakerName({ id: s.id, name })"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { usePrimaryStore } from "@/stores/primary";

import SpeakerCard from "./SpeakerCard.vue";

export default {
  components: {
    SpeakerCard
  },
  computed: {
    ...mapState(usePrimaryStore, ["speakers"])
  },
  methods: {
    ...mapActions(usePrimaryStore, ["editSpeakerName", "removeSpeaker", "updateTalking"])
  }
};
</script>
