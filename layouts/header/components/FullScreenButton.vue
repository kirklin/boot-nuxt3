<script setup lang="ts">
import { ActionIcon } from "~/components/ActionIcon";

const { toggle: toggleFullScreen } = useFullscreen();
</script>

<template>
  <ActionIcon tooltip-text="toggleFullScreen" icon="i-tabler-maximize" @click="toggleFullScreen" />
</template>

<style scoped>

</style>
