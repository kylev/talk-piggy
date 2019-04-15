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
import { mapActions, mapMutations, mapState } from "vuex";

import SpeakerCard from "./SpeakerCard.vue";

export default {
  components: {
    SpeakerCard
  },
  computed: {
    ...mapState({
      speakers: state => state.speakers
    })
  },
  methods: {
    ...mapMutations(["removeSpeaker", "editSpeakerName"]),
    ...mapActions(["updateTalking"])
  }
};
</script>
