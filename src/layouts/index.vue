<template>
  <component :is="layoutComponent" :tabs="layoutTabs" :parentRoute="parentRoute" />
</template>

<script>
import LayoutDefault from "./components/default.vue";
import LayoutExtra from "./components/extra.vue";
import LayoutTabs from "./components/tabs.vue";

export default {
  name: "Layout",
  components: {
    LayoutDefault,
    LayoutExtra,
    LayoutTabs,
  },
  computed: {
    routeHaveLayoutType() {
      return this.$route.meta && 'layout' in this.$route.meta;
    },
    parentRouteHaveLayoutType() {
      return this.parentRoute && this.parentRoute.meta && 'layout' in this.parentRoute.meta;
    },
    routeHaveLayoutTabs() {
      return this.$route.meta && 'layoutTabs' in this.$route.meta;
    },
    parentRouteHaveLayoutTabs() {
      return this.parentRoute && this.parentRoute.meta && 'layoutTabs' in this.parentRoute.meta;
    },
    layoutType() {
      if (this.routeHaveLayoutType) {
        return this.$route.meta.layout;
      }
      if (this.parentRouteHaveLayoutType) {
        return this.parentRoute.meta.layout;
      }
      return "default";
    },
    layoutComponent() {
      return `layout-${this.layoutType}`;
    },
    layoutTabs() {
      if (this.layoutType === 'tabs') {
        if (this.routeHaveLayoutTabs) {
          return this.$route.meta.layoutTabs;
        }
        if (this.parentRouteHaveLayoutTabs) {
          return this.parentRoute.meta.layoutTabs;
        }
        return [];
      }
      return [];
    },
    parentRoute() {
      const currentInMatched = this.$route.matched.find(i => i.regex.test(this.$route.path));
      return currentInMatched && currentInMatched.parent;
    }
  },
}
</script>
