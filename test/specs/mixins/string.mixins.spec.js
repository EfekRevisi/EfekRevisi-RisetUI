import StringMixin from '@/mixins/string.mixins'

describe('Testing String Mixin', () => {
  test('check "90" is number', () => {
    const wrapper = StringMixin.methods.isNumber('90')

    // Contain
    expect(wrapper).toBeTruthy()
  })
})
