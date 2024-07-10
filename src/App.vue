<template>
  <div id="app">
    <layout />
  </div>
</template>

<style lang="scss">
html {
  font-family: sans-serif;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 12px;
}

.box {
  height: 200px;
  width: 100%;
  border-radius: 12px;
  padding: 12px 24px;
}

.set {
  display: grid;
  gap: 20px;

  &_horizontal {
    display: flex;
  }
}
</style>
<script setup lang="ts">
import Layout from "@/layouts/index.vue";
</script>
