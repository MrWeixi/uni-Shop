<template>
	<view>
	<view class="upload-image-view">
			<block v-for="(image,index) in imageList" :key="index">
			<view class='image-view'>
				<image :src="image" :data-src="image" @tap="previewImage"></image>
				<view class='del-btn' :data-index="index" @tap='deleteImage'>
					x
				</view>
			</view>
		</block>
		<view class='add-view' v-if="imageList.length < imgCount" @tap="chooseImage">
		 <image :src="imgurl" mode=""></image>
		</view>
	</view>
		</view>
		 </template> 
		<script>
		var sourceType=[
		['camera'], //拍照
		['album'], //相册
		['camera', 'album'] //拍照或相册
		]
		var sizeType=[
		['compressed'], //压缩
		['original'], //原图
		['compressed', 'original'] //压缩或原图
		]
		export default {
		data() {
		return {
		imgurl:'/static/iconfont/xiangji.png',
		imageList:[], //图片路径
		imgCount:3, //限制图片张数
		sourceTypeIndex:2, // 添加方式
		sizeTypeIndex:2, //图片尺寸限制
		}
		},
		methods: {
		chooseImage(){
		uni.chooseImage({
		count:this.imgCount-this.imageList.length,
		sourceType:sourceType[this.sourceTypeIndex],
		sizeType:sizeType[this.sizeTypeIndex],
		success:(res)=>{
		// 追加
		this.imageList=this.imageList.concat(res.tempFilePaths);
		}
		})
		},
		previewImage(e){
			var current=e.target.dataset.src;
			uni.previewImage({
				current:current,
				urls:this.imageList
			})
		},
		// 删除图片
		deleteImage(e){
			var index=e.target.dataset.index;
			var that=this;
			var image=that.imageList;
			image.splice(index,1);
			that.imageList=image;
			
		}
		}
		}
		</script>
		<style lang="scss">
			.upload-image-view {
				height: 240rpx;
				width: 100%;
				display: flex;
				flex-wrap: nowrap;
				align-items: center;
				padding:0 20rpx;
				box-sizing: border-box;
				.image-view {
					height: 200rpx;
					width: 200rpx;
					position: relative;
					margin: 20rpx;
					border-radius: 12rpx;
					&>image {
						height: 100%;
						width: 100%;
						border-radius: 12rpx;
					}
					.del-btn {
						width: 30rpx;
						height:30rpx;
						line-height: 25rpx;
						text-align: center;
						position: absolute;
						right: -10rpx;
						top: -10rpx;
						z-index: 2;
						font-size:24rpx;
						border-radius:50%;
						background: $uni-bg-color-mask;
						color: $uni-text-color-inverse;
					}
				}
				.add-view {
					height: 200rpx;
					width: 200rpx;
					border-radius: 12rpx;
					border: 2rpx dashed #999;
					margin:10rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					&>image{
						width:60rpx;
						height: 60rpx;
					}
				}

			}
		</style>