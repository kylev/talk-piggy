<template>
  <div>
    <span v-if="hours">{{ hours }}:</span>
    <span>{{ minutes }}:</span>
    <span>{{ seconds }}</span>
  </div>
</template>

<script>
export default {
  props: ["time"],
  computed: {
    hours() {
      const h = Math.floor(this.time / 3600);
      return h > 0 ? h : null;
    },
    minutes() {
      return (Math.floor(this.time / 60) % 60).toString().padStart(2, "0");
    },
    seconds() {
      return (this.time % 60).toString().padStart(2, "0");
    }
  }
};
</script>
