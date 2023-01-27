<template>
    <v-container>
        <v-row>
            <v-col>
                <slot name="left" />
            </v-col>
            <v-col>
                <slot name="right" />
            </v-col>
        </v-row>
    </v-container>
</template>