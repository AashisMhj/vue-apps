<script lang="ts" setup>
import gql from 'graphql-tag';
import {useQuery} from '@vue/apollo-composable';
//
import LaunchItem from '@/components/LaunchItem.vue';
import MissionKey from '@/components/MissonKey.vue';
//

const LAUNCHES_QUERY = gql`
query LAUNCHES{
    launches {
        flight_number
        name
        date_local
        success
        id
    }
}
`;
const {result, loading, error} = useQuery(LAUNCHES_QUERY);
</script>
<template>
    <MissionKey />
    <h4 v-if="loading">Loading ...</h4>
    <h4 v-else-if="error">Error</h4>
    <LaunchItem v-else v-for="launch in result.launches" :id="launch.id" :flight_number="launch.flight_number" :name="launch.name" :date_local="launch.date_local" :success="launch.success" />
</template>