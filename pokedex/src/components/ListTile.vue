<script lang="ts" setup>
import { computed } from 'vue';
import type { PokemonIcon } from '@/types';
import { RouterLink } from 'vue-router';
import { numberToHashNumber } from '@/helper';
const props = defineProps<{
    data: PokemonIcon
}>()
const getHashNumber = computed(() => numberToHashNumber(props.data.id))
</script>
<template>
    <div class="img-container">
        <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`" />

    </div>
    <div class="info">
        <span class="number">{{ getHashNumber }}</span>
        <h3>{{ data.name }}</h3>
        <router-link :to="`info/${data.id}`">
            <button class="btn">
                Learn more
            </button>
        </router-link>
    </div>
</template>

<style>
.img-container {
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    width: 120px;
    height: 120px;
    text-align: center;
}

.img-container img {
    max-width: 90%;
    margin-top: 20px;
}

.info {
    margin-top: 20px;
}

.btn {
    padding: 10px;
    text-decoration: none;
    cursor: pointer;
}
</style>