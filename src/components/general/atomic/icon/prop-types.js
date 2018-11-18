export default {
  color: {
    type: String,
    default: null
  },
  size: {
    type: String,
    default: 'default',
    validator: value => {
      var label = ['x-small', 'small', 'default', 'large', 'x-large']

      return label.indexOf(value) > -1
    }
  },
  type: {
    type: String,
    default: 'material-icons',
    validator: value => {
      var label = ['material-icons', 'fontawesome']

      return label.indexOf(value) > -1
    }
  },
  fontSize: {
    type: Number | String,
    default: null
  }
}
