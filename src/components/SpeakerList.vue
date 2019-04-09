<template>
  <div>
    <b-card v-bind:title="speaker.name" v-for="speaker in speakers" :key="speaker.name">
      <b-button>Talking</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  computed: {
    speakers() {
      return this.$store.state.speakers;
    }
  }
};
</script>
