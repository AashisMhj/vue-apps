<script setup lang="ts">
import ButtonsLayout from '@/layout/buttons.layout.vue';
const props = defineProps({
    data: {type: Object, required: true},
    prevStep: {type: Function, required: true},
    nextStep: {type: Function, required: true}
})
</script>
<template>
    <v-form>
        <v-text-field v-model="data.occupation" label="Occupation" placeholder="Teacher, Cop, Murder" type="text"></v-text-field>
        <v-textarea label="Bio" v-model="data.bio"></v-textarea>
        <ButtonsLayout>
            <template v-slot:left>
                <v-btn block prepend-icon="mdi-backspace" color="secondary" size="large" variant="elevated" @click="prevStep">back</v-btn>
            </template>
            <template v-slot:right>
                <v-btn block append-icon="mdi-backspace-reverse" color="primary" size="large" variant="elevated" @click="nextStep">Next</v-btn>
            </template>
        </ButtonsLayout>
    </v-form>
</template>