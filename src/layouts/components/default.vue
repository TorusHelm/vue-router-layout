<template>
  <div class="container">
    <div class="set">
      <div>
        <btn @click="handleBack">Go back to index</btn>
      </div>
      <heading v-if="$route.meta && 'title' in $route.meta">{{ $route.meta.title }}</heading>
      <div>
        <hr>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/btn.vue";
import Heading from "@/components/title.vue";

export default {
  name: "LayoutDefault",
  components: {Heading, Btn},
  methods: {
    handleBack() {
      if (this.$route.path !== "/") {
        this.$router.push({ path: "/" });
      }
    },
  },
}
</script>

<style lang="scss">
.content {
  margin-top: 12px;
}
</style>
