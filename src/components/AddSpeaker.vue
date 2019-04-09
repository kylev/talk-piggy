<template>
  <section>
    <b-field>
      <b-input
        placeholder="Joe Schmo"
        v-model.trim="name"
        v-on:keyup.enter="addSpeaker(name)"
      />
      <p class="control">
        <button class="button is-info" v-on:click="addSpeaker(name)">
          Adds
        </button>
      </p>
    </b-field>
  </section>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["addSpeaker"])
  },
  data() {
    return {
      name: ""
    };
  }
};
</script>
