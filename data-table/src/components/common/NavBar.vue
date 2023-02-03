<script lang="ts" setup>
import HamBurgerIcon from '@/assets/icons/Burger.vue';
</script>
<template>
    <nav class="bg-primary-50 border-gray-200 px-2 py-2.5 rounded w-full" >
        <div class="container flex flew-wrap items-center justify-between mx-auto">
            <button class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 cursor-pointer">
                <span class="sr-only">Open Sidebar</span>
                <HamBurgerIcon />
            </button>
        </div>
    </nav>
</template>