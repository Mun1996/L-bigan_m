// import portrait from "@/assets/default.jpg";
// import selfPortrait from "@/assets/self.png";
// import selfPortrait2 from "@/assets/self2.png";
let store = {
  state: {
    isLogin: null, // boolean

    account: "", // 18901010078
    mobile: "",
    // defaultPortrait: selfPortrait,
    // defaultPortrait2: selfPortrait2,
    // portrait: portrait,
    defaultPortrait: '',
    defaultPortrait2: '',
    portrait: '',
    isVip: null, // boolean
    points: 0, // 钱
    integral: 0, // 积分
    vipTime: "",
    isShowMenu: false,
    wxconfig: {},
    isActivity: 0,
    code: ""
  },
  getLoginState() {
    if (this.state.isLogin === null) {
      this.state.isLogin =
        localStorage.getItem("bg_loginState") === "true" ? true : false;
    }
    return this.state.isLogin;
  },
  setLoginState(flag) {
    localStorage.setItem("bg_loginState", flag);
    this.state.isLogin =
      localStorage.getItem("bg_loginState") === "true" ? true : false;
  },
  getCode() {
    if (!this.state.code) {
      this.state.code = localStorage.getItem("bg_code");
    }
    return this.state.code;
  },
  setCode(value) {
    localStorage.setItem("bg_code", value);
    this.state.code = localStorage.getItem("bg_code");
  },
  getIsActivity() {
    if (!this.state.isActivity) {
      this.state.isActivity = localStorage.getItem("bg_isActivity");
    }
    return this.state.isActivity;
  },
  setIsActivity(flag) {
    localStorage.setItem("bg_isActivity", flag);
    this.state.isActivity = localStorage.getItem("bg_isActivity");
  },
  getAccount() {
    if (!this.state.account) {
      this.state.account = localStorage.getItem("bg_account");
    }
    return this.state.account;
  },
  setAccount(value) {
    localStorage.setItem("bg_account", value);
    this.state.account = localStorage.getItem("bg_account");
  },
  getMobile() {
    if (!this.state.mobile) {
      this.state.mobile = localStorage.getItem("bg_mobile");
    }
    return this.state.mobile;
  },
  setMobile(value) {
    localStorage.setItem("bg_mobile", value);
    this.state.mobile = localStorage.getItem("bg_mobile");
  },
  getVip() {
    if (this.state.isVip === null) {
      this.state.isVip =
        localStorage.getItem("bg_vip") * 1 === 0 ? false : true;
    }
    return this.state.isVip;
  },
  setIsVip(value) {
    localStorage.setItem("bg_vip", value);
    if (localStorage.getItem("bg_vip") * 1 === 0) {
      this.state.isVip = false;
    } else {
      this.state.isVip = true;
    }
  },
  getPortrait() {
    if (localStorage.getItem("bg_portrait")) {
      this.state.portrait = localStorage.getItem("bg_portrait");
    }
    return this.state.portrait;
  },
  setPortrait(value) {
    localStorage.setItem("bg_portrait", value);
    this.state.portrait = value;
  },
  getPoints() {
    if (!this.state.points) {
      this.state.points = localStorage.getItem("bg_points");
    }
    return this.state.points;
  },
  setPoints(value) {
    localStorage.setItem("bg_points", value);
    this.state.points = localStorage.getItem("bg_points");
  },
  getIntegral() {
    if (!this.state.integral) {
      this.state.integral = localStorage.getItem("bg_integral");
    }
    return this.state.integral;
  },
  setIntegral(value) {
    localStorage.setItem("bg_integral", value);
    this.state.integral = value;
  },
  getVipTime() {
    if (!this.state.vipTime) {
      this.state.vipTime = localStorage.getItem("bg_viptime");
    }
    return this.state.vipTime;
  },
  setVipTime(value) {
    localStorage.setItem("bg_viptime", value);
    this.state.vipTime = value;
  },
  setShowMenuAction() {
    this.state.isShowMenu = true;
  },
  setHideMenuAction() {
    this.state.isShowMenu = false;
  },
  setWxconfig(value) {
    // {{value}}:String
    localStorage.setItem("bg_wxconfig", value);
    this.state.wxconfig = JSON.parse(value);
  },
  getWxconfig() {
    if (!this.state.wxconfig) {
      this.state.wxconfig = JSON.parse(localStorage.getItem("bg_wxconfig"));
    }
    return this.state.wxconfig;
  },

  logout() {
    this.state.isLogin = false;
    this.state.account = "";
    this.state.mobile = "";
    this.state.portrait = portrait;
    this.state.isVip = null;
    this.state.points = 0;
    this.state.integral = 0;
    this.state.vipTime = "";
    this.state.isShowMenu = false;
    this.state.wxconfig = {};
    this.state.isActivity = 0;
    this.state.code = "";

    const storageArray = [
      "bg_token",
      "bg_uid",
      "bg_loginState",
      "bg_account",
      "bg_mobile",
      "bg_vip",
      "bg_points",
      "bg_integral",
      "bg_viptime",
      "bg_portrait",
      "bg_wxconfig",
      "bg_isActivity",
      "bg_code"
    ];
    storageArray.forEach(item => {
      localStorage.removeItem(item);
    });
  }
};

export default store;
