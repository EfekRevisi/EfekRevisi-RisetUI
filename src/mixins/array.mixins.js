export default {
  methods: {
    checkKeyIsNotNull(data) {
      return Object.keys(data)
        .filter(x => {
          return data[x]
        })
        .map(x => {
          return { [x]: data[x] }
        })
        .reduce((obj, item) => {
          return { ...obj, ...item }
        }, {})
    }
  }
}
