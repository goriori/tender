export const searchTenderByTitle = <T>(tenderList: T[], searchValue: string): (T | null)[] => {
    return tenderList.map(tender => {
        if (tender.title.toLowerCase().includes(searchValue.toLowerCase())) return tender
        else return null
    }).filter(tender => tender)
}