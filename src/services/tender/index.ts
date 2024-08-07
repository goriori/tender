import {request} from "@/utils/helpers/request.ts";

export type TenderItem = {
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

export class TenderService {
    static async getList(page: number | string): Promise<TenderItem[]> {
        const response = await request(`/list/?page=${page}`, 'GET')
        return response.data
    }
}