<template>
  <section>
    <b-form-group label="Add Speaker" label-for="add-speaker">
      <b-form-input
        id="add-speaker"
        placeholder="Joe Schmo"
        v-model.trim="name"
        v-on:keyup.enter="addSpeaker(name)"
      />
      <b-button class="button is-info" v-on:click="addSpeaker(name)">
        Add
      </b-button>
    </b-form-group>
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
