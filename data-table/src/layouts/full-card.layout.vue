<script setup lang="ts">
defineProps<{
    title: string
}>();
</script>
<template>
    <div class="my-10 shadow relative p-10 border-1 rounded border-solid bg-secondary-50 ">
        <h3 class="absolute h-3 -top-3 px-10">{{ title }}</h3>
        <slot>No Child</slot>
    </div>
</template>