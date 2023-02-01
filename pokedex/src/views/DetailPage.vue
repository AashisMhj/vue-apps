<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Ref } from 'vue';
import Network from '@/services/network';
import {useRoute} from 'vue-router'
import TypeMapping from '@/consts/type-mapping.js';
import ExpandableTile from '@/components/ExpandableTile.vue';
import type { PokemonDetail} from '@/types/index';
import {default_sprite} from '@/consts/default-values'

// ref values
const currentTab:Ref<number> = ref(0);
const pokemonData: Ref<PokemonDetail> = ref({
    id: 0,
    name: '-',
    is_default: false,
    location_area_encounters: '-',
    order: 0,
    weight: 0,
    base_experience: 0,
    height: 0,
    abilities: [],
    forms: [],
    game_indices: [],
    held_items: [],
    moves: [],
    past_type: [],
    species: {
        name: '-',
        url: '-'
    },
    sprites: default_sprite,
    stats: [],
    types: []
});
const pokemonEvolutions = ref();
const currentImageRef = ref(null);
const currentImage:Ref<string> = ref('');
// const values
const {params: {id}} = useRoute();
// this.candidate.skills = (<string>this.candidate.skills).split(', ');
const pokemonId = Array.isArray(id) ? id.join() : id;
//
function getSprites(obj:object|Array<any>):Array<String>{
    let allSprites:String[] = [];
    const values = Object.values(obj);
    values.forEach((sprite)=>{
        if(typeof sprite === 'string'){
            allSprites.push(sprite);
        }
        else if(typeof sprite === 'object' ){
            if(sprite){
                getSprites(sprite);
                allSprites = allSprites.concat(getSprites(sprite));
            }
        }
    });
    return allSprites;
}
function changeCurrentImage(image:string){
    currentImage.value = image;
    // TODO scroll to top
}
//  get all images from spite
const getAllSprites = computed(()=>{
    return getSprites(pokemonData.value.sprites);
})
Network.getPokemonById(parseInt(pokemonId))
    .then((data) => {
        console.log(data);
        pokemonData.value = data;
        currentImage.value = pokemonData?.value?.sprites?.front_default || 'default.png'
    });
Network.getPokemonEvolutions(parseInt(pokemonId))
    .then((data)=>{
        console.log(data);
    })
</script>
<template>
    <div class="container">
            <div class="main-image">
                <img :src="currentImage" ref="currentImageRef">
            </div>
            <div class="type">
                <span class="type-icon" v-for="pokemonType in pokemonData.types">
                    <img :src="`/images/${TypeMapping[pokemonType.type.name]}`" alt="">
                </span>
            </div>
            <div class="tab-container">
                <div class="tab-buttons">
                    <button @click="currentTab = 0" :class="currentTab === 0 ? 'active' : null " >Images</button>
                    <button @click="currentTab = 1" :class="currentTab === 1 ? 'active' : null ">Info</button>
                    <button @click="currentTab = 2" :class="currentTab === 2 ? 'active' : null">Extra</button>
                    <button @click="currentTab = 3" :class="currentTab === 3 ? 'active' : null">Evolution</button>
                </div>
                <div v-if="currentTab === 0">
                    <span class="spite" v-for="spite in getAllSprites">
                        <img @click="changeCurrentImage(spite)" class="spite-image" v-if="typeof spite === 'string' " :src="spite || 'default.png'" />
                    </span>
                </div>
                <div v-else-if="currentTab === 1">
                    <table>
                        <tr>
                            <td>Name</td>
                            <td>{{ pokemonData.name }}</td>
                        </tr>
                        <tr>
                            <td>Base Experience</td>
                            <td>{{  pokemonData.base_experience }}</td>
                        </tr>
                        <tr>
                            <td>Height</td>
                            <td>{{ pokemonData.height }}</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>{{  pokemonData.weight }}</td>
                        </tr>
                    </table>
                </div>
                <div v-else-if="currentTab === 2">
                    <ExpandableTile title="Abilities" :items="pokemonData.abilities.map((item) => item.ability.name)" />
                    <ExpandableTile title="Moves" :items="pokemonData.moves.map((item) => item.move.name)" />
                </div>
                <div v-else-if="currentTab === 3">
                    Evolutions
                </div>
            </div>
        </div>
</template>

<style scoped>
.container{
    display: flex;
    align-items: center;
    flex-direction: column;
}
.left-side{
    border-right: 5px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll ;
    height: 100vh;
}

.main-image img {
    background-image: url(@/assets/images/pokeball-pokemon.svg);
    box-shadow: inset 0 0 1000px 2px #282a2d;
    background-size: cover;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    border: 4px solid black;
}
/*  */
.type-icon img{
    padding: 10px;
    height: 70px;
    width: 70px;
}
/*  */
.tab-container{
    background-color: aliceblue;
    padding: 10px;
    width: 100%;
}
.tab-buttons{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.tab-buttons button{
    border: none;
    padding: 10px;
    cursor: pointer;
    width: 100%;
}
.tab-buttons .active{
    background-color: aquamarine;
}
.spite{
    cursor: pointer;
}
.spite-image{
    width: 100px;
    height: 100px;
}
</style>