import { guid } from 'src/utils'

export default {
  props: {
    value: {
      default: ''
    },
    label: {
      default: ''
    },
    type: {
      default: ''
    },
    help: {
      default: ''
    },
    id: {
      default: guid()
    },
    placeholder: {
      default: ''
    }
  },
  data: () => ({
    model: ''
  }),
  methods: {
    input () {
      this.$emit('input', this.model)
    },
    init () {
      this.model = String(this.value)
    },
    update (value) {
      this.model = String(value)
    }
  },
  watch: {
    value (current) {
      this.update(current)
    }
  },
  created () {
    this.init()
  }
}
