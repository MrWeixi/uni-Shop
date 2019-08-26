<template>
	<view class="shopList">
		<view class="text-area">
		<view class="input_search">
			<image style="width: 48rpx;height: 48rpx;" src="../../static/image/search.png"></image>
		   	<input type="text" placeholder="请输入商品关键字" confirm-type="search" placeholder-style="color:#ccc;" />
		</view>
		</view>
		<view class="goodsBox">
			<goods-list :goodsList="goodsLists"></goods-list>
		</view>
		<uni-load-more :status="status" />
	</view>
</template>

<script>
import goodsList from '@/components/goodsList/goodsList.vue';
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';

export default {
	components: {
		goodsList,
		uniLoadMore
	},
	data() {
		return {
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
	methods: {},
	onReachBottom() {
		this.goodsLists = this.goodsLists.concat(this.goodsLists);
	}
};
</script>

<style lang="scss">
.goodsBox {
	padding: 20rpx 0;
}
.text-area {
		height: 100rpx;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		&>.input_search {
			height: 70rpx;
			width: 90%;
			border: #ccc solid 1rpx;
			border-radius: 50rpx;
			display: flex;
			align-items: center;
			padding-left: 20rpx;
	
			input {
				margin-left: 40rpx;
			}
		}
	}
</style>
