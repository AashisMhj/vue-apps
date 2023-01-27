<script setup lang="ts">
import ButtonsLayout from '@/layout/buttons.layout.vue'
defineProps({
    formData: {type: Object, required: true},
    prevStep: {type: Function, required: true},
    nextStep: {type: Function, required: true}
})
</script>
<template>
    <v-table v-for="data in formData">
        <thead>
            <tr>
                <th>
                    {{ data.label }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(value, key) in data.data">
                <td>{{ key }}</td>
                <td>{{ value }}</td>
            </tr>
        </tbody>
    </v-table>
    <ButtonsLayout>
        <template v-slot:left>
            <v-btn block prepend-icon="mdi-backspace" color="secondary" size="large" variant="elevated" @click="prevStep">back</v-btn>
        </template>
        <template v-slot:right>
            <v-btn block append-icon="mdi-check-decagram" color="primary" size="large" variant="elevated" @click="nextStep">Confirm</v-btn>
        </template>
    </ButtonsLayout>

</template>