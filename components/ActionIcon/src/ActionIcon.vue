<script setup lang="ts">
import ToolTipper from "./ToolTipper.vue";
import { CAIcon } from "~/components/Icon";

withDefaults(
  defineProps<{ tooltipText?: string;icon: string }>(),
  {
    tooltipText: "icon Button",
    icon: "i-mdi-alert",
  },
);
</script>

<template>
  <ClientOnly>
    <ToolTipper :tooltip-text="tooltipText">
      <NEl
        tag="button" type="button" class="bg-[var(--action-color)] text-[var(--text-color-base)] w-8 h-8 text-base flex items-center justify-center rounded-lg p-2
      hover:bg-[var(--hover-color)]"
      >
        <span class="sr-only">{{ tooltipText }}</span>
        <CAIcon :icon="icon" :size="16" />
      </NEl>
    </ToolTipper>
  </ClientOnly>
</template>

<style scoped>

</style>
