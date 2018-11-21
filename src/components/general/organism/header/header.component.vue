<template>
  <div class="ef-header relative z-index-100 mb-50">
    <div class="ef-header__content flex">
      <div class="ef-header__title">
        <h1>Cari Restoran</h1>
        <p>Jangan lupa makan hari ini, fareel</p>
      </div>
      <img
        :src="photo"
        class="ef-header__avatar"
      >
    </div>
    <ui-atomic-textfield
      :border="false"
      name="search"
      icon="near_me"
      shadow
      reverse
      placeholder="Enter keywords.."
    />
  </div>
</template>

<style lang="scss">
@import '@/style/scss/import.scss';
@import './style.scss';
</style>

<script>
import props from './prop-types'
export default {
  props
}
</script>
