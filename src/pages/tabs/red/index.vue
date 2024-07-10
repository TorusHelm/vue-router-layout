<template>
  <div class="set set_horizontal">
    <RouterLink to="/tabs/red/orange">
      <btn>To orange</btn>
    </RouterLink>
    <RouterLink to="/tabs/red/tomato">
      <btn>To tomato</btn>
    </RouterLink>
  </div>
</template>

<script>
import Btn from "@/components/btn.vue";

export default {
  name: "red",
  components: {Btn}
}
</script>

<style scoped lang="scss">
.red {
  background-color: red;
}
</style>
