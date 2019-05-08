<template>
  <div class="container">
    <van-nav-bar
      title="首页"
    />
    <div class="form-item">
      <div class="lable">标题</div>
      <input v-model="title" type="text" placeholder="请输入论文标题" >
    </div>
    <div class="form-item">
      <div class="lable">粘贴</div>
      <textarea v-model="content" style="height: 11rem; resize: none;" placeholder="提交内容建议去除封面、目录、附录仅提交和正文" ></textarea>
    </div>
    <div class="count">
      共<span v-text='textCount'></span>个字
    </div>
    <div class="operation">
      <button class="btn submit">提交查重</button>
      <router-link to="ChachongReports">
        <button class="btn report">
          我的报告
        </button>
      </router-link>
    </div>
    <Footer :select="1"/>
  </div>
</template>

<script>
import Footer from'../components/Footer'

export default {
  name: 'home',
  data () {
    return {
      title: '',
      content:'',
      textCount:0,
    }
  },
  components:{
    Footer
  },
  created(){
    this.$router.push('/')
  },
  watch : {
    content() {
      this.textCount = this.content.replace(/\s+/g, "").length;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.form-item {
  margin-top: 10px;
  padding: 16px;
  border-top: 1px solid #D9D9D9;
  border-bottom: 1px solid #D9D9D9;
  background: #fff;
  display: flex;
  font-size: 16px;
  font-family:"PingFang-SC-Bold";
  .lable{
    font-weight: bold;
    margin-right:50px;

  }
  input{
    flex: 1;
    border: none;
    background: transparent;
  }
  textarea{
    flex:1;
    border: none;
    background: transparent;
    font-family:"PingFang-SC-Bold";
    
  }
}

  .count{
    text-align: center;
    font-size: 14px;
    color: #999;
    margin-top: 26px;
    margin-bottom: 16px;
  }
  //操作
  .operation{
    padding: 0 15px;
    .text{
      color: #bbb;
      font-size: 12px;
      text-align: center;
      margin-bottom: 30px;
    }
  }
  
  .btn{
    width: 100%;
    height: 44px;
    border-radius: 5px;
  }
  .submit{
    background: #00B5AC;
    color: #fff;
    margin-bottom: 15px;
  }

  .report{
    background: transparent;
    color: #00B5AC;
    border: 1px solid #00B5AC;
  }

</style>
