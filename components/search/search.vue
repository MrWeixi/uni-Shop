<template>
	<view class="search">
			<view class="text-area">
			<view class="input_search" @tap="shopList">
				<image style="width: 48rpx;height: 48rpx;" src="../../static/image/search.png"></image>
			    <slot name="inp"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			shopList(){
				uni.navigateTo({
				url:"../../pages/shop/shopList/shopList"
				})
			}
		}
	}
</script>

<style lang="scss">
	
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
