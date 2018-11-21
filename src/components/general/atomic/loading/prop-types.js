export default {
  type: {
    type: String,
    default: 'default',
    validator: value => {
      var label = ['default', 'google']

      return label.indexOf(value) > -1
    }
  },
  value: {
    type: Boolean | Number | String,
    default: true
  }
}
