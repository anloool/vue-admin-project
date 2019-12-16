import {get, post } from './http'

export function getCardsData() {
    return get('/getCardsData')
}
export function getLineData() {
    return get('/getLineData')
}
export function getTableData() {
    return get('/getTableList')
}
export function getBarData() {
    return get('/getBarData')
}

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