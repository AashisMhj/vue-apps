<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>
<template>
    <th class="p-8 text-xs text-gray-500 bg-primary-50 cursor-pointer">
        {{ title }}
    </th>
</template>