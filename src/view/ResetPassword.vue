<template>
  <div>
    <div class="container" v-if="succsShow">
      <van-nav-bar
        title="重置密码"
        left-text="返回"
        left-arrow
        @click-left="$router.back(-1)"
      />
      <div class="wrap">
        <div class="header">重置密码</div>
        <div class="title">密码：</div>
        <div class="input">
          <input type="password" v-model="pwd" placeholder="请输入密码" class="email-input">  
        </div>
        <div class="title">确认密码：</div>
          <div class="input">
            <input type="password" v-model="pwdconfirm" placeholder="请再次输入密码" class="email-input">  
          </div>
        <div class=""> 
          <button class="btn" @click="onSignin">重置密码</button>
        </div>
      </div>
    </div>
    <div class="container" v-if="!succsShow">
      <div class="success">
        <img src="../assets/ok.png" alt="">
        <div class="sucword">密码重置成功，{{count}}秒后登录</div>
      </div>
    </div>
  </div>

</template>
<script>
import Validate from "../utils/validate";

export default {
  name: "resetpassword",
  data() {
    return{
      pwd:'',
      pwdconfirm:'',
      succsShow:true,
      count:10
    }
  },
  methods: {
    onSignin() {
      if(this.pwd !== this.pwdconfirm) {
        return this.$toast("两次输入密码不一致");
      }
      this.succsShow = false
      let tm = setInterval(() => {
        this.count--;
        if (this.count === 0) {
          clearInterval(tm);
          this.succsShow = true

        }
      }, 1000);      
    },    
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

.captcha{
    height: 46px;
    border: 1px solid #ccc;
    padding-left: 10px;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom:45px ;
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



.btn{
  width: 100%;
  height:44px;
  border-radius: 5px;
  font-size:18px;
  margin-top: 45px;
  margin-bottom:30px;
  color: #fff;
  background: #00B5AC;
}

//成功页
.success{
  text-align: center;
  margin-top: 135px;
  .sucword{
    color: #333;
    font-size: 16px;
    margin-top: 27px;
  }
}

</style>
