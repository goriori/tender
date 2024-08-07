import {defineStore} from "pinia";
import {ref} from "vue";
import {TenderItem} from "@/services/tender";

const useTenderStore = defineStore('tender', () => {
    const tenders = ref<TenderItem[]>([])
    const getTenders = () => tenders.value
    const addTender = (tender: TenderItem) => tenders.value.push(tender)
    return {
        tenders,
        getTenders,
        addTender
    }
})

export const tenderStore = useTenderStore()

