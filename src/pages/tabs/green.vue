<template>
  <div class="box green">
    <heading>Green page</heading>
  </div>
</template>

<script>
import Heading from "@/components/title.vue";

export default {
  name: "green",
  components: {Heading}
}
</script>

<style scoped lang="scss">
.green {
  background-color: green;
}

.heading {
   color: coral;
}
</style>
