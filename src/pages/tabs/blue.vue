<template>
  <div class="box blue">
    <heading>Blue page</heading>
  </div>
</template>

<script>
import Heading from "@/components/title.vue";

export default {
  name: "blue",
  components: {Heading}
}
</script>

<style scoped lang="scss">
.blue {
  background-color: steelblue;
}

.heading {
  color: greenyellow;
}
</style>
