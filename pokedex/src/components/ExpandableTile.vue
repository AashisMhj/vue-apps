<script lang="ts" setup>
import type {Ref} from 'vue';
import {ref, computed} from 'vue';
const is_expanded:Ref<Boolean> = ref(false);
defineProps<{
    title: string,
    items: Array<string>
}>();
const currentArrow = computed(()=> is_expanded.value ? '\&\#8595': '\&\#8594')
</script>
<template>
    <div class="box" @click="is_expanded = !is_expanded">
        <div class="title">{{ title }} 
            <span v-html="currentArrow"></span>
        </div>
        <div :class="`items-box ${is_expanded ? '' : 'hide'}`" >
            <span class="items" v-for="item in items">{{ item }}</span> 
        </div>
    </div>
</template>

<style scoped>
.box{
    padding: 10px;
    margin: 10px;
}
.title{
    font-weight: bold;
    border-bottom: 2px solid black;
    cursor: pointer;
    padding: 10px 5px;
}
.items-box{
    display: flex;
    flex-wrap: wrap;
}
.hide{
    visibility: hidden;
    display: none;
}
.items{
    padding: 10px;
    background-color: lightgray;
    margin: 10px;
    border-radius: 40px;
}
</style>