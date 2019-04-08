<template>
  <section>
    <div class="tile is-ancestor">
      <div
        class="tile is-parent"
        v-for="speaker in speakers"
        :key="speaker.name"
      >
        <article class="tile is-child box">
          <p class="title">{{ speaker.name }}</p>
        </article>
      </div>
    </div>
    <AddSpeaker />
  </section>
</template>

<script>
import AddSpeaker from "./AddSpeaker.vue";

export default {
  components: {
    AddSpeaker
  },
  computed: {
    speakers() {
      return this.$store.state.speakers;
    }
  }
};
</script>
