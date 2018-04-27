<template>
  <div>
    <template v-for="(field, key) in fields">
      <component
        :is="field.component"
        :key="key"
        v-bind="field"
        v-model="states[field.name]"
      />
    </template>
  </div>
</template>

<script>
import AppInput from './Fields/AppInput'
import AppInputCheckbox from './Fields/AppInputCheckbox'

export default {
  name: 'AppFields',
  components: {
    AppInputCheckbox,
    AppInput
  },
  props: {
    fields: {
      default: () => []
    }
  },
  data: () => ({
    states: {}
  }),
  watch: {
    states: {
      handler  (states) {
        this.$emit('input', states)
      },
      deep: true
    }
  },
  created () {
    this.states = this.fields.reduce((accumulate, field) => {
      accumulate[field.name] = field.default
      return accumulate
    }, {})
  }
}
</script>
