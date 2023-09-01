<script setup lang="ts">
const color = useColorMode();

useHead({
  meta: [{
    id: "theme-color",
    name: "theme-color",
    content: () => color.value === "dark" ? "#222222" : "#ffffff",
  }],
});

function toggleDark() {
  color.preference = color.value === "dark" ? "light" : "dark";
}
</script>

<template>
  <div class="cursor-pointer !outline-none" @click="toggleDark">
    <div class="i-carbon-sun dark:i-carbon-moon" />
  </div>
</template>
