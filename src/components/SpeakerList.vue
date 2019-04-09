<template>
  <div>
    <b-card v-bind:title="s.name" v-for="s in speakers" :key="s.id">
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
