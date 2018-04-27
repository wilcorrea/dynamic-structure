<template>
  <div class="container">
    <br>
    <form>
      <app-fields v-bind:fields="fields" v-model="record"/>
      <app-buttons v-bind:buttons="buttons"/>
      <pre>{{ record }}</pre>
    </form>
  </div>
</template>

<script>
import AppButtons from './AppButtons'
import AppFields from './AppFields'

export default {
  components: {
    AppFields,
    AppButtons
  },
  name: 'AppForm',
  props: {
    schemas: Function,
    actions: Function
  },
  data: () => ({
    record: {},
    fields: [],
    buttons: []
  }),
  methods: {
    save () {
      window.alert(JSON.stringify(this.record))
    }
  },
  created () {
    this.fields = this.schemas(this)
    this.buttons = this.actions(this)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
