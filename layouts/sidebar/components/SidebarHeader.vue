<script lang="ts" setup>
defineOptions({
  name: "SidebarHeader",
});

const props = defineProps<{
  collapsed?: boolean;
}>();
const { collapsed: _ } = toRefs(props);
</script>

<template>
  <div class="my-auto flex h-16" />
</template>

<style scoped>
</style>
