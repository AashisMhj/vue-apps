<template>
    <div class="d-flex justify-center mb-6 mt-10">
        <v-sheet>Thank You For Your Time</v-sheet>
    </div>
    <div class="d-flex justify-center mb-6">
        <v-sheet>
            <span class="text-h1">Good Bye</span>
        </v-sheet>
    </div>
    <div class="d-flex justify-center">
        <v-btn color="primary" @click="$emit('reset')">Reset</v-btn>
    </div>
</template>