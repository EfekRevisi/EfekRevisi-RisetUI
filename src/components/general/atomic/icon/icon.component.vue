<template>
  <i
    :class="classes"
    :style="styles"
  >
    <slot v-if="type === 'material-icons'" />
  </i>
</template>

<style lang="scss">
@import '@/style/scss/import.scss';
@import './style.scss';
</style>

<script>
import ArrayMixin from '@/mixins/array.mixins'
import ColorMixin from '@/mixins/color.mixins'
import props from './prop-types'

export default {
  mixins: [ArrayMixin, ColorMixin],
  props,
  computed: {
    classes() {
      const className = {
        'ef-icon': true,
        'ef-icon--small': this.size === 'small',
        'ef-icon--large': this.size === 'large',
        'ef-icon--x-large': this.size === 'x-large',
        [`ef-icon--${this.color}`]: this.isColorAvailable(this.color)
      }

      if (this.type === 'material-icons') {
        className['material-icons'] = true
      } else {
        className[this.$slots.default[0].text] = true
      }

      return className
    },
    styles() {
      const generateStyle = (...args) => {
        return {
          'font-size': args[0] ? `${args[0]}px` : null,
          color: this.isColorAvailable(this.color) ? null : args[1]
        }
      }

      return this.checkKeyIsNotNull(generateStyle(this.fontSize, this.color))
    }
  }
}
</script>
