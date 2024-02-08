<script setup lang="ts">
import { appName } from "~/constants";
import "~/assets/styles/index.css";

useHead({
  title: appName,
});
</script>

<template>
  <VitePwaManifest />
  <!--  TODO: fix ssr -->
  <ClientOnly>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ClientOnly>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
