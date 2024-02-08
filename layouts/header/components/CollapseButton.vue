<script setup lang="ts">
import { useMenuSetting } from "~/composables/setting/useMenuSetting";
import { ActionIcon } from "~/components/ActionIcon";

const { toggleCollapsed, getCollapsed } = useMenuSetting();
</script>

<template>
  <ActionIcon tooltip-text="Collapse" :icon="getCollapsed ? 'lucide:panel-right-close' : 'lucide:panel-left-close'" @click="toggleCollapsed()" />
</template>
