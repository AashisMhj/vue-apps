import {ref} from 'vue'
import {defineStore} from 'pinia';
import type {Ref} from 'vue';

export const useTableFilter = defineStore('filters', ()=>{
    const page = ref(1);
    const limit = ref(50);
    const order:Ref<string> = ref('DESC');
    const countryFilter:Ref<Array<any>> = ref([]);
    function nextPage(){
        page.value++
    }
    function prevPage(){
        page.value--;
    }
    function countryFilterChangeHandler(countryFilter: Array<any>){
        console.log('country filter changed');
    }
    function changeOrder(newOrder:string){
        order.value = newOrder;
    }
    return {
        page, 
        limit, 
        nextPage,
        prevPage,
        countryFilterChangeHandler
    }
})