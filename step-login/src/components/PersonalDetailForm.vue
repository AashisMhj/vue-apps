<script setup lang="ts">
import ButtonsLayout from '@/layout/buttons.layout.vue';
const props = defineProps({
    data: {type:  Object, required: true},
    nextStep: {type: Function, required: true}
});
</script>
<template>
    <v-form>
        <v-text-field v-model="data.firstName" label="First Name" placeholder="John" type="text" ></v-text-field>
        <v-text-field v-model="data.lastName" label="Last Name" placeholder="Doe" type="text" ></v-text-field>
        <v-text-field v-model="data.email" label="Email" type="email" placeholder="email@email.com" ></v-text-field>
        <v-container fluid>
            <v-radio-group inline v-model="data.gender">
                <template v-slot:label>
                    <div>Gender</div>
                </template>
                <v-radio value="Male">
                    <template v-slot:label>
                        <div>Male</div>
                    </template>
                </v-radio>
                <v-radio value="Female">
                    <template v-slot:label>
                        <div>Female</div>
                    </template>
                </v-radio>
            </v-radio-group>
        </v-container>
        <ButtonsLayout>
            <template v-slot:left>
                <v-btn block append-icon="mdi-backspace-reverse" color="primary" size="large" variant="elevated" @click="nextStep">Next</v-btn>
            </template>
        </ButtonsLayout>

    </v-form>
</template>