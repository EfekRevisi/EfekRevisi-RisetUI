export default {
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    required: true
  },
  shadow: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: true
  },
  reverse: {
    type: Boolean,
    default: false
  },
  value: {
    type: Boolean | Number | String,
    default: true
  }
}
