<template>
	<view>
		<view class="user-section">
			<view class="user-info-box">
				<view class="portrait-box"><image class="portrait" src="../../static/image/user/missing-face.png"></image></view>
				<view class="info-box"><text class="username">KING</text></view>
			</view>
			<view class="vip-card-box">
				<view class="b-btn">立即开通</view>
				<view class="tit">ADS会员</view>
			</view>
		</view>
		<view
			class="cover-container"
			:style="[
				{
					transform: coverTransform,
					transition: coverTransition
				}
			]"
			@touchstart="coverTouchstart"
			@touchmove="coverTouchmove"
			@touchend="coverTouchend"
		>
			<image class="arc" src="../../static/image/user/arc.png"></image>
			<view class="my-assets">
				<view class="ass">我的资产</view>
				<view class="ass_list">
					<view>
						<view>
							0.00
							<text>元</text>
						</view>
						<view>我的余额</view>
					</view>
					<view>
						<view>1</view>
						<view>我的积分</view>
					</view>
					<view>
						<view>
							0
							<text>张</text>
						</view>
						<view>优惠卷</view>
					</view>
					<view>
						<view>
							0
							<text>张</text>
						</view>
						<view>会员卡</view>
					</view>
				</view>
			</view>
			<view class="my-assets">
				<view class="ass">我的工具</view>
				<view class="ass_list">
					<view>
						<view><image src="../../static/iconfont/liulanjilu.png" mode=""></image></view>
						<view>浏览记录</view>
					</view>
					<view>
						<view><image src="../../static/iconfont/saoyisao.png" mode=""></image></view>
						<view>扫一扫</view>
					</view>
					<view>
						<view><image src="../../static/iconfont/yaoqinghaoyou.png" mode=""></image></view>
						<view>邀请好友</view>
					</view>
					<view>
						<view><image src="../../static/iconfont/yijianfankui.png" mode=""></image></view>
						<view>意见反馈</view>
					</view>
					<view>
						<view><image src="../../static/iconfont/gengduo.png" mode=""></image></view>
						<view>更多...</view>
					</view>
				</view>
			</view>
			<view class="my-assets">
				<view class="ass">使用记录</view>
				<view class="ass_list">
					<view>
						<view>0</view>
						<view>商品收藏</view>
					</view>
					<view>
						<view>1</view>
						<view>历史购买</view>
					</view>
					<view>
						<view>12</view>
						<view>我的足迹</view>
					</view>
				</view>
			</view>
			<view class="my-assets">
				<view class="ass">我的工具</view>
				<view class="ass_list">
					<view>
						<view><image src="../../static/iconfont/fengxianpianhaoceshi.png" mode=""></image></view>
						<view>测试</view>
					</view>
					<view>
						<view><image src="../../static/iconfont/gengduo.png" mode=""></image></view>
						<view>消息</view>
					</view>
					<view>
						<view><image src="../../static/iconfont/kefu.png" mode=""></image></view>
						<view>客服</view>
					</view>
					<view></view>
					<view></view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
let startY = 0,
	moveY = 0,
	pageAtTop = true;
export default {
	data() {
		return {
			coverTransform: 'translateY(0px)',
			coverTransition: '0s',
			moving: false
		};
	},
	methods: {
		coverTouchstart(e) {
			if (pageAtTop === false) {
				return;
			}
			this.coverTransition = 'transform .15s linear';
			startY = e.touches[0].clientY;
		},
		coverTouchmove(e) {
			moveY = e.touches[0].clientY;
			let moveDistance = moveY - startY;
			if (moveDistance < 0) {
				this.moving = false;
				return;
			}
			this.moving = true;
			if (moveDistance >= 80 && moveDistance < 100) {
				moveDistance = 80;
			}
			if (moveDistance > 0 && moveDistance <= 80) {
				this.coverTransform = `translateY(${moveDistance}px)`;
			}
		},
		coverTouchend() {
			if (this.moving === false) {
				return;
			}
			this.moving = false;
			this.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)';
			this.coverTransform = 'translateY(0px)';
		}
	}
};
</script>
<style lang="scss">
page {
	width: 100%;
	height: 100%;
	background-color: #f5f5f9;
}
.cover-container {
	width: 100%;
	background: #ccc;
	margin-top: -200upx;
	padding: 0 30upx;
	position: relative;
	background: #f5f5f5;
	padding-bottom: 20upx;
	box-sizing: border-box;
	.arc {
		position: absolute;
		left: 0;
		top: -32upx;
		width: 100%;
		height: 36upx;
	}
	.my-assets {
		background-color: #fff;
		box-sizing: border-box;
		padding: 0 30rpx;
		width: 100%;
		margin-top: 20rpx;
		.ass {
			height: 80rpx;
			width: 100%;
			font-size: 32rpx;
			display: flex;
			align-items: center;
			border-bottom: 1rpx solid #f2f2f2;
		}
		.ass_list {
			display: flex;
			justify-content: space-evenly;
			& > view {
				flex: 1;
				font-size: 28rpx;
				text-align: center;
				margin: 30rpx 0rpx;
				& > view:nth-child(1) {
					font-size: 32rpx;
					font-weight: bold;
					color: #123597;
					image {
						width: 56rpx;
						height: 56rpx;
					}
					text {
						font-size: 26rpx;
						font-weight: 500;
					}
				}
				& > view:nth-child(2) {
					color: #999;
					margin-top: 10rpx;
				}
			}
		}
	}
}
.user-section {
	height: 460upx;
	padding: 80upx 30upx 0;
	position: relative;
	background: #123597;
}
.user-info-box {
	height: 180upx;
	display: flex;
	align-items: center;
	position: relative;
	z-index: 1;
	.portrait {
		width: 130upx;
		height: 130upx;
		border: 5upx solid #fff;
		border-radius: 50%;
	}
	.username {
		font-size: 42rpx;
		color: rgba(255, 255, 255, 0.7);
		margin-left: 20upx;
	}
}
.vip-card-box {
	display: flex;
	flex-direction: column;
	color: #f7d680;
	height: 280upx;
	background: linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6));
	border-radius: 16upx 16upx 0 0;
	overflow: hidden;
	position: relative;
	padding: 20upx 24upx;
	.card-bg {
		position: absolute;
		top: 20upx;
		right: 0;
		width: 380upx;
		height: 200upx;
	}
	.b-btn {
		position: absolute;
		right: 20upx;
		top: 20upx;
		width: 160upx;
		height: 50upx;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 26upx;
		color: #36343c;
		border-radius: 20px;
		background: linear-gradient(left, #f9e6af, #ffd465);
		z-index: 1;
	}
	.tit {
		font-size: 30upx;
		color: #f7d680;
		margin-bottom: 28upx;
	}
	.e-b {
		font-size: 28upx;
		color: #d8cba9;
		margin-top: 10upx;
	}
}
</style>
