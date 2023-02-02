<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import type { Ref, ComputedRef } from 'vue';
import type { PokemonIcon } from '@/types/index';
import Network from '@/services/network';
import { getId } from '@/helper/index';
import ListTile from '@/components/ListTile.vue';
const pokemonList: Ref<PokemonIcon[]> = ref([]);
const page: Ref<number> = ref(1);
const loading:Ref<Boolean> = ref(false);

const getComputedData: ComputedRef<PokemonIcon[]> = computed((): PokemonIcon[] => {
    return pokemonList.value.map((item: PokemonIcon) => {
        return {
            name: item.name,
            url: item.url,
            id: getId(item.url)
        }
    });
});
function getData() {
    loading.value = true;
    Network.getPokemonList(page.value)
        .then((data) => {
            pokemonList.value = data.results || [];
            loading.value = false;
        })
}
function nextPage() {
    page.value++;
}
function prevPage() {
    page.value--;
}

watch(page, getData);

getData();
</script>
<template>
    <div class="container" v-if="!loading">
        <h1>PokeDex</h1>
        <div class="pagination">
            <button @click="prevPage" v-if="page !== 1">Prev</button>
            <button @click="nextPage">Next</button>
        </div>
        <div class="poke-container">
            <div class="pokemon" v-for="pokemon in getComputedData">
                <ListTile :data="pokemon" />
            </div>
        </div>
        <div class="pagination">
            <button @click="prevPage" v-if="page !== 1">Prev</button>
            <button @click="nextPage">Next</button>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
}

.poke-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: space-between;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
}

.pokemon {
    background-color: #eee;
    border-radius: 10px;
    box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
    margin: 10px;
    padding: 20px;
    text-align: center;
}

.pagination button {
    margin: 0 10px;
    padding: 5px 20px;
    cursor: pointer;
    font-weight: bold;
}
</style>