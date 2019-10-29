	// 路由导航
	export const navGo=(path, params = {})=> {
		let paramsStr = '?';
		 if(JSON.stringify(params) != '{}') {
			for (let key in params) {
				paramsStr += `${key}=${params[key]}&`;
			}
			paramsStr = paramsStr.substring(0, paramsStr.lastIndexOf('&'));
			let url = path + paramsStr;
			uni.navigateTo({
				url: url
			})
		} else {
			uni.navigateTo({
				url: path
			})
		}
	}