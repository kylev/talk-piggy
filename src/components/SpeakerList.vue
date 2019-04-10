<template>
  <div>
    <b-card v-for="s in speakers" v-bind:title="s.name" :key="s.id">
      <b-button
        v-on:click="toggleSpeaking(s.id)"
        v-bind:pressed="s.isSpeaking"
        variant="outline-primary"
      >
        Talking
      </b-button>
    </b-card>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
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
