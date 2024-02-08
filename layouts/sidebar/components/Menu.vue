<script setup lang="ts">
import { type RouteRecordNormalized, useRoute, useRouter } from "vue-router";
import { type MenuInst, NMenu } from "naive-ui";
import type { MenuMixedOption } from "naive-ui/es/menu/src/interface";
import getItems from "~/layouts/sidebar/components/items";

defineOptions({
  name: "MenuLayout",
});
const props = withDefaults(
  defineProps<{
    mode?: "vertical" | "horizontal";
    collapsed?: boolean;
  }>(),
  { mode: "vertical", collapsed: false },
);
const { mode, collapsed } = toRefs(props);

const selectedKey = ref();
const router = useRouter();
const route = useRoute();
const menuOptions = computed<MenuMixedOption[]>(() => getItems(mode.value, collapsed.value));

const collapsedWidth = computed<number>(() => collapsed ? 64 : 300);
const menu = ref<MenuInst | null>(null);
function setMenuKey(matched: RouteRecordNormalized[]) {
  for (const match of matched) {
    if (match.name && typeof match.name === "string") {
      selectedKey.value = match.name?.toString() || null;
      if (selectedKey.value) {
        menu.value?.showOption(selectedKey.value);
      }
    }
  }
}

onBeforeMount(() => {
  setMenuKey(route.matched);

  router.afterEach((route) => {
    if (route?.matched?.length) {
      setMenuKey(route.matched);
    }
  });
});
</script>

<template>
  <ClientOnly>
    <div :class="collapsed ? 'w-16' : 'w-75'" class="transition-width h-full shrink-0 flex-col overflow-hidden duration-75">
      <NScrollbar>
        <NMenu
          ref="menu"
          v-model:value="selectedKey"
          :options="menuOptions"
          :collapsed="collapsed"
          :collapsed-width="collapsedWidth"
          :mode="mode"
        />
      </NScrollbar>
    </div>
  </ClientOnly>
</template>

<style scoped>
</style>
