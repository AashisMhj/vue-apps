<script lang="ts" setup>
import {ref} from 'vue';
// type
import type {Ref} from 'vue';
import type {FilterValue} from '@/type';
// function and conts
import {CountryFilters} from '@/consts';
// components
import SingleDropDown from '@/components/common/SingleDropDown.vue';
//
const currentCountryValue:Ref<FilterValue> = ref(CountryFilters[0]);
const countryFilters:Ref<Array<FilterValue>> = ref(CountryFilters)

</script>
<template>
    <div class="flex flex-row flex-wrap">
        <SingleDropDown label="Country" :value="currentCountryValue" :options="countryFilters"  />
    </div>
</template>