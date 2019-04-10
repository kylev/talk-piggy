<template>
  <b-navbar type="dark" variant="info" sticky="true">
    <b-navbar-brand href="#">Talk Piggy</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item href="#"><TimerControl /></b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav>
      <b-nav-item-dropdown text="Menu" right>
        <b-dropdown-item href="#">Thingy</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import TimerControl from "./TimerControl.vue";

export default {
  components: { TimerControl }
};
</script>
