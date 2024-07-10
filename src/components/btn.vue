<template>
<button class="btn" @click="$emit('click')">
  <slot />
</button>
</template>

<script>
export default {
  name: "btn"
}
</script>

<style lang="scss">
.btn {
  -webkit-appearance: none;
  padding: 8px 12px;
  border-radius: 10px;
  background-color: lightsteelblue;
  color: black;
  border: 2px solid steelblue;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  font-family: sans-serif;
}
</style>
