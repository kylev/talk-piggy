<template>
  <b-container>
    <SpeakerCard v-for="s in speakers" v-bind:speaker="s" v-on:toggle="toggleSpeaking(s.id)" :key="s.id" />
  </b-container>
</template>

<script>
import { mapMutations, mapState } from "vuex";

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
    ...mapMutations(["toggleSpeaking"])
  }
};
</script>
