import ColorMixin from '@/mixins/color.mixins'

describe('Testing Color Mixin', () => {
  test('check color is available', () => {
    const wrapper = ColorMixin.methods.isColorAvailable('pink-darker', {
      'pink-darker': '#6f213f'
    })

    // Contain
    expect(wrapper).toBeTruthy()
  })
  test('check color is not available', () => {
    const wrapper = ColorMixin.methods.isColorAvailable('Gaben', {
      'pink-darker': '#6f213f'
    })

    // Contain
    expect(wrapper).toBeFalsy()
  })
  test('check color is null', () => {
    const wrapper = ColorMixin.methods.isColorAvailable(null, {
      'pink-darker': '#6f213f'
    })

    // Contain
    expect(wrapper).toBeFalsy()
  })
  test('check color #ef5d60 is primary', () => {
    const wrapper = ColorMixin.data()

    // Contain
    expect(wrapper.GeneralColor.primary).toContain('#ef5d60')
  })
})
