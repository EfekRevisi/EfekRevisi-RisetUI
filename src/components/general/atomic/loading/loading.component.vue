<template>
  <transition
    :css="false"
    name="fade"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <svg
      v-if="value"
      :class="classes"
      x="0px"
      y="0px"
      viewBox="0 0 150 150"
    >
      <circle
        class="ef-loading-circle__inner"
        cx="75"
        cy="75"
        r="60"
      />
    </svg>
  </transition>
</template>

<style lang="scss">
@import './style.scss';
</style>

<script>
import props from './prop-types'

export default {
  props,
  computed: {
    classes() {
      return {
        'ef-loading-circle': true,
        'ef-loading-circle--google-type': this.type === 'google'
      }
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0

      return el
    },
    enter /* istanbul ignore next */(el, done) {
      Velocity(el, { opacity: 0.75 }, { duration: 300 })
      Velocity(el, { opacity: 1 }, { complete: done })
    },
    leave /* istanbul ignore next */(el, done) {
      Velocity(
        el,
        {
          opacity: 0
        },
        { complete: done }
      )
    }
  }
}
</script>
