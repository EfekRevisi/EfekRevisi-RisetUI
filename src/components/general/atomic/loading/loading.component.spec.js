import { shallowMount } from '@vue/test-utils'
import LoadingComponent from '@/components/general/atomic/loading/loading.component'

describe('Testing icon component in general component ', () => {
  it('render loading component', () => {
    const props = {
      type: 'default'
    }

    const wrapper = shallowMount(LoadingComponent, {
      propsData: props
    })

    expect(wrapper.contains('.ef-loading-circle')).toBe(true)
  })
  it('render loading component with google type', () => {
    const props = {
      type: 'google'
    }

    const wrapper = shallowMount(LoadingComponent, {
      propsData: props
    })

    expect(wrapper.contains('.ef-loading-circle--google-type')).toBe(true)
  })
  it('test beforeEnter method', () => {
    const wrapper = shallowMount(LoadingComponent)
    const element = document.createElement('div')

    expect(wrapper.vm.beforeEnter(element).style.opacity).toBe('0')
  })
})
