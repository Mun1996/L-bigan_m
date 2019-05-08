<template>
  <ul class="container">
		<li @click="tabClick(1)">
			<router-link to="/">
				<img src="../assets/search-active.png" alt="" v-if="sel==1?true:false">
				<img src="../assets/search.png" alt="" v-if="sel==1?false:true">
				<div class="word">查重</div>
			</router-link>
		</li>
		<li @click="tabClick(2)">
			<router-link to="/center">
				<img class="" src="../assets/user-active.png" alt="" v-if="sel==2?true:false"> 
				<img class="" src="../assets/user.png" alt="" v-if="sel==2?false:true"> 
				<div class="word">我的</div>
			</router-link>
		</li>
  </ul>
</template>
<script>
export default {
		name: "FooterBar",
		props:{
			select:{
				type:Number
			}
		},
		data(){
			return{
				sel:this.select
			}
		},
		mounted(){

		},
    methods: {
			tabClick(val){
			}
    }
}
</script>
<style scoped lang="less">
.container{
	width: 100%;
	position: fixed;
	bottom:0;

	border-top:1px solid #C5C6C7;
	background: #fff;
	padding: 5px 0;
	display: flex;
	justify-content: space-around;
}

.word{
	font-size: 10px;
	color: #7C8289;
	text-align: center;
}
</style>
