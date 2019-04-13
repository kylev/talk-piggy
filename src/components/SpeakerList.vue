<template>
  <b-container>
    <b-row>
      <b-col v-for="s in speakers" :key="s.id" md="4">
        <SpeakerCard
          :speaker="s"
          @toggle="startTalking(s.id)"
          @remove="removeSpeaker(s.id)"
          @edit-name="editSpeakerName"
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
    ...mapActions(["startTalking"])
  }
};
</script>
