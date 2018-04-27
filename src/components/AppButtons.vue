<template>
  <div class="form-group">
    <template v-for="(button, key) in buttons">
      <input type="button" :key="key" :class="button.className" @click="button.click" :value="button.label">
    </template>
  </div>
</template>

<script>
export default {
  name: 'AppButtons',
  props: {
    buttons: {
      default: () => []
    }
  }
}
</script>
