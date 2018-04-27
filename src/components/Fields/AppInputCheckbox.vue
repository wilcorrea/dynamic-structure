<template>
  <div class="form-group form-check">
    <input
      type="checkbox"
      class="form-check-input"
      :placeholder="placeholder"
      v-model="model"
      v-on:click="input"
    >
    <label class="form-check-label">{{ label }}</label>
  </div>
</template>

<script>
import Base from 'src/components/Fields/Base'

export default {
  mixins: [
    Base
  ],
  name: 'AppInputCheckbox',
  data: () => ({
    model: false
  }),
  methods: {
    init () {
      this.model = Boolean(this.value)
    },
    update (value) {
      // this.model = Boolean(value)
    }
  }
}
</script>
