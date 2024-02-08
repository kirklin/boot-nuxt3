<script lang="ts" setup>
import { NScrollbar } from "naive-ui";
</script>

<template>
  <div id="main" class="main">
    <NScrollbar ref="scrollbar">
      <slot />
    </NScrollbar>
  </div>
</template>
