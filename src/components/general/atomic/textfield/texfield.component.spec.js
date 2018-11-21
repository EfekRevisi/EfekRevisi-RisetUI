import Vue from 'vue'

import { shallowMount } from '@vue/test-utils'
import TexfieldComponent from '@/components/general/atomic/textfield/textfield.component'
import IconComponent from '@/components/general/atomic/icon/icon.component'

Vue.component('ui-atomic-icon', IconComponent)

const props = {
  name: 'name',
  icon: 'search',
  type: 'text',
  placeholder: 'Masukan Text',
  shadow: true,
  border: true,
  reverse: true,
  value: ''
}

describe('Testing textfield component in general component ', () => {
  it('render textfield component', () => {
    const wrapper = shallowMount(TexfieldComponent, {
      propsData: props
    })

    expect(wrapper.contains('.ef-textfield')).toBe(true)
  })
  it('is class shadow is available', () => {
    const wrapper = shallowMount(TexfieldComponent, {
      propsData: props
    })

    expect(wrapper.contains('.ef-textfield--shadow')).toBe(true)
  })
  it('is class border is available', () => {
    const wrapper = shallowMount(TexfieldComponent, {
      propsData: props
    })

    expect(wrapper.contains('.ef-textfield--border')).toBe(true)
  })
  it('is class material icon rendered', () => {
    const wrapper = shallowMount(TexfieldComponent, {
      propsData: props
    })

    expect(wrapper.contains(IconComponent)).toBe(true)
  })
})
