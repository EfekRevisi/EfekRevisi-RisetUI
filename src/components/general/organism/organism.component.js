const header = () =>
  import(/* webpackChunkName: "organism" */ './header/header.component.vue')

export default [
  {
    component: header,
    name: 'ui-organism-header'
  }
]
