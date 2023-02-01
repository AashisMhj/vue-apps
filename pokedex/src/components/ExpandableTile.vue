<script lang="ts" setup>
import type {Ref} from 'vue';
import {ref} from 'vue';
const is_expanded:Ref<Boolean> = ref(false);
defineProps<{
    title: string,
    items: Array<string>
}>();
</script>
<template>
    <div @click="is_expanded = !is_expanded">
        <div>{{ title }}</div>
        <ul>
            <li v-for="item in items">{{ item }}</li> 
        </ul>
    </div>
</template>

<style>
</style>