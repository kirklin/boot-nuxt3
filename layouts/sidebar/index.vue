<script setup lang="ts">
import SidebarHeader from "./components/SidebarHeader.vue";
import MenuLayout from "./components/Menu.vue";
import SidebarFooter from "./components/SidebarFooter.vue";

defineOptions({
  name: "SidebarLayout",
});

const isCollapse = useMenuSetting().getCollapsed;
const sidebar = ref(null);
</script>

<template>
  <aside
    id="sidebar"
    class="sidebar flex flex-col"
    :class="{ collapsed: isCollapse, opened: !isCollapse }"
  >
    <div ref="sidebar" class="sidebar-wrap grow flex flex-col">
      <SidebarHeader :collapsed="isCollapse" />
      <NScrollbar>
        <MenuLayout :collapsed="isCollapse" />
      </NScrollbar>
      <SidebarFooter :collapsed="isCollapse" />
    </div>
  </aside>
</template>

<style scoped>

</style>
