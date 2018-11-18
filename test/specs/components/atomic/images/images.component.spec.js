import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'

import ImageComponent from '@/components/general/atomic/image/image.component'
import LoadingComponent from '@/components/general/atomic/loading/loading.component'

Vue.component('ui-loading', LoadingComponent)

const DefaultProps = {
  src: 'https://images.unsplash.com/photo-1526868452228-6590028c2fac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c1becfc7e858de96fadc0dd171b6905a&auto=format&fit=crop&w=1050&q=80',
  placeholder: 'https://images.unsplash.com/photo-1526868452228-6590028c2fac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c1becfc7e858de96fadc0dd171b6905a&auto=format&fit=crop&w=500&q=60'
}

describe('Testing images component in general component', () => {
  it('render images component', () => {
    const props = {
      ...DefaultProps
    }

    const wrapper = shallowMount(ImageComponent, {
      propsData: props
    })

    expect(wrapper.contains('.ef-image')).toBe(true)
  })
  it('set height 500px for image component', () => {
    const props = {
      ...DefaultProps,
      height: '500px'
    }

    const wrapper = shallowMount(ImageComponent, {
      propsData: props
    })

    expect(wrapper.element.style.height).toBe('500px')
  })
  it('set width 350px for image component', () => {
    const props = {
      ...DefaultProps,
      width: '350px'
    }

    const wrapper = shallowMount(ImageComponent, {
      propsData: props
    })

    expect(wrapper.element.style.width).toBe('350px')
  })
  it('set gradient in image component', () => {
    const props = {
      ...DefaultProps,
      gradient: true
    }

    const wrapper = shallowMount(ImageComponent, {
      propsData: props
    })

    expect(wrapper.contains('.ef-image--gradient')).toBe(true)
  })
  it('set image rounded in image component', () => {
    const props = {
      ...DefaultProps,
      rounded: true
    }

    const wrapper = shallowMount(ImageComponent, {
      propsData: props
    })

    expect(wrapper.contains('.ef-image--rounded')).toBe(true)
  })
  it('set image contain in image component', () => {
    const props = {
      ...DefaultProps,
      contain: true
    }

    const wrapper = shallowMount(ImageComponent, {
      propsData: props
    })

    expect(wrapper.contains('.ef-image--contain')).toBe(true)
  })
  it('set gradient in image component', () => {
    const props = {
      ...DefaultProps,
      gradient: true
    }

    const wrapper = shallowMount(ImageComponent, {
      propsData: props
    })

    expect(wrapper.contains('.ef-image--gradient')).toBe(true)
  })
})
