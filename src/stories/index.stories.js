import { storiesOf } from '@storybook/vue'
import { linkTo } from '@storybook/addon-links'

import Vue from 'vue'

import MyButton from './MyButton.vue'
import Welcome from './Welcome.vue'

import Component from '../components'

Component.map(x => {
  Vue.component(x.name, x.component)
  return x
})

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') }
}))

storiesOf('Button', module).add('button', () => ({
  components: { MyButton },
  template: '<ui-button>Hello Button</ui-button>'
}))
