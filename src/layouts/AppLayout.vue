<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "AppLayout",
  setup() {
    const route = useRoute();

    const layout = computed(() => {
      const layout = route?.meta?.layout;
      return layout ? `${layout}Layout` : "div";
    });

    return {
      layout,
    };
  },
});
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
