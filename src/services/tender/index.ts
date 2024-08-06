import {request} from "@/utils/helpers/request.ts";


export class TenderService {
    static async getList(page: number | string) {
        const response = await request(`/list/?page=${page}`, 'GET')
        return response.data
    }
}