import Vue from 'vue'
import Router from 'vue-router'
import AppForm from 'src/components/AppForm'

import example from 'src/domains/Example/routes'

Vue.use(Router)

const layouts = {
  form: AppForm
}

export default new Router({
  routes: example(layouts)
})
