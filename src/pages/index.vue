<template>
  <div class="pages-list">
    <RouterLink to="/page">
      <btn>to page</btn>
    </RouterLink>
    <RouterLink to="/tabs">
      <btn>to tabs</btn>
    </RouterLink>
  </div>
</template>

<script>
import Btn from "@/components/btn.vue";

export default {
  name: "index",
  components: {Btn}
}
</script>

<style lang="scss">
.pages-list {
  display: flex;
  gap: 12px;
}
</style>
