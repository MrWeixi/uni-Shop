import request from './index.js'
// 全局配置
	request.setConfig({
		 baseUrl: 'https://test.luyiwangluo.com/api/v12',
		dataType: 'json', // 可删除，默认为jsonapi
		responseType: 'text', // 可删除，默认为text
	})
	// 设置请求拦截器
	request.interceptors.request(config => {
		const token = uni.getStorageSync('token');
		// 覆盖请求头
		if (token) {
			config.header = {
				'content-type': 'application/x-www-form-urlencoded',
				'apiauth': token,
				'version': 'v1.0.2'
			}
		}
		return config; // 返回修改后的配置，如未修改也需添加这行
	})
	// 设置响应拦截器
	request.interceptors.response(res => {
		if (res.data.code == '4001') {
			uni.clearStorageSync('token');
			// #ifdef APP-PLUS || H5
			uni.reLaunch({
				url: '/pages/public/login/login'
			});
			// #endif
		}
		return res; // 原样返回
	})
