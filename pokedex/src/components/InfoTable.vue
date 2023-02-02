<script lang="ts" setup>
defineProps<{
    name: string,
    base_experience: number,
    height: number,
    weight: number
}>()
</script>
<template>
    <table>
        <tr>
            <td>Name</td>
            <td>{{ name }}</td>
        </tr>
        <tr>
            <td>Base Experience</td>
            <td>{{ base_experience }}</td>
        </tr>
        <tr>
            <td>Height</td>
            <td>{{ height }}</td>
        </tr>
        <tr>
            <td>Weight</td>
            <td>{{ weight }}</td>
        </tr>
    </table>
</template>


<style scoped>
table{
    width: 100%;
    padding: 20px;
}
tr{
    height: 40px;
    border: 50px solid gray;
}
td{
}
</style>