<script setup lang="ts">
    const props = defineProps({
        step: {type:Number, required: true},
        steps: {type:Array<String>, required: true}
    })
</script>
<template>
    <div class="stepper">
        This is Stepper showing  <v-chip>{{ step }}</v-chip>
    </div>
</template>

<style scoped>
.stepper{
    padding: 20px;
    font-size: large;
    text-align: center;
}
</style>