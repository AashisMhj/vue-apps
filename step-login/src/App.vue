<template>
  <v-app>
    <v-main>
      <MainLayout>
        <UserForm/>
      </MainLayout>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import UserForm from './pages/UserForm.vue';
import MainLayout from '@/layout/main.layout.vue';
</script>
