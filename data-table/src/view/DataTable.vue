<script setup lang="ts">
// types
import type { RowType } from '@/type';
// layouts
import FullCardLayout from '@/layouts/full-card.layout.vue';
// components
import Table from '@/components/data-table/sections/Table.section.vue';
import FilterSection from '@/components/data-table/sections/Filter.section.vue';
import DisplayControlSection from '@/components/data-table/sections/DisplayControl.section.vue';
//
const tableHeaders = [
    'Id',
    'Country',
    'Gender',
    'Age',
    'Count',
    'Education'
]
const data:Array<RowType> = [
  { 'id': 1, 'geo': 'Nepal', 'gender': 'Male', 'age': 13, 'count': 60, 'education': 'Master' },
  { 'id': 1, 'geo': 'India', 'gender': 'Male', 'age': 13, 'count': 60, 'education': 'Master' },
  { 'id': 1, 'geo': 'India', 'gender': 'Female', 'age': 13, 'count': 60, 'education': 'P.h.d' },
  { 'id': 1, 'geo': 'India', 'gender': 'Female', 'age': 13, 'count': 50, 'education': 'P.h.d' },
  { 'id': 1, 'geo': 'India', 'gender': 'Female', 'age': 45, 'count': 50, 'education': 'P.h.d' },
  { 'id': 1, 'geo': 'Russia', 'gender': 'Male', 'age': 45, 'count': 50, 'education': 'P.h.d' },
  { 'id': 1, 'geo': 'Russia', 'gender': 'Other', 'age': 45, 'count': 50, 'education': 'High School' },
  { 'id': 1, 'geo': 'Russia', 'gender': 'Male', 'age': 45, 'count': 27, 'education': 'High School' },
  { 'id': 1, 'geo': 'Russia', 'gender': 'Male', 'age': 45, 'count': 27, 'education': 'High School' },
  { 'id': 1, 'geo': 'Nepal', 'gender': 'Male', 'age': 45, 'count': 60, 'education': 'Master' },
]
</script>

<template>
  <body class="container mx-auto">
    <div class="flex flex-col">
      <div class="w-full">
        <FullCardLayout title="Filter Section">
          <FilterSection />
        </FullCardLayout>
        <FullCardLayout title="Display Control" >
          <DisplayControlSection />
        </FullCardLayout>
        <FullCardLayout title="Data Table">
          <Table :data="data" :table-headers="tableHeaders" />
        </FullCardLayout>        
      </div>
    </div>
    
  </body>
</template>
