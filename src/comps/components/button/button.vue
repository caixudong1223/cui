<template>
  <button
    class="c_btn"
    @click="handleClick"
    :style="{backgroundColor: bgColor, color: color, 'border-color':borderColor}"
    :class="[
        'xm__btn--'+type,
        {'is-plain': plain, 'is-round': round, 'is-long': long, 'xm__btn--block': block, 'no-radius': noRadius},
        iconClass
        ]"
  >
      
  </button>
</template>

<script>
export default {

}
</script>

<style>

</style>