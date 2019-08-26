<template>
	<view class="index">
		<ads-search><input slot="inp" type="text" disabled="true" placeholder="请输入商品关键字" confirm-type="search" placeholder-style="color:#ccc;" /></ads-search>
		<view class="nav">
			<text :class="[acitveIndex == index ? 'big' : '']" v-for="(items, index) in menus" :key="index" :id="'menus' + index" @click="menuClick">{{ items }}</text>
		</view>
		<swiper
			class="carousel"
			:indicator-dots="true"
			:autoplay="true"
			indicator-color="rgba(0, 0, 0, .3)"
			circular
			indicator-active-color="#fff"
			:interval="3000"
			:duration="1000"
		>
			<swiper-item v-for="(item, index) in imgList" class="carousel-item" :key="index"><image :src="item.src"></image></swiper-item>
		</swiper>
		<view class="nav_hot">
			<view>
				<image src="../../static/image/youhuiquan.png" mode=""></image>
				<text>新人优惠</text>
			</view>
			<view>
				<image src="../../static/image/VIP.png" mode=""></image>
				<text>会员优享卡</text>
			</view>
			<view>
				<image src="../../static/image/quanbu.png" mode=""></image>
				<text>全部商品</text>
			</view>
		</view>
		<view class="title">
			<text style="font-size: 40rpx;">好物日历</text>
			<text style="font-size:28rpx;margin-left: 30rpx;">每日精选推荐</text>
		</view>
		<view class="list-content">
			<block v-for="(items, index) in getLists" :key="index">
				<view class="list-item">
					<view class="image">
						<image :src="items.imgUrl" mode=""></image>
						<view class="flash" v-if="items.flash == 2">限时降价,立即查看</view>
					</view>
					<text class="texts">{{ items.text }}</text>
					<view class="manxs" v-if="items.flash == 1">满减</view>
					<view class="manx" v-else></view>
					<view class="shop">
						<text>￥{{ items.count }}</text>
						<image style="width: 42rpx;height:38rpx;" src="../../static/iconfont/shop-icon.png" mode=""></image>
					</view>
				</view>
			</block>
		</view>
		<view class="title" style="display: flex;justify-content: space-between;">
			<view>
				<text style="font-size: 40rpx;">新品尝鲜</text>
				<text style="font-size:28rpx;margin-left: 30rpx;">每周二,周四上新</text>
			</view>
			<view style="font-size:26rpx; color: #666;">
				<text style="margin-right: 8rpx;">更多</text>
				<text style="font-family: '黑体';">></text>
			</view>
		</view>
		<view class="list-content">
			<block v-for="(items, index) in getLists" :key="index">
				<view class="list-item">
					<view class="image">
						<image :src="items.imgUrl" mode=""></image>
						<view class="flash" v-if="items.flash == 2">限时降价,立即查看</view>
					</view>
					<text class="texts">{{ items.text }}</text>
					<view class="manxs" v-if="items.flash == 1">满减</view>
					<view class="manx" v-else></view>
					<view class="shop">
						<text>￥{{ items.count }}</text>
						<image style="width: 40rpx;height:40rpx;" src="../../static/iconfont/shop-icon.png" mode=""></image>
					</view>
				</view>
			</block>
		</view>
	
		<view class="banner"><image src="../../static/image/banner.jpg" mode=""></image></view>

		<view class="goodsBox">
			<view class="shopList">—— 商品列表 ——</view>
			<goods-list :goodsList="goodsLists"></goods-list>
		</view>
			<view>
			<!-- 顶部 -->
			<view class="to-top" @click="goTop" v-show="isshow"><image src="../../static/iconfont/top.png" mode="widthFix"></image></view>
		</view>
		<uni-load-more :status="status" />
	</view>
</template>
<script>
import goodsList from '@/components/goodsList/goodsList.vue';
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
import adsSearch from '@/components/search/search.vue';
export default {
	components: {
		goodsList,
		uniLoadMore,
		adsSearch
	},
	created(){
		this.isshow=false;
	},
	
	data() {
		return {
			isshow: false,
			acitveIndex: 0,
			menus: ['新品', '灯饰', '餐厨', '家具', '家居', '礼物'],
			imgList: [
				{
					src: '/static/image/2.jpg',
					id: 0
				},
				{
					src: '/static/image/1.jpg',
					id: 1
				},
				{
					src: '/static/image/3.jpg',
					id: 3
				},
				{
					src: '/static/image/index/sw5.jpg',
					id: 4
				}
			],
			getLists: [
				{
					imgUrl: 'http://img2.imgtn.bdimg.com/it/u=239226442,2523467464&fm=15&gp=0.jpg',
					text: '看好家居',
					count: 900,
					flash: 1
				},
				{
					imgUrl: 'http://img5.imgtn.bdimg.com/it/u=2890059030,1956213741&fm=26&gp=0.jpg',
					text: '‘不山’天使沙发',
					count: 231,
					flash: 2
				},
				{
					imgUrl: 'https://img11.360buyimg.com/jdcms/s150x150_jfs/t1/15027/9/5448/147128/5c3d5a85E2d172afa/f54075d10032c7f7.jpg.webp',
					text: '来自火星的沙发家居',
					count: 676,
					flash: 2
				},
				{
					imgUrl: 'http://img5.imgtn.bdimg.com/it/u=1306096751,1153831446&fm=15&gp=0.jpg',
					text: '手工沙发 全友家居',
					count: 122,
					flash: 1
				},
				{
					imgUrl: 'http://img3.imgtn.bdimg.com/it/u=2314192590,1913038875&fm=15&gp=0.jpg',
					text: '银山香气 实木',
					count: 672,
					flash: 1
				},
				{
					imgUrl: 'http://img2.imgtn.bdimg.com/it/u=2362049066,4292428312&fm=15&gp=0.jpg',
					text: '去掉一天的疲惫不堪',
					count: 1000,
					flash: 2
				}
			],
			goodsLists: [
				{
					goods_id: 0,
					img: '/static/image/goods/p1.jpg',
					name: '商品名称',
					price: 168,
					slogan: 1558
				},
				{
					goods_id: 1,
					img: '/static/image/goods/p2.jpg',
					name: '商品名称商品名',
					price: 167,
					slogan: 1038
				},
				{
					goods_id: 2,
					img: '/static/image/goods/p3.jpg',
					name: '商品名称商品名称商品名称商品名称商品名称',
					price: 17,
					slogan: 1228
				},
				{
					goods_id: 3,
					img: '/static/image/goods/p4.jpg',
					name: '商品名称商品名称商',
					price: 167,
					slogan: 1058
				},
				{
					goods_id: 4,
					img: '/static/image/goods/p5.jpg',
					name: '商品名称商品名称商品名',
					price: 107,
					slogan: 558
				},
				{
					goods_id: 5,
					img: '/static/image/goods/p6.jpg',
					name: '商品名名称商品品名称商品名称',
					price: 177,
					slogan: 58
				},
				{
					goods_id: 6,
					img: '/static/image/goods/p7.jpg',
					name: '商品名称商品名称商品名称商商品名称',
					price: 18,
					slogan: 1800
				},
				{
					goods_id: 7,
					img: '/static/image/goods/p8.jpg',
					name: '商品名称商品名称商品名称商商品名称商品名称商品名称商品名',
					price: 144,
					slogan: 13526
				},
				{
					goods_id: 8,
					img: '/static/image/goods/p9.jpg',
					name: '商品名称商品名称商品名称商品名称商品名称',
					price: 123,
					slogan: 1000
				},
				{
					goods_id: 9,
					img: '/static/image/goods/p10.jpg',
					name: '商品名称商品名称商品名称商品名',
					price: 186,
					slogan: 3008
				}
			],
			status: 'loading'
		};
	},
	onLoad() {},
	onReachBottom() {
		this.goodsLists = this.goodsLists.concat(this.goodsLists);
	},
	onPageScroll(e) {
		//返回顶部
		if (e.scrollTop > 500) {
			this.isshow = true;
		} else if (e.scrollTop < 800) {
			this.isshow = false;
		}
	},
	onPullDownRefresh() {
		console.log('下拉了');
	},
	methods: {
		menuClick(e) {
			var aId = e.target.id;
			aId = aId.substr(5);
			this.acitveIndex = aId;
		},
		// 返回顶部
		goTop: function(e) {
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 100
			});
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: #f8f8f8;
	box-sizing: border-box;
}

.index {
	box-sizing: border-box;
	padding-bottom: 88rpx;
	.to-top {
		width: 90upx;
		height: 90upx;
		line-height: 90rpx;
		border-radius: 50%;
		background-color: #fff;
		position: fixed;
		right: 23upx;
		bottom: 300upx;
		z-index: 9999;
		box-shadow: 0px 3px 5px 3px #ccc;
		text-align: center;
		image {
			width: 36upx;
			height: auto;
		}
	}

	.nav {
		height: 70rpx;
		color: #13227a;
		font-size: 32rpx;
		font-weight: bold;
		background-color: #fff;
		margin: 10rpx 0rpx 14rpx 0rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 20rpx;
		.big {
			font-size: 38rpx;
		}
	}
	.nav_hot {
		height: 160rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;
		& > view {
			text-align: center;
			padding: 10rpx 0rpx 30rpx 0rpx;
			background-color: #fff;
			margin-top: 10rpx;
			box-sizing: border-box;
			flex: 1;
			image {
				width: 90rpx;
				height: 76rpx;
			}
			text {
				display: block;
				font-size: $uni-font-size-base;
				color: #666;
			}
		}
	}

	.title {
		color: #13227a;
		background-color: #fff;
		margin: 10rpx 0;
		box-sizing: border-box;
		padding: 20rpx 30rpx;
	}

	.list-content {
		box-sizing: border-box;
		padding: 0rpx 30rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.list-item {
			height: 360rpx;
			width: 225rpx;
			overflow: hidden;
			background-color: #fff;
			margin-top: 15rpx;
			.image {
				width: 100%;
				height: 220rpx;
				position: relative;

				image {
					width: 100%;
					height: 100%;
					position: absolute;
					top: 0;
					left: 0;
				}

				.flash {
					height: 45rpx;
					line-height: 45rpx;
					width: 100%;
					position: absolute;
					bottom: 0;
					background-color: rgba(0, 0, 122, 0.9);
					font-size: 24rpx;
					color: #fff;
					text-align: center;
				}
			}

			.texts {
				overflow: hidden;
				white-space: nowrap;
				font-size: 26rpx;
				color: #333;
			}

			.manxs {
				width: 100rpx;
				height: 36rpx;
				line-height: 36rpx;
				font-size: 24rpx;
				letter-spacing: 2rpx;
				border: #13227a solid 1rpx;
				color: #13227a;
				text-align: center;
				border-radius: 6rpx;
			}

			.manx {
				height: 36rpx;
			}

			.shop {
				padding: 0 5rpx;
				color: #13227a;
				font-size: 26rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-weight: bold;
				letter-spacing: 2rpx;
				margin-top: 5rpx;
			}
		}
	}
	.banner {
		height: 200rpx;
		width: 100%;
		padding: 30rpx;
		background-color: #fff;
		box-sizing: border-box;
		margin: 30rpx auto;
		& > image {
			width: 100%;
			height: 100%;
		}
	}
	.shopList {
		height: 100rpx;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #13227a;
		font-size: 36rpx;
	}

	.goodsBox {
		padding: 20rpx 0;
	}
}
/* #ifdef MP */
.carousel {
	.carousel-item {
		padding: 0;
	}
}
/* #endif */
	.carousel {
		width: 100%;
		height: 300upx;
		.carousel-item {
			width: 100%;
			height: 100%;
			padding: 0 28upx;
			box-sizing: border-box;
			overflow: hidden;
		}
		image {
			width: 100%;
			height: 100%;
			border-radius: 10upx;
		}
	}
</style>
