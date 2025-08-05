<template>
  <b-card
    @click="$emit('toggle')"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    :body-bg-variant="color"
  >
    <b-card-title>
      <span v-if="!editing">
        {{ speaker.name }}
      </span>
      <b-form-input
        v-if="editing"
        v-model.trim="newName"
        ref="inputField"
        @keyup.enter="finishEdit"
        @keyup.esc="cancelEdit"
        @focusout="cancelEdit"
        @click.stop
      />
      <b-dropdown v-if="!editing" right :variant="color || 'white'" class="float-right">
        <b-dropdown-item @click.stop="startEditingName"> Edit </b-dropdown-item>
        <b-dropdown-item @click.stop="$emit('remove')"> Remove </b-dropdown-item>
      </b-dropdown>
    </b-card-title>
    <b-card-text>
      <TimeDisplay v-bind:time="speaker.speakingSeconds" />
    </b-card-text>
  </b-card>
</template>

<script>
import { nextTick } from 'vue'

import TimeDisplay from './TimeDisplay.vue'

export default {
  props: ['speaker'],
  components: {
    TimeDisplay,
  },
  data() {
    return {
      hover: false,
      editing: false,
      newName: '',
    }
  },
  computed: {
    color() {
      if (this.speaker.isSpeaking) return 'primary'
      else return this.hover ? 'light' : null
    },
  },
  methods: {
    startEditingName() {
      this.newName = this.speaker.name
      this.editing = true
      nextTick(() => this.$refs.inputField.focus())
    },
    finishEdit() {
      this.$emit('rename', this.newName)
      this.editing = false
    },
    cancelEdit() {
      this.editing = false
    },
  },
}
</script>
