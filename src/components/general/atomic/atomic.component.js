const icon = () =>
  import(/* webpackChunkName: "atomic" */ './icon/icon.component.vue')
const image = () =>
  import(/* webpackChunkName: "atomic" */ './image/image.component.vue')
const loading = () =>
  import(/* webpackChunkName: "atomic" */ './loading/loading.component.vue')
const textfield = () =>
  import(/* webpackChunkName: "atomic" */ './textfield/textfield.component.vue')

export default [
  {
    component: icon,
    name: 'ui-atomic-icon'
  },
  {
    component: image,
    name: 'ui-atomic-image'
  },
  {
    component: loading,
    name: 'ui-atomic-loading'
  },
  {
    component: textfield,
    name: 'ui-atomic-textfield'
  }
]
