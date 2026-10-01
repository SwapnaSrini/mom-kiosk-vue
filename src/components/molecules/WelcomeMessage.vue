<script setup lang="ts">
defineProps<{ name: string }>()
</script>
<template>
  <div>
    <h2 className="welcomeback-header">Welcome back, {{ name }}!</h2>
    <p>Give away baby items, connect with local moms, and plan play dates. #momtribe</p>
  </div>
</template>

<style scoped></style>
