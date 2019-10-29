import Vue from 'vue'
import App from './App'
import './common/api/common'
import Json from './Json' //测试用数据
Vue.config.productionTip = false;
const json = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(Json[type]);
		}, 500)
	})
}
// 全局图片路径
Vue.prototype.$websiteUrl =(item)=>{
	return  'https://test.luyiwangluo.com'+item
};
Vue.prototype.$msg = (title, duration=800, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
Vue.prototype.$api = {json};
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
