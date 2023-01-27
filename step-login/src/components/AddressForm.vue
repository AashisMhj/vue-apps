<script lang="ts" setup>
import ButtonsLayout from '@/layout/buttons.layout.vue';
import Countries from '@/consts/countries';
const items = Countries.map((item) => item.name);
defineProps({
    data: {type: Object, required: true},
    prevStep: {type: Function, required: true},
    nextStep: {type: Function, required: true}
});
</script>
<template>
    <v-form>
        <v-select label="Countries" :items="items" v-model="data.country"></v-select>
        <v-text-field v-model="data.state" label="State" placeholder="New York, London, Berlin" type="text"></v-text-field>
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