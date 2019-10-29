import request from './index.js'
export let postApi = function(url, data) {
	return request.post(url, data)
}
export let getApi = function(url, data) {
	return request.get(url, data)
}
