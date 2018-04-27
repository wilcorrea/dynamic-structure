<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      v-model="model"
      v-on:input="input"
      class="form-control"
    >
    <small class="form-text text-muted">{{ help }}</small>
  </div>
</template>

<script>
import Base from 'src/components/Fields/Base'
export default {
  mixins: [
    Base
  ],
  name: 'AppInput'
}
</script>
