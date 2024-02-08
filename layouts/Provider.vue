<script lang="ts" setup>
import {
  NConfigProvider,
  NDialogProvider,
  NGlobalStyle,
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
} from "naive-ui";
import GlobalListener from "~/layouts/GlobalListener.vue";
</script>

<template>
  <NConfigProvider>
    <NLoadingBarProvider :container-style="{ height: '3px' }">
      <NMessageProvider>
        <NNotificationProvider>
          <NDialogProvider>
            <GlobalListener>
              <slot />
            </GlobalListener>
          </NDialogProvider>
        </NNotificationProvider>
      </NMessageProvider>
    </NLoadingBarProvider>
    <NGlobalStyle />
  </NConfigProvider>
</template>
