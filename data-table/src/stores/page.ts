import {ref} from 'vue';
import {defineStore} from 'pinia'
import type {Ref} from 'vue';

export const usePageState = defineStore('page', ()=>{
    const currentPage:Ref<string> = ref('data-table');
    function changeCurrentPage(newPage:string){
        currentPage.value = newPage;
    }
    return {
        currentPage,
        changeCurrentPage
    }
})