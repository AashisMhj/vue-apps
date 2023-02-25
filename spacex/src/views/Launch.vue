<script setup lang="ts">
import gql from 'graphql-tag';
import {useQuery} from '@vue/apollo-composable';
import { RouterLink, useRoute } from 'vue-router';

import RocketDetails from '@/components/RocketDetails.vue';
import formatDate from '@/helpers/dateFormat';


const LAUNCH_QUERY = gql`
query LaunchQuery($id: String!){
    launch(id: $id){
        flight_number
        name
        date_local
        success
        rocket
    }
}`;
const route = useRoute();

const {result, loading, error} = useQuery(LAUNCH_QUERY, {
    id: route.params.id
});
</script>
<template>
    <h4 v-if="loading">Loading ...</h4>
    <h4 v-else-if="error"> Error</h4>
    <div v-else>
        <h1 class="display-4 my-3">
            <span class="text-dark">Mission: </span> {{ result.launch.mission_name }}
        </h1>
        <h4 class="mb-3">Launch Details</h4>
        <ul class="list-group">
            <li class="list-group-item">
                Flight Number: {{ result.launch.flight_number }}
            </li>
            <li class="list-group-item">
                Launch Year: {{ formatDate(result.launch.date_local) }}
            </li>
            <li class="list-group-item">
                Launch Success full : <span :class="{'text-info': result.launch.success, 'text-danger': !result.launch.success}">
                    {{ result.launch.success ? "YES" : "NO" }}
                </span>
            </li>
        </ul>
        <h4>Rocket Details</h4>
        <RocketDetails :id="result.launch.rocket" />
        <hr />
        <RouterLink to="/" class="btn btn-secondary">Back</RouterLink>
    </div>
</template>