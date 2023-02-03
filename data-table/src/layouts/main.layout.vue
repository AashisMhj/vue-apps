<script lang="ts" setup>
import NavBar from '@/components/common/NavBar.vue';
</script>
<template>
    <NavBar />
    <main>
        <slot>No Children Passed</slot>
    </main>
</template>