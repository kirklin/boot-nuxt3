<script setup lang="ts">
</script>

<template>
  <div>
    Hello
    <Suspense>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>
