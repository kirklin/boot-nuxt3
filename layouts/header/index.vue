<script setup lang="ts">
import CollapseButton from "~/layouts/header/components/CollapseButton.vue";
import FullScreenButton from "~/layouts/header/components/FullScreenButton.vue";
import SettingButton from "~/layouts/setting/index.vue";

defineOptions({
  name: "HeaderLayout",
});
</script>

<template>
  <div class="flex h-16 items-center <lg:justify-end">
    <div class="md:block px-4">
      <CollapseButton />
    </div>
    <div class="flex">
      <NSpace>
        <div class="flex items-center justify-center">
          <NSpace>
            <FullScreenButton />

            <SettingButton />
          </NSpace>
        </div>
      </NSpace>
    </div>
  </div>
</template>

<style scoped>

</style>
