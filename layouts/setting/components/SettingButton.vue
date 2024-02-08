<script setup lang="ts">
import { useHeaderSetting } from "~/composables";
import { ActionIcon } from "~/components/ActionIcon";

const { toggleShouldShowSettingDrawer } = useHeaderSetting();
</script>

<template>
  <ActionIcon
    tooltip-text="Open Setting Drawer" icon="i-tabler-settings"
    @click="toggleShouldShowSettingDrawer"
  />
</template>

<style scoped>

</style>
