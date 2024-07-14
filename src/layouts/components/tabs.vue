<template>
  <div class="container set">
    <div>
      <btn @click="handleBack">Go back to index</btn>
    </div>
    <div class="tabs">
      <RouterLink
          v-for="(tab, index) in tabs"
          :key="index"
          :to="tab.path"
          class="tabs__item"
          active-class="is-active"
      >
        <btn>{{ tab.title }}</btn>
      </RouterLink>
    </div>
    <div class="tabs__content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Btn from "@/components/btn.vue";

export default {
  name: "LayoutTabs",
  components: {Btn},
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleBack() {
      this.$router.push({ path: '/' });
    },
  }
}
</script>

<style lang="scss">
.tabs {
  display: flex;
  gap: 12px;

  &__item {
    .btn {
      background-color: transparent;
      border-color: transparent;
      border-radius: 0;
      border-bottom-color: lightsteelblue;
    }

    &.is-active {
      .btn {
        border-bottom-color: coral;
      }
    }
  }
}
</style>
