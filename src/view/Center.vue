<template>
  <div class="container">
    <van-nav-bar
      title="个人中心"
    />
    <div class="user-info">
      <img class="logo" src="../assets/logo.png" alt="">
      <div class="login-contet" v-if="isShow" >
        <div class="hello" >Hello,你好</div>
        <button class="login-btn" @click="login">注册/登录</button>
      </div>
      <div class="info-content"  v-if="!isShow">
        <img src="../assets/logo.png" alt="" class="header-img">
        <div>
          <span class="name">你叫什么呢？</span>
          <span class="type">微信</span>
        </div>
      </div>
    </div>
    <div class="list">
      <ul>
        <li>
          <div>
            <img src="../assets/file1.png" alt="" class="icon">  
            <span>查重报告</span>
          </div>
          <img src="../assets/arr-right.png" alt="" class="arr-right">
        </li>
        <li style="border:0">
          <div>
            <img src="../assets/file2.png" alt="" class="icon">
            <span>降重报告</span>
          </div>
          <img src="../assets/arr-right.png" alt="" class="arr-right">
        </li>
      </ul>
    </div>
    <div class="list">
      <ul>
        <li style="border:0">
          <div>
            <img src="../assets/coin.png" alt="" class="icon">  
            <span>积分</span>
          </div>
          <img src="../assets/arr-right.png" alt="" class="arr-right">
        </li>
      </ul>
    </div>
    <div class="operation">
      <div class="text-small">如遇有疑问咨询(客服QQ:2736568074 微信:idolschool04)</div>
      <router-link to="recharge">
        <button class="btn recharge-btn">充 值</button>
      </router-link>
      <button class="btn logout-btn">退出登录</button>
    </div>
    <Footer :select="2"/>
  </div> 
</template>
<script>
import Footer from'../components/Footer'

  export default {
    name: "center",
    data() {
      return{
        isShow:true,
      }
    },
    components:{
      Footer
    },
    created() {

    },

    methods: {
      login() {
        this.$router.push('login')
        this.isShow = !this.isShow;
      }
    }
  }
</script>
<style scoped lang="less">
  img{
    vertical-align: middle;
  }
  
  //用户信息----登录
  .user-info{
    position: relative;
    background: #fff;
    padding:10px 15px;
    height:130px;
    margin-bottom: 10px;
    .logo{
      position:absolute;
      top:10px;
      width: 63px;
      height: 27px;
    }
    .login-contet{
      text-align: center;
      .hello{
        font-size: 17px;
        margin-top: 40px;
        color: #333333;
      }
      .login-btn{
        width: 150px;
        height: 42px;
        border-radius: 5px;
        background: #00ABA2;
        color: #fff;
        font-size: 18px;
        margin-top: 15px;
        font-family: PingFang-SC-Medium;
      }
    }
  }  
  .info-content{
    text-align: center;
    .header-img{
      width: 90px;
      height: 90px;
      border-radius: 45px;
      margin-top: 20px;
    }
    div{
      .name{
        color: #333;
        font-size: 15px;
      }
      .type{
        font-size: 12px;
        padding:3px 6px;
        color: #fff;
        background: #8BC678;
        border-radius: 2px;
      }
    }

  }

  //列表
  .list{
    border-top: 1px solid #D9D9D9;
    border-bottom: 1px solid #D9D9D9;
    background: #fff;
    padding-left:15px;
    margin-bottom: 10px;
  }
  
  ul{
    li{
      border-bottom: 1px solid #E5E5E5;
      display: flex;
      justify-content:space-between;
      padding: 10px 15px 10px 0;
      div{
        color:#333;
        font-size: 16px;
      }
    }
  }

  .icon{
    margin-right: 12px;
  }

  .arr-right{
    width: 8px;
    height: 13px;
    margin-top: 2px;
  }

  //操作
  .operation{
    padding: 0 15px;
    .text-small{
      color: #bbb;
      font-size: 12px;
      text-align: center;
      margin-bottom: 25px;
    }
  }
  
  .btn{
    width: 100%;
    height: 44px;
    border-radius: 5px;
  }
  .recharge-btn{
    background: #F86868;
    color: #fff;
    margin-bottom: 15px;
  }

  .logout-btn{
    background: #ccc;
    color: #888;
  }



</style>
