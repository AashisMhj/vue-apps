<script lang="ts" setup>
defineProps<{
    data: string | number
}>();
</script>
<template>
    <td class="px-6 py-4 text-sm text-center text-gray-500">
        {{ data }}
    </td>
</template>