<template>
  <div class="container">
    <van-nav-bar
      title="充值"
      left-text="返回"
      left-arrow
      @click-left="$router.back(-1)"
    />
    <div class="wrap recharge-title">充值数量</div>
    <div class="recharge-amount">
      <div class="amount-chose">
        <div class="amount-item" :class="{'active':type==1}" @click="tabChange(1)">50<span class="sm">积分</span></div>
        <div class="amount-item" :class="{'active':type==2}" @click="tabChange(2)">100<span class="sm">积分</span></div>
        <div class="amount-item" :class="{'active':type==3}" @click="tabChange(3)">200<span class="sm">积分</span></div>
      </div>
      <div class="form-item">
        <div class="lable">其他金额</div>
        <input v-model="amount" type="text" placeholder="请输入整数" >
      </div>
    </div>
    <div class="wrap recharge-title">支付方式</div>
    <ul class="recharge-amount">
      <li class="versions-item" @click="checkStatus">
        <div class="introduce">
          <img src="../assets/alpay.png" alt="" class="versions-img">
          <div class="introduce-t">支付宝支付</div>
        </div>
        <img src="../assets/uncheck.png" alt="" class="check" v-if="ischeck">
        <img src="../assets/check.png" alt="" class="check" v-if="!ischeck">
      </li>
      <li class="versions-item" style="border:0"  @click="checkStatus">
        <div class="introduce">
          <img src="../assets/vx.png" alt="" class="versions-img">
          <div class="introduce-t">微信支付</div>
        </div>
        <img src="../assets/uncheck.png" alt="" class="check" v-if="!ischeck">
        <img src="../assets/check.png" alt="" class="check" v-if="ischeck">
      </li>
    </ul>
    <div class="t-a-c" style="marginBottom:20px">
      <span style="fontSize:15px;color:#333333">应付金额：</span><span style="fontSize:25px;color:#F5602A">{{amount==''?0 :amount}}</span><span style="fontSize:15px;color:#F5602A">元</span><span style="fontSize:11px;color:#999999">（1元=1积分）</span>
    </div>
    <div class="wrap">
      <mt-button type="danger" size="large">立即充值</mt-button>
    </div>
  </div>
</template>
<script>
export default {
    name: "recharge",
    data() {
      return{
        type:1,
        amount:'',
        ischeck:true,
      }
    },
    computed :{

    },
    methods: {
      tabChange(type) {
        this.type = type;
        if(type==1){
          this.amount = 50
        }else if(type == 2){
          this.amount = 100
        }else if(type == 3){
          this.amount = 200
        }
        
      },
      checkStatus() {
        this.ischeck = !this.ischeck;

      },
    }
}
</script>
<style scoped lang="less">
  .recharge-title{
    font-size: 14px;
    color: #888;
    margin: 15px 0 10px;
  }

  .recharge-amount{
    background: #fff;
    border-top: 1px solid #D9D9D9;
    border-bottom: 1px solid #D9D9D9;
    padding: 0 0 0 15px;   
  }

  .amount-chose{
    display: flex;
    border-bottom: 1px solid #E5E5E5;
    padding: 20px 0;
    .amount-item{
      flex: 1;
      height: 44px;
      border: 1px solid #DBDBDB;
      border-radius: 5px;
      margin-right:10px;
      line-height: 44px;
      text-align: center;
      font-size: 25px;
      font-weight: bold;
    }
    .amount-item.active{
      border: 1px solid #f5602a;
      color: #F86868;
      position:relative;
    }
    .amount-item.active::after{
      content: "";
      background: url("../assets/select.png");
      position: absolute;
      width: 1.8rem;
      bottom: -1px;
      right: -1px;
      border-radius: 0 0 4px 0;
      height: 1.5rem;
      background-size: contain;
      border: none;
      background-repeat: no-repeat;
    }
  }



  .form-item {
    padding: 15px 0;
    background: #fff;
    display: flex;
    font-size: 16px;
    font-family:"PingFang-SC-Bold";
    .lable{
      font-weight: bold;
      margin-right:20px;
    }
    input{
      flex: 1;
      border: none;
      background: transparent;
    }
  }

  ul{
    border-top: 1px solid #D9D9D9;
    border-bottom: 1px solid #D9D9D9;
    margin-bottom: 20px;
    background: #fff;
    .versions-item{
      border-bottom: 1px solid #ccc;
      padding: 20px 0;
      display: flex;
      justify-content: space-between;
      .introduce{
        display: flex;
        .versions-img{
          width: 23px;
          height: 23px;
          margin-right: 10px;
        };
        .introduce-t{
          font-size: 16px;         
        }
      }
      .check{
        width: 20px;
        height: 20px;
        margin-right: 15px;
      }
    }
  };
  .amount{
    font-size: 16px;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  }


  .sm{
    font-size: 15px;
    display: inline-block;
    margin-left: 3px;
    font-weight: normal;
    margin-top: -5px;
  }
</style>
