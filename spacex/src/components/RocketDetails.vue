<script setup lang="ts">
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';

const props = defineProps<{
    id: string
}>();

const ROCKET_QUERY = gql`
query RocketDetail($id: String!){
    rocket(id: $id){
        id
        name
        type
    }
}`;



const {result, loading, error} = useQuery(ROCKET_QUERY, {id: props.id});
</script>

<template>
    <h4 v-if="loading" class="text-info">Loading</h4>
    <h4 v-else-if="error" class="text-danger">Error</h4>
    <ul v-else>
        <li class="list-group-item">Rocket Id: {{ result.rocket.id }}</li>
        <li class="list-group-item"> Rocket Name: {{ result.rocket.name }}</li>
        <li class="list-group-item">Rocket Type: {{  result.rocket.type }}</li>
    </ul>
</template>