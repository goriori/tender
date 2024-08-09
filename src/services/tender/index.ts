import {request} from "@/utils/helpers/request.ts";

export type TenderNotice = {
    "id": string,
    "sid": string,
    "name": string,
    "type": string,
    "date": string,
    "comments": string,
    "block": string,
    "doc_id": string,
    "doc_url": string,
    "doc_size": string,
    "doc_pages": string,
    "doc_accept": string
}
export type TenderListItem = {
    id: string
    title: string
    description: string
    sid: string
    date: string,
    deadline_date: string
    place: string
    category: string
    awarded_value: string
    awarded_currency: string
    awarded_value_eur: string
}

export type TenderItem = TenderListItem & {
    notices: TenderNotice[]
}

export class TenderService {
    static async getTenderList(page: number | string, count: number): Promise<TenderListItem[]> {
        const response = await request(`/list/?page=${page}`, 'GET')
        return response.data.splice(0, count)
    }

    static async getTenderDetails(id: number | string): Promise<TenderItem[]> {
        return await request(`/element/?id=${id}`, 'GET')
    }
}