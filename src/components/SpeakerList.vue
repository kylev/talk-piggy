<template>
  <div>
    <p>Thinger</p>
    <ul>
      <li v-for="speaker in speakers" :key="speaker.name">{{ speaker.name }}</li>
    </ul>
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
