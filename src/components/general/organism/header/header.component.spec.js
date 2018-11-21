import Vue from 'vue'
import jsdom from 'jsdom'

import { shallowMount } from '@vue/test-utils'
import TexfieldComponent from '@/components/general/atomic/textfield/textfield.component'
import HeaderComponent from '@/components/general/organism/header/header.component'
import IconComponent from '@/components/general/atomic/icon/icon.component'

Vue.component('ui-atomic-textfield', TexfieldComponent)
Vue.component('ui-atomic-icon', IconComponent)

const renderer = require('vue-server-renderer').createRenderer()

const props = {
  photo: 'https://www.fakepersongenerator.com/Face/male/male1084415159882.jpg'
}

describe('Testing header component in general component ', () => {
  it('render header component', () => {
    const wrapper = shallowMount(HeaderComponent, {
      propsData: props
    })

    expect(wrapper.contains('.ef-header')).toBe(true)
  })
  it('is texfield rendered', () => {
    const wrapper = shallowMount(HeaderComponent, {
      propsData: props
    })

    expect(wrapper.contains(TexfieldComponent)).toBe(true)
  })
  it('is image rendered', () => {
    const ClonedComponent = Vue.extend(HeaderComponent)
    const NewComponent = new ClonedComponent({
      propsData: {
        ...props
      }
    }).$mount()

    renderer.renderToString(NewComponent, function(err, str) {
      if (err) {
        console.log(err.stack)
      }

      const dom = new jsdom.JSDOM(str)
      const firstHeading = dom.window.document.querySelector('img')
      expect(firstHeading.getAttribute('src')).toContain(props.photo)
    })
  })
})
