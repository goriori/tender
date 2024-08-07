import {defineStore} from "pinia";
import {ref} from "vue";
import {TenderItem} from "@/services/tender";

export const useTenderStore = defineStore('tender', () => {
    const tenders = ref<TenderItem[]>([])
    const targetTender = ref<TenderItem | {}>({})
    const setTenders = (tenderList: TenderItem[]) => tenders.value = tenderList
    const getTenders = () => tenders.value
    const setTargetTender = (tender: TenderItem) => targetTender.value = tender
    const getTargetTender = () => targetTender.value
    return {
        tenders,
        targetTender,
        getTenders,
        getTargetTender,
        setTenders,
        setTargetTender
    }
})



