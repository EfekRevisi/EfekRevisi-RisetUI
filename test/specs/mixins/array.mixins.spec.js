import ArrayMixin from '@/mixins/array.mixins'

describe('Testing Array Mixin', () => {
  test('check key is not null method', () => {
    const data = { name: 'Irfan', age: null }

    const wrapper = ArrayMixin.methods.checkKeyIsNotNull(data)

    // Contain
    expect(wrapper.name).toContain('Irfan')
  })
})
