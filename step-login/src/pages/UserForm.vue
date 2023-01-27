<script setup lang="ts">
import PersonalForm from '@/components/PersonalDetailForm.vue';
import AddressForm from '@/components/AddressForm.vue';
import AdditionalForm from '@/components/AdditionalForm.vue';
import ConfirmBox from '@/components/ConfirmBox.vue';
import FinalScreen from '@/components/FinalScreen.vue';
import Stepper from '@/components/Steeper.vue';

import {ref} from 'vue';
import type { Ref } from 'vue';
const steps = [
  "Personal Info",
  "Address",
  "Additional",
  "Confirm"
]
const initialData = {
  '1': {
    label: 'Personal Information',
    data: {
        firstName: '',
        lastName: '',
        email: '',
        gender: 'Male'
    }
  },
  "2": {
    label: 'Address',
    data: {
        country: '',
        state: ''
    }
  },
  "3": {
    label: "Additional Information",
    data: {
        occupation: '',
        bio: ''
    }
  }
}
const step:Ref<number> = ref(1);
const data = ref(initialData);

function nextStep(){
    step.value++;
}
function prevStep(){
    step.value--;
}
function reset(){
  step.value = 1;
  data.value = initialData;
}
</script>

<template>
    <Stepper :step="step" :steps="steps" />
    <div v-if="step === 1">
      <PersonalForm :data="data[1].data" :nextStep="nextStep" />
    </div>
    <div v-else-if="step === 2">
      <AddressForm :data="data[2].data" :nextStep="nextStep" :prevStep="prevStep"  />
    </div>
    <div v-else-if="step === 3">
      <AdditionalForm :data="data[3].data" :nextStep="nextStep" :prevStep="prevStep" />
    </div>
    <div v-else-if="step === 4">
      <ConfirmBox :formData="data" :nextStep="nextStep" :prevStep="prevStep" />
    </div>
    <div v-else-if="step === 5" >
      <FinalScreen @reset="reset" />
    </div>
</template>