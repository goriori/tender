import {defineStore} from "pinia";
import {ref} from "vue";

export const useApplicationStore = defineStore('application', () => {
    const isLoading = ref<boolean>(false)
    const getStateLoading = () => isLoading.value
    const setStateLoading = (state: boolean) => {
        isLoading.value = state
    }
    return {
        getStateLoading,
        setStateLoading
    }
})



