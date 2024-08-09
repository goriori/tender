const serverUrl = window.API

export type METHOD = 'GET' | 'POST' | 'PUT' | 'PATH' | 'DELETE'

const handlerError = (err: unknown) => {
    console.log(err)
    alert('При загрузке данны хпроизошла ошибка, попробуйте зайти чуть позже')
    throw false
}

export const request = async (point: string, method: METHOD) => {
    try {
        const response = await fetch(serverUrl + point, {method})
        return response.json()
    } catch (e: unknown) {
        handlerError(e)
    }
}