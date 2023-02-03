<script lang="ts" setup>
import type {RowType} from '@/type/index';
import TableData from '@/components/data-table/TableData.vue';
defineProps<{
    row: RowType
}>()

</script>
<template>
    <tr class="whitespace-nowrap">
        <TableData v-for="value in row" :data="value" />
    </tr>
</template>