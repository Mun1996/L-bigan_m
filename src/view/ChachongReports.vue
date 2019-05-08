<template>
  <div class="container">
		<van-nav-bar
			title="查重报告"
			left-text="返回"
			left-arrow
			@click-left="$router.back(-1)"
		/>
		<div class="tab">
			<div class="tab-item" :class="{'active':type==1}" @click="tabChange(1)">
				查重报告
			</div>
			<div class="tab-item" :class="{'active':type==2}" @click="tabChange(2)" >
				降重报告
			</div>
		</div>
		<div class="list" v-if="isShow">
			<ul>
 					<li class="list-item" v-for="(item,index) in listData" :key="index">						 
						<router-link to="chachongreportsdetail">						
							<div class="item-title">
								<div>检组及对大叔主动脉血流量影响的实验研究</div>
								<img src="../assets/arr-right.png" alt="">	 
							</div>
							<div class="item-time">
								2018-04-13 10:37
							</div>
							<div class="item-statu">
								<div class="statu-type">
									重复比率：<span style="color:#e45649">10%</span> 
								</div>
								<div class="item-btn">
									自动降重
								</div>
							</div>
						</router-link>
					</li>					
			</ul>
			<div class="nomore">没有更多了</div>
		</div>
		<div class="list" v-if="!isShow">
			<van-list
				v-model="loading"
				:finished="finished"
				finished-text="没有更多了"
				@load="onLoad"
			>
				<li class="list-item" v-for="(item,index) in listData" :key="index">						 
						<router-link to="chachongreportsdetail">						
							<div class="item-title">
								<div>{{index}}</div>
								<img src="../assets/arr-right.png" alt="">	 
							</div>
							<div class="item-time">
								2018-04-13 10:37
							</div>
							<div class="item-statu">
								<div class="statu-type">
									重复比率：<span style="color:#e45649">10%</span> 
								</div>
								<div class="item-btn">
									自动降重
								</div>
							</div>
						</router-link>
					</li>		
			</van-list>
		</div>
  </div>

</template>
<script>
import ListEmpty from "../components/ListEmpty"

export default {
		name: "chachongreports",
  	components: { ListEmpty },

    data() {
      return{
				isShow:true,
				type:1,
				listData: [{
					img: 'https://down.paperyy.com/xiaochengxu/static/images/file_img.jpg',
					title: '信息化环境中基于翻转课堂理念的教学设计研究',
					text: '钟晓流 ，宋述强 ，焦丽珍-《开放教育研究》-2013',
					time: '2013',
				}, {
					img: 'https://down.paperyy.com/xiaochengxu/static/images/file_img.jpg',
					title: '信息化环境中基于翻转课堂理念的教学设计研究',
					text: '钟晓流 ，宋述强 ，焦丽珍-《开放教育研究》-2013',
					time: '2013'
				}, {
					img: 'https://down.paperyy.com/xiaochengxu/static/images/file_img.jpg',
					title: '信息化环境中基于翻转课堂理念的教学设计研究',
					text: '钟晓流 ，宋述强 ，焦丽珍-《开放教育研究》-2013',
					time: '2013'
				}, {
					img: 'https://down.paperyy.com/xiaochengxu/static/images/file_img.jpg',
					title: '信息化环境中基于翻转课堂理念的教学设计研究',
					text: '钟晓流 ，宋述强 ，焦丽珍-《开放教育研究》-2013',
					time: '2013'
				}, {
					img: 'https://down.paperyy.com/xiaochengxu/static/images/file_img.jpg',
					title: '信息化环境中基于翻转课堂理念的教学设计研究',
					text: '钟晓流 ，宋述强 ，焦丽珍-《开放教育研究》-2013',
					time: '2013'
				}, {
					img: 'https://down.paperyy.com/xiaochengxu/static/images/file_img.jpg',
					title: '信息化环境中基于翻转课堂理念的教学设计研究',
					text: '钟晓流 ，宋述强 ，焦丽珍-《开放教育研究》-2013',
					time: '2013'
				}],
				page: 1,
				pageSize: 5,
				pages: 0	,
				loading: false,
      	finished: false			
			}
    },
  	watch: {

  	},
    methods: {
			tabChange(type) {
				if(type == 1){
					this.isShow = true
					this.type=type
				}else{
					this.isShow = false
					this.type = type
				}
			},
			onLoad() {
      // 异步更新数据
				setTimeout(() => {
					for (let i = 0; i < 10; i++) {
						this.listData.push(this.listData.length + 1);
					}
					// 加载状态结束
					this.loading = false;

					// 数据全部加载完成
					if (this.listData.length >= 40) {
						this.finished = true;
					}
				}, 500);
    	}
		}	
}
</script>
<style scoped lang="less">
.tab{
	width: 100%;
	height: 44px;
	background: #fff;
	border-bottom: 1px solid #E5E5E5;
	display: flex;
	justify-content: space-around;
	line-height: 44px;
	margin-bottom: 15px;
	.tab-item{
		padding: 0 5px;
	}
	.tab-item.active{
		border-bottom: 2px solid #00ABA2;
		padding: 0 5px;
		color: #00ABA2;
	}
}

.list-item{
	border-top: 1px solid #E5E5E5;
	border-bottom: 1px solid #E5E5E5;
	background: #fff;
	padding: 15px 15px 0px 15px;
	margin-bottom: 10px;
	.item-title{
		display: flex;
		justify-content: space-between;
		font-size: 16px;
		font-weight: bold;
		color: #000;
		div{
			overflow: hidden;
			text-overflow:ellipsis;
			white-space: nowrap;
			margin-right:15px;
		}
		img{
			width: 7px;
			height: 12px;
			vertical-align: middle;
			margin-top: 4px;
		}
	}
	.item-time{
		font-size: 10px;
		color: #999999;
		margin-top: 10px;
		margin-bottom: 15px;
	}
	.item-statu{
		border-top: 1px solid #E5E5E5;
		display: flex;
		justify-content: space-between;
		padding:10px 0;
		.statu-type{
			color: #666666;
			line-height:37px;
		}
		.item-btn{
			border: 1px solid #00ABA2;
			font-size: 14px;
			padding: 8px 16px;
			border-radius: 3px;
			color:#00ABA2;
		}
	}

}	

.nomore{
	text-align: center;
	margin-top: 10px;
	font-size: 14px;
	color: #ccc;
}
	
</style>
