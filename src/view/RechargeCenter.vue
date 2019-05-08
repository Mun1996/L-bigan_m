<template>
  <div class="container">
    <van-nav-bar
      title="充值中心"
      left-text="返回"
      left-arrow
      @click-left="$router.back(-1)"
    />
		<div class="tab">
			<div class="tab-item" :class="{'active':type==1}" @click="tabChange(1)">
				充值记录
			</div>
			<div class="tab-item" :class="{'active':type==2}" @click="tabChange(2)" >
				消费记录
			</div>
		</div>
		<div class="list" v-if="isShow">
			<ul>
 				<li class="list-item">
           <div class="item-statu">
             <div>
               <span class="ft-org">+10</span>
               <span>微信充值</span>
             </div>
             <div class="ft-org">付款失败</div>
           </div>
           <div class="item-time">
             <div class="ft-999" style="fontSize:13px;lineHeight:28px">2018-04-13 10:37</div>
             <div>
               <button class="pay-btn">付 款</button>
             </div>
           </div>
				</li>					
			</ul>
			<div class="nomore">没有更多了</div>
		</div>
		<div class="list" v-if="!isShow">
			<ul>
 				<li class="list-item">
           <div class="item-statu">
               <span class="ft-org" style="marginRight:3px">-10</span>
               <span class="item-title">aih哦ighpajgpajo紧迫爱国就怕  挨批挂牌更怕爱国发个亲爱二姑夫</span>
           </div>
           <div class="item-time">
             <div class="ft-999" style="fontSize:13px;lineHeight:28px">2018-04-13 10:37</div>
           </div>
				</li>					
			</ul>
			<div class="nomore">没有更多了</div>
		</div>
    <!-- <ListEmpty /> -->
  </div>
</template>
<script>
import ListEmpty from "../components/ListEmpty"

export default {
    name: "rechargecenter",
  	components: { ListEmpty },

    data() {
      return{
				isShow:true,
				type:1
      }
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
  padding-left:15px;
  .item-statu{
    display: flex;
    justify-content:space-between;
    padding: 15px 15px 15px 0;
    border-bottom: 1px solid #E5E5E5;
    font-size: 15px;
  }
  .item-time{
    display: flex;
    justify-content:space-between;
    padding: 10px 15px 10px 0;
  }
}	

.item-title{
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}

.nomore{
	text-align: center;
	margin-top: 10px;
	font-size: 14px;
	color: #ccc;
}

.pay-btn{
  width: 85px;
  height: 28px;
  color: #fff;
  border-radius: 3px;
  background: #e45649;
}
	
</style>
