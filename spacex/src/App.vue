<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <img src="/spacex-logo.png" alt="spacex-logo" :style="{width: 300, display: 'block', margin: 'auto'}">
  </div>
  <RouterView />
</template>
