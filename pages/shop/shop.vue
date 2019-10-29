<template>
	<view class="container">
		<view class="cart-list">
			<block v-for="(item,index) in cartList" :key="item.id">
				<view class="cart-item" :class="{'b-b': index!==cartList.length-1}">
					<view class="checkbox">
						<view class="yticon icon-xuanzhong2 chex" :class="{checked: item.checked}" @click="check('item', index)"></view>
					</view>
					<view class="image-warpper">
						<image :src="item.image" :class="[item.loaded]" mode="aspectFill" lazy-load @load="onImageLoad('cartList', index)"
						 @error="onImageError('cartList', index)"></image>
					</view>
					<view class="cart-right">
						<text class="clamp title">{{item.title}}</text>
						<text class="clamp arrt">{{item.attr_val}}</text>
						<text class="price">￥{{item.price}}</text>
						<uni-number-box class="step" :min="1" :max="item.stock" :value="item.number>item.stock?item.stock:item.number"
						 :isMax="item.number>=item.stock?true:false" :isMin="item.number===1" :index="index" @eventChange="numberChange"></uni-number-box>
					</view>
					<text @tap="deleteCartItem(index)" class="del-btn yticon icon-fork"></text>
				</view>
			</block>
		</view>
		<view class="action-section">
			<view>
				<view class="yticon icon-xuanzhong2 chexs" :class="{checked: allChecked}" @tap.stop="check('all')"></view>
				<view class="clear-btn" :class="{show:allChecked}" @tap.stop="deleteList">
					清空
				</view>
			</view>
			<view class="total-box">
				<text class="price">￥{{total}}</text>
				<text class="coupon">
					优惠:<text>20</text>元
				</text>
			</view>
			<button class="no-border confirm-btn" @tap="go">去结算</button>
		</view>
	</view>
</template>

<script>
	import uniNumberBox from '@/components/uni-number-box.vue'
	export default {
		data() {
			return {
				total: 0, //总价格
				allChecked: false, //全选状态 true/false
				cartList: [] //列表
			}
		},
		components: {
			uniNumberBox
		},
		onLoad() {
			this.loadData();
		},
		methods: {
			async loadData() {
				let list = await this.$api.json('cartList');
				let cartList = list.map(item => {
					item.checked = false;
					return item;
				})
				this.cartList = cartList;
				this.allTotal(); //计算总价
			},
			//监听image加载完成
			onImageLoad(key, index) {
				this.$set(this[key][index], 'loaded', 'loaded');
			},
			//监听image加载失败
			onImageError(key, index) {
				this[key][index].image = '/static/errorImage.jpg';
			},
			// 数量
			numberChange(data) {
				this.cartList[data.index].number = data.number;
			    this.allTotal();
			},
			//选中状态处理
			check(type, index) {
				if (type === 'item') {
					this.cartList[index].checked = !this.cartList[index].checked;
				} else {
					const checked = !this.allChecked;
					const list = this.cartList;
					list.forEach(item => {
						item.checked = checked;
					})
					this.allChecked = checked;
				}
				this.allTotal(type);
			},
			// 删除订单
			deleteCartItem(index) {
				let list = this.cartList;
				let row = list[index];
				let id = row.id;
				uni.showModal({
					content: '删除订单？',
					success: (e)=>{
						if(e.confirm){
							this.cartList.splice(index, 1);
						}
					}
				})	
				this.allTotal();
			},
			// 总价
			allTotal() {
				let list = this.cartList;
				let total = 0;
				let checked = true;
				list.forEach(item => {
					if (item.checked === true) {
						total+=item.price * item.number;
					} else if (checked === true) {
						checked = false;
					}
					this.allChecked=checked;
					this.total=Number(total.toFixed(2));
				})
			},
			// 清空
			deleteList(){
				uni.showModal({
					content: '清空购物车？',
					success: (e)=>{
						if(e.confirm){
							this.cartList = [];
						}
					}
				})
			},
			// 去结算
			go(){
				uni.showToast({
					title:'结算成功'
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
		height: 100%;
		background-color: #F5F5F5;
	}

	.container {
		padding-bottom: 190rpx;
	}

	.action-section {
		/* #ifdef H5 */
		margin-bottom: 88rpx;
		/* #endif */
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 99;
		height: 120rpx;
		width: 100%;
		padding: 0 30rpx;
		background: rgba(255, 255, 255, 1);
		border-top: 1rpx solid #eee;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;

		.clear-btn {
			position: absolute;
			left: 32rpx;
			top: 50%;
			transform: translateY(-50%);
			z-index: 4;
			width: 0rpx;
			height: 54rpx;
			line-height: 54rpx;
			padding-left: 100rpx;
			font-size: 26rpx;
			color: #fff;
			background-color: rgba(0, 0, 0, .6);
			border-radius: 0 50px 50px 0;
			opacity: 0;
			transition: .2s;

			&.show {
				opacity: 1;
				width: 100upx;
			}
		}
	}
	.total-box {
		display: flex;
		flex-direction: column;

		.price {
			font-size: 28rpx;
			color: #13227a;
		}
		.coupon {
			font-size: 26rpx;
			text {
				color: #666;
			}
		}
	}
	.confirm-btn {
		padding: 0 38rpx;
		margin: 0;
		border-radius: 100px;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 28rpx;
		background: #13227a;
		color: #fff;
	}
	.checkbox {
		width: 120rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.chexs,
	.chex {
		padding: 6rpx;
		line-height: 2;
		font-size: 44rpx;
		color: #ccc;
		border-radius: 50px;
		position: relative;
		z-index: 99;
		background-color: #FFFFFF;
	}

	.chexs {
		padding: 6rpx 12rpx;
		font-size: 54rpx;
	}

	.checked {
		color: #13227a;
	}

	// 购物车列表页
	.clamp {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: block;
	}

	.cart-list {
		box-sizing: border-box;
		padding: 20rpx;
	}

	.cart-item {
		display: flex;
		box-sizing: border-box;
		padding: 30rpx 40rpx 30rpx 0rpx;
		border-radius: 20rpx;
		margin-bottom: 20rpx;
		background-color: #fff;

		.image-warpper {
			width: 220rpx;
			height: 220rpx;
			flex-shrink: 0;
			position: relative;

			image {
				border-radius: 8rpx;
				width: 100%;
				height: 100%;
			}
		}

		.cart-right {
			display: flex;
			flex-direction: column;
			flex: 1;
			overflow: hidden;
			position: relative;
			padding-left: 30rpx;

			.title,
			.price {
				height: 40rpx;
				line-height: 40rpx;
				font-size: 32rpx;
			}

			.arrt {
				font-size: 30rpx;
				color: #666;
			}

			.price {
				color: #13227a;
				height: 50rpx;
				line-height: 50rpx;
			}
		}

		.del-btn {
			padding: 4rpx 16rpx;
			font-size: 34rpx;
			height: 34rpx;
			color: #13227a;
			background-color: rgba(0, 0, 0, .1);
			border-radius: 30rpx;
		}
	}
</style>
