<template>
  <b-field>
    <b-input placeholder="Joe Schmo" v-model.trim="name" />
    <p class="control">
      <button class="button is-info" v-on:click="addSpeaker(name)">
        Add
      </button>
    </p>
  </b-field>
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
