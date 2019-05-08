<template>
  <div class="container">
    <van-nav-bar
      title="注册"
      left-text="返回"
      left-arrow
      @click-left="$router.back(-1)"
    />
    <div class="wrap">
      <div class="header">注册</div>
      <div class="title">账号：</div>
      <div class="input">
        <input type="number" placeholder="手机号/邮箱/用户名" class="email-input">  
      </div>
      <div class="title">验证码：</div>
      <div class="captcha">
        <input type="text" placeholder class="captcha-input" />
        <button v-show="!isSend" class="captcha-btn" type="button" @click="getCaptcha">获取验证码</button>
        <button v-show="isSend" class="captcha-btn-act" type="button">重新发送({{count}})</button>
      </div>
      <div class="notice">点击注册既表示已同意《paperyy注册协议》</div>
      <div class=""> 
        <button class="btn">注 册</button>
      </div>
      <div class="other-btn">
        <router-link to="login">
          <span style=" color: #666">账号密码登录</span>
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
import Validate from "../utils/validate";

export default {
    name: "register",
    data() {
      return{
        isSend:false,
        account:'',
        count:60,
        popupVisible:false,
      }
    },
    methods: {
      getCaptcha(){
        if (!this.account || !Validate.isPoneAvailable(this.account)) {
            return this.$toast("手机号输入不正确");
        }            
        this.isSend = true;
        let tm = setInterval(() => {
          this.count--;
          if (this.count === 0) {
            clearInterval(tm);
            this.count = 60;
            this.isSend = false;
          }
        }, 1000);
      },
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

//验证码
.captcha{
    height: 46px;
    border: 1px solid #ccc;
    padding-left: 10px;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom:20px ;
    background: #fff;
    display: flex;
		justify-content: space-between;
		
    .captcha-input{
        height: 46px;
    }
    .captcha-btn{
        background: #fff;
        padding: 0 10px;
        font-size: 15px;
        color: #00ABA2;
    }
    .captcha-btn-act{
        background: #fff;
        padding: 0 10px;
        font-size: 15px;
        color: #ccc;
    }
}

//notice
.notice{
  color:#999999;
  font-size: 13px;
  margin-bottom: 45px;
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
