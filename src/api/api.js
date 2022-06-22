import request from '../utils/request.js'

export function workOrderNum(params){
	return request.get('app/report/workOrderNum',params)
}
export function getCustomer(params){
	return request.get('app/report/customer',params)
}
export function getProject(params){
	return request.get('app/report/project',{params})
}
export function getSite(params){
	return request.get('app/report/site',{params})
}
export function getLine(params){
	return request.get('app/report/line',{params})
}
export function getOrder(params){
	return request.get('app/report/order',{params})
}

export function getTest1(params){
	return request.post('base/sys-form-data/findByUserSn',params)
}