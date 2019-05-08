<template>
  <div class="container">
    <van-nav-bar
      title="报告详情"
      left-text="返回"
      left-arrow
      @click-left="$router.back(-1)"
    />
		<div class="detail-content">
      <div class="detail-title">
        <h3>减租剂对大鼠腹主动脉血流量影响的实验研究减租剂对影响的实验研究</h3>
        <div>重复比率：<span style="color:#e45649;fontSize:18px;fontWeight:bold">10%</span></div>
      </div>
      <div class="detail-info">
        <div class="detail-text">重复字数：4565字</div>
        <div class="detail-text">总字数：132456字</div>
        <div class="detail-text">提交时间：2019-04-29 2:56</div>
        <div class="detail-text">订单编号：654165ASAFAGFA1F56AXZV</div>
      </div>
      <div class="detail-info" style="border:0">
        <div class="detail-text">除去引用文献复制比：48.8%</div>
        <div class="detail-text">去除本人已发表文献复制比：48.8%</div>
        <div class="detail-text">单篇最大文字复制比：18.38%</div>
      </div>
    </div>
    <div class="wrap">
      <div class="detail-btn">
        <button class="btn-item bg-org ft-white" @click="popupVisibleShow">自动降重</button>
        <button class="btn-item bg-gre ft-white" @click="sendShow">发送到邮箱</button>
      </div>
      <div class="detail-btn">
        <button class="btn-item nor-btn" style="marginRight:10px">查看报告</button>
        <button class="btn-item nor-btn" @click="deleteClick">删除报告</button>
      </div>
    </div>
    <!-- 自动降重弹窗 -->
    <van-popup
      v-model="popupVisible"
      position="bottom"> 
      <div class="pop-title">
        <div>自动降重</div>  
        <img style="width: 40px;" src="../assets/close.png" @click="popupVisible = false" />
      </div>
      <div class="pop-content">
        <ul class="wrap">
          <li class="versions-item" @click="checkStatus">
            <img src="../assets/smart.png" alt="" class="versions-img">
            <div class="introduce">
              <div class="introduce-t">智能版<span style="fontSize:14px;color:#F5602A">（3元/千字）</span></div>
              <div class="introduce-b">人工智能降重，表达更为流畅</div>
            </div>
            <img src="../assets/uncheck.png" alt="" class="check" v-if="ischeck">
            <img src="../assets/check.png" alt="" class="check" v-if="!ischeck">
          </li>
          <li class="versions-item" style="border:0"  @click="checkStatus">
            <img src="../assets/smart.png" alt="" class="versions-img">
            <div class="introduce">
              <div class="introduce-t">智能版<span style="fontSize:14px;color:#F5602A">（3元/千字）</span></div>
              <div class="introduce-b">人工智能降重，表达更为流畅</div>
            </div>
            <img src="../assets/uncheck.png" alt="" class="check" v-if="!ischeck">
            <img src="../assets/check.png" alt="" class="check" v-if="ischeck">
          </li>
        </ul>
        <div class="wrap amount">
          共12345个字，共<span style="color:#F5602A">3元</span>
        </div>
        <div class="wrap submit">
          <button class="wrap bg-gre send-btn">提交降重</button>
        </div>
      </div>
    </van-popup>
    <!-- 发送到邮箱弹窗 -->
    <van-popup
      v-model="sendEmailPopupVisible"
      position="bottom"> 
      <div class="pop-title">
        <div>发送到邮箱</div>  
        <img style="width: 40px;" src="../assets/close.png" @click="sendEmailPopupVisible = false"  />
      </div> 
      <div class="sendemail">
        <input type="text" placeholder="填写有效邮箱地址" class="email-input">  
        <div class="nor-text">将发送下载后的文档到你的邮箱，稍后请查收，本平台会在一周后自动删除你的报告，建议下载长期保存</div>
        <button class="send-btn bg-gre">发 送</button>
      </div>    
    </van-popup>
    
  </div>
  
</template>
<script>

export default {
    name: "chachongreportsdetail",
    data(){
      return{
        message:"删除后所有信息均无法还原恢复",
        title:"确定要删除吗?",
        popupVisible:false,
        sendEmailPopupVisible:false,
        ischeck:true,
      }
    },
    methods: {
      // 降重弹窗
      popupVisibleShow() {
        this.popupVisible = true;
      },
      // 降重选择
      checkStatus() {
        this.ischeck = !this.ischeck;

      },
      // 发送邮箱弹窗
      sendShow() {
        this.sendEmailPopupVisible = true;
      },

      //删除报告
      deleteClick(){
        this.$dialog.confirm({
          message: "确定要删除吗？"
        });
      }
    }
}
</script>
<style scoped lang="less">
.detail-content{
  background: #fff;
  border-bottom: 1px solid #D9D9D9;
  padding: 30px 16px 0;
  box-sizing:content-box;
  margin-bottom: 30px;
  .detail-title{
    padding-bottom:19px;
    border-bottom: 1px solid #E5E5E5;
    h3{
      margin-bottom: 19px;
    }
    div{
      margin-top: 19px;
      font-size: 16px;
      color: #333;
    }
  };
  .detail-info{
    padding: 20px 0 10px;
    border-bottom: 1px solid #E5E5E5;
    .detail-text{
      font-size: 15px;
      color: #666666;
      margin-bottom: 10px;
    }
  }
}

.detail-btn{
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  .btn-item{
    width: 50%;
    height:44px;
    border-radius: 5px;
    font-size:18px;
  }
}


// 默认绿
.bg-gre{
  background: #00B5AC;
}

.bg-org{
  background: #e45649;
  margin-right: 10px
}

//默认按钮
.nor-btn{
  border: 1px solid #00ABA2;
  color: #00ABA2;
  background: transparent;
}


.pop-title{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e5e5e5;
  color: #333333;
  margin-bottom: 0;
  padding-left: 15px;
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 5px;
}

.pop-content{
  ul{
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    .versions-item{
      border-bottom: 1px solid #ccc;
      padding: 10px 0;
      overflow: hidden;
      .versions-img{
        float: left;
        width: 21px;
        height: 21px;
        padding: 10px;
        background: #00B5AC;
        border-radius: 5px;
        margin-right: 10px;
      };
      .introduce{
        float: left;
        .introduce-t{
          font-size: 16px;
          font-weight: bold;          
        }
      }
      .check{
        float: right;
        width: 20px;
        height: 20px;
        padding: 10px;
      }
    }
  };
  .amount{
    font-size: 16px;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  }
}

.send-btn{
  width: 100%;
  height:44px;
  border-radius: 5px;
  font-size:18px;
  margin-bottom:30px;
  color: #fff;
}


//发送邮箱弹窗
.sendemail{
  padding: 15px;
  display: flex;
  flex-direction:column;
  .email-input{
    flex: 1;
    height: 46px;
    border: 1px solid #ccc;
    padding-left: 10px;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom:20px ;
  };
  .nor-text{
    font-size: 16px;
    color: #999;
    margin-bottom:20px;
  };

}




</style>
