<script lang="ts" setup>
import type {FilterValue} from '@/type';
defineProps<{
    value: FilterValue,
    options: Array<FilterValue>,
    label: string
}>();
</script>
<template>
    <select class="border px-2 py-2 rounded bg-secondary-50" :placeholder="label" :value="value.value">
        <option v-for="data in options" :value="data.value">{{ data.label }}</option>
    </select>
</template>


<style scoped>

</style>