<template>
  <div
    :class="classes"
    class="ef-textfield flex p-5"
  >
    <label
      :for="name"
      class="ef-textfield__label"
    >
      <ui-atomic-icon
        type="material-icons"
      >
        {{ icon }}
      </ui-atomic-icon>
    </label>
    <input
      :id="name"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      class="ef-textfield__input"
    >
  </div>
</template>

<style lang="scss">
@import '@/style/scss/import.scss';
@import 'style.scss';
</style>

<script>
import props from './prop-types'
export default {
  props,
  computed: {
    classes() {
      return {
        'ef-textfield--shadow': this.shadow
      }
    }
  }
}
</script>
