<script lang="ts" setup>
import type {RowType} from '@/type';
// components
import TableHead from '@/components/data-table/TableHead.vue';
import TableRow from '@/components/data-table/TableRow.vue';
defineProps<{
    tableHeaders: Array<string>,
    data: Array<RowType>
}>();
</script>
<template>
    <table class="w-full">
        <thead class="bg-gray-50">
            <tr>
                <TableHead v-for="title in tableHeaders" :title="title" />
            </tr>
        </thead>
        <tbody class="bg-body">
            <TableRow v-for="row in data" :row="row" />
        </tbody>
    </table>
</template>