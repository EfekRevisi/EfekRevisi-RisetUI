<template>
  <div
    :class="classes"
    :style="styles"
  >
    <transition-group
      name="blur"
      tag="div"
      class="ef-image__container"
    >
      <canvas
        v-show="currentSrc !== src"
        key="canvas"
        ref="placeholder"
        class="ef-image__blur blur-transition"
      />
      <img
        v-show="currentSrc === src"
        key="image"
        :src="src"
        class="ef-image__content blur-transition"
      >
      <div
        v-show="currentSrc !== src"
        key="loading"
        class="ef-image__loading blur-transition"
      >
        <ui-loading
          key="loading"
        />
      </div>
    </transition-group>
  </div>
</template>

<style lang="scss">
@import '@/style/scss/import.scss';
@import 'style.scss';
</style>

<script>
import props from './prop-types'
import ArrayMixin from '@/mixins/array.mixins'
import StringMixin from '@/mixins/string.mixins'

export default {
  mixins: [ArrayMixin, StringMixin],
  props,
  data: function() {
    return {
      currentSrc: null
    }
  },
  computed: {
    classes() {
      return {
        'ef-image': true,
        'ef-image--gradient': this.gradient,
        'ef-image--contain': this.contain,
        'ef-image--rounded': this.rounded
      }
    },
    styles() {
      const generateStyle = (...args) => {
        return {
          height: args[0]
            ? `${this.isNumber(args[0]) ? `${args[0]}px` : args[0]}`
            : 'initial',
          width: args[1]
            ? `${this.isNumber(args[1]) ? `${args[1]}px` : args[1]}`
            : 'initial'
        }
      }

      return this.checkKeyIsNotNull(generateStyle(this.height, this.width))
    }
  },
  mounted: function() /* istanbul ignore next */ {
    var loResImg, hiResImg, context
    loResImg = new Image()
    hiResImg = new Image()
    context = this.$refs.placeholder.getContext('2d')
    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight

    loResImg.onload = function() {
      context.drawImage(loResImg, 0, 0, window.innerWidth, window.innerHeight)
      if (this.currentSrc !== this.src) {
        this.currentSrc = this.placeholder
      }
    }.bind(this)

    hiResImg.onload = function() {
      this.currentSrc = this.src
    }.bind(this)

    loResImg.src = this.placeholder
    hiResImg.src = this.src
  }
}
</script>
