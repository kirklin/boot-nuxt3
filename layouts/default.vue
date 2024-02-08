<script setup lang="ts">
import Provider from "~/layouts/Provider.vue";
import MainContainer from "~/layouts/MainContainer.vue";
</script>

<template>
  <Provider>
    <main class="layout flex font-chinese">
      <MainContainer class="grow">
        <slot />
      </MainContainer>
    </main>
  </Provider>
</template>

<style scoped>
.layout {
  width: 100vw;
  height: 100vh;
  height: 100svh;
  overflow: hidden;
  perspective: 1000px;
}
</style>
