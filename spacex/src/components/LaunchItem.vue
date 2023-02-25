<script setup lang="ts">
import {RouterLink} from 'vue-router';
//
import formatDate from '@/helpers/dateFormat';

defineProps<{
    flight_number: number,
    name: string,
    date_local: string,
    success: boolean | null,
    id: string
}>();
</script>
<template>
    <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-9">
                <h4>Mission: <span :class="{'text-success': success, 'text-danger': !success}">{{ name }}</span></h4>
                <p>Date: {{ formatDate(date_local) }}</p>
            </div>
            <div class="col-md-3">
                <RouterLink :to="`/launch/${id}`" class="btn btn-secondary">Launch Detail</RouterLink>
            </div>
        </div>
    </div>
</template>