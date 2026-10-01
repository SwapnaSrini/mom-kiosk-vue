<script setup lang="ts">
import AppHeader from '@/components/organisms/AppHeader.vue'
import AppTabs from '@/components/organisms/AppTabs.vue'
import WelcomeMessage from '@/components/molecules/WelcomeMessage.vue'
</script>

<template>
  <AppHeader />
  <WelcomeMessage name="Swapna" />
  <AppTabs />
  <RouterView />
</template>

<style scoped></style>
