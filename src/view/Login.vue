<template>
  <div class="container">
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="$router.back(-1)"
    />
    <div class="wrap">
      <div class="header">登录</div>
      <div class="title">账号：</div>
      <div class="input">
        <input type="number" placeholder="手机号/邮箱/用户名" class="email-input">  
      </div>
      <div class="title-pas">
        <div class="title">密码：</div>
        <div class="title">
          <router-link to="identity">
            <span style="color:#333333">忘记密码</span>  
          </router-link>
          </div>
      </div>
      <div class="input">
        <input type="password" placeholder="" class="email-input">  
      </div>
      <div class=""> 
        <button class="btn">登 录</button>
      </div>
      <div class="other-btn">
        <router-link to="register">
          <span style=" color: #666">注册</span>
        </router-link>
        |
        <span @click="popShow">其他方式登录</span>
      </div>
    </div>
    <van-popup
      v-model="popupVisible"
      >
      <div class="other-login">
        <div class="other-login-item">QQ账号登录</div>
        <div class="other-login-item">微博账号登录</div>
        <div class="cancel" @click="cancel">取 消</div>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
    name: "login",
    data() {
      return{
        popupVisible:false,
      }
    },
    methods: {
      popShow(){
        this.popupVisible=true;
      },
      cancel(){
        this.popupVisible=false;
      }
    }
}
</script>
<style scoped lang="less">
.header{
  font-size: 27px;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 35px;
}
.title{
  font-size: 17px;
  color: #333333;
  margin-bottom: 10px;
}

.title-pas{
  display: flex;
  justify-content: space-between;
}

.input{
  display: flex;
  .email-input{
    flex: 1;
    height: 46px;
    border: 1px solid #ccc;
    padding-left: 10px;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom:20px ;
  };
}
.btn{
  width: 100%;
  height:44px;
  border-radius: 5px;
  font-size:18px;
  margin-bottom:30px;
  color: #fff;
  background: #00B5AC;
}
.other-btn{
  text-align: center;
  margin-top: 45px;
  color: #666;
}

//弹窗
.other-login{
  width: 135px;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  .other-login-item{
    height: 50px;
    border-bottom: 1px solid #ccc;
    line-height: 50px;
  }
  .cancel{
    height: 50px;
    line-height: 50px;
    color: #999;
  }
}

</style>
