<template>
  <div class="container">
    <div class="set">
      <div>
        <btn @click="handleBack">Go back to index</btn>
      </div>
      <heading>Extra layout</heading>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/btn.vue";
import Heading from "@/components/title.vue";

export default {
  name: "LayoutExtra",
  components: {Heading, Btn},
  methods: {
    handleBack() {
      this.$router.push({ path: "/tabs" });
    },
  },
}
</script>
