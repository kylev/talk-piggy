<template>
  <b-navbar type="dark" variant="info" sticky>
    <b-navbar-brand href="#">Talk Piggy</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item href="#"><TimerControl /></b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown text="Menu" right>
        <b-dropdown-item href="#" v-b-modal.add-speaker-modal>
          Add Speaker
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
    <b-modal ref="modal" id="add-speaker-modal" @ok="handleOk">
      <b-form @submit.stop.prevent="handleSubmit">
        <b-form-input placeholder="Joe Schmo" v-model.trim="name" />
      </b-form>
    </b-modal>
  </b-navbar>
</template>

<script>
import { mapMutations } from "vuex";

//import AddSpeaker from "./AddSpeaker.vue";
import TimerControl from "./TimerControl.vue";

export default {
  components: { TimerControl },
  data() {
    return {
      name: ""
    };
  },
  methods: {
    ...mapMutations(["addSpeaker"]),
    handleOk() {
      this.addSpeaker(this.name);
      this.name = "";
    },
    handleSubmit() {
      this.handleOk(this.name);
      this.$refs.modal.hide();
    }
  }
};
</script>
