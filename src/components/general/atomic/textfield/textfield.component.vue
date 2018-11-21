<template>
  <div
    :class="classes"
    class="ef-textfield flex"
  >
    <label
      :for="name"
      class="ef-textfield__label flex"
    >
      <ui-atomic-icon
        :font-size="26"
        class="text--secondary"
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
      autocomplete="off"
      class="ef-textfield__input block"
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
        'ef-textfield--border': this.border,
        'ef-textfield--shadow': this.shadow,
        'ef-textfield--reverse': this.reverse
      }
    }
  }
}
</script>
