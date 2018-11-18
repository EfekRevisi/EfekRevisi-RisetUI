export default {
  src: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  },
  width: {
    type: String | Number,
    default: null
  },
  height: {
    type: String | Number,
    default: null
  },
  gradient: {
    type: Boolean,
    default: false
  },
  contain: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    default: false
  }
}
