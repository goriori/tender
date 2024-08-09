import {defineStore} from "pinia";
import {ref} from "vue";
import {TenderItem, TenderListItem} from "@/services/tender";

export const useTenderStore = defineStore('tender', () => {
    const tenders = ref<TenderListItem[]>([])
    const tenderSearchList = ref<TenderListItem[]>([])
    const targetTender = ref<TenderItem | {}>({})
    const setTenders = (tenderList: TenderListItem[]) => tenders.value = tenderList
    const getTenders = () => tenders.value
    const setTargetTender = (tender: TenderListItem) => targetTender.value = tender
    const getTargetTender = () => targetTender.value
    const setTenderSearchList = (searchList: TenderListItem[]) => tenderSearchList.value = searchList
    const getTenderSearchList = () => tenderSearchList.value
    return {
        tenders,
        targetTender,
        getTenders,
        getTargetTender,
        getTenderSearchList,
        setTenders,
        setTargetTender,
        setTenderSearchList
    }
})



