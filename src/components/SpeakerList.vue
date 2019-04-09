<template>
  <section class="tile is-ancestor">
    <div class="tile is-parent" v-for="speaker in speakers" :key="speaker.name">
      <article class="tile is-child box">
        <p class="title">{{ speaker.name }}</p>
      </article>
    </div>
  </section>
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
