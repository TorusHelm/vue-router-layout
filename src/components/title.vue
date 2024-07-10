<template>
<h1 class="heading">
  <slot></slot>
</h1>
</template>

<script>
export default {
  name: "heading"
}
</script>

<style lang="scss">
.heading {
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
}
</style>
