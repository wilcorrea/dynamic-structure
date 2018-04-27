import { form } from './model'

export default (layouts) => [
  {
    path: '/',
    name: 'AppForm',
    component: layouts.form,
    props: form
  }
]
