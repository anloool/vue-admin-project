import {get, post } from './http'

export function USER_LOGIN(params) {
    return post('/login', params)
}

export function GET_USER_INFO() {
    return get('/getInfo')
}

export function GET_TABLE_DATA(params) {
    return get('/getPageData1', params)
}

export function GET_TABLE_COMPLEXDATA() {
    return get('/getPageData2')
}