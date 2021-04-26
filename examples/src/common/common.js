// import {Constants} from '@/common/env'
//变量池
let variablePool = {
  //变量池
  language: (function() {
    var lang = (navigator.language || "").toLowerCase();
    var language = lang.indexOf("zh") > -1 ? "ZH-CN" : "EN";
    return language.toUpperCase();
  })(),
  isPC: (function() {
    let userAgentInfo = (navigator.userAgent || "").toLowerCase();
    let Agents = [
      "Android",
      "iPhone",
      "SymbianOS",
      "Windows Phone",
      "iPad",
      "iPod"
    ];
    let flag = true;
    for (let i = 0; i < Agents.length; i++) {
      let agent = Agents[i].toLowerCase();
      if (userAgentInfo.indexOf(agent) > -1) {
        flag = false;
        break;
      }
    }
    return flag;
  })(),
  countdownTimeIds: {
    //存储倒计时定时器id
  },
  regs: {
    email: /^[A-Za-zd0-9]+([-_.][A-Za-zd0-9]+)*@([A-Za-zd0-9]+[-.])+[A-Za-zd]{2,5}$/, //电子邮件
    pass: /^(?![0-9]+$)(?![a-zA-Z]+$)(?![~!`@#$%^&*()_+|[\]\-={};':"<>?,./]+$)^[0-9A-Za-z~!`@#$%^&*()_+|[\]\-={};':"<>?,./]{8,32}$/, //密码
    name: /^(?=.*[a-zA-Z0-9])[^]{1,50}$/, //姓名
    mobile: /^[\d]+\.?\d*$/, //手机号 国内外
    number: /^[0-9]+$/, //数字
    passport: /^(?=.*[a-zA-Z0-9])[^]{4,18}$/, //护照
    companyAddress: /^[^<>]{1,200}$/, //公司地址
    // companyAddress:/^[\d\w\u4e00-\u9fa5,.-]{1,200}$/,//公司地址
    applicantName: /^[^<>]{1,30}$/, //申请人姓名
    // applicantName:/^[\d\w\u4e00-\u9fa5,.-]{1,30}$/,//申请人姓名
    fundPass: /^[0-9]{6}$/, //资金密码
    noChinese: /[^\\x00-\\xff]/gi
  }
};

let common = {
  //是否为debug模式
  debugMode: (function() {
    var flag = true;
    if (process.env.NODE_ENV == "production") {
      flag = false;
    }
    console.log("current env is ", process.env.NODE_ENV);
    return flag;
  })(),
  //变量池
  variablePool: variablePool,
  log() {
    let that = this;
    if (console) {
      that.debugMode && console.log.apply(console, arguments);
    }
  },
  error() {
    if (console) {
      console.error.apply(console, arguments);
    }
  },
  warn() {
    let that = this;
    if (console) {
      that.debugMode && console.warn.apply(console, arguments);
    }
  },
  info() {
    let that = this;
    if (console) {
      that.debugMode && console.info.apply(console, arguments);
    }
  },
  debug() {
    let that = this;
    if (console) {
      that.debugMode && console.debug.apply(console, arguments);
    }
  },
  group: function(msg) {
    let that = this;
    if (console) {
      that.debugMode && console.group.apply(console, arguments);
    }
  },
  addClass(obj, name) {
    // that.replaceBodyClass('\\s\\s*(dark|light)',userInfo?userInfo.pageUserTheme:'')
    let reg = new RegExp("\\s\\s*" + name, "gi");
    let className = obj.className || "";
    if (className.split(/\s\s*/).indexOf(name) > -1) {
      return;
    }
    this.log("----className", className);
    className = className.replace(reg, "") + " " + name;
    obj.className = className;
  },
  removeClass(obj, name) {
    // that.replaceBodyClass('\\s\\s*(dark|light)',userInfo?userInfo.pageUserTheme:'')
    let reg = new RegExp("\\s\\s*" + name, "gi");
    let className = obj.className || "";
    className = className.replace(reg, "");
    obj.className = className;
  },
  load_js(src, callback) {
    let set_src = src.split(",");
    let load_num = 0;
    for (let i = 0; i < set_src.length; i++) {
      let url = set_src[i];
      let obj = document.getElementById(url);
      if (!obj) {
        let js = document.createElement("script");
        js.src = url;
        // js.async = true
        // js.defer = true
        js.id = url;
        document.head.appendChild(js);
        if (callback && typeof callback == "function") {
          js.onload = function() {
            ++load_num;
            //全部加载完毕
            if (load_num === set_src.length) {
              callback();
            }
          };
        }
      } else {
        ++load_num;
        //全部加载完毕
        if (load_num === set_src.length) {
          callback();
        }
      }
    }
  },
  substitute(str, data) {
    if (data && typeof data == "object") {
      return str.replace(/\{([^{}]+)\}/g, function(match, key) {
        var value = data[key];
        return value !== undefined ? "" + value : "";
      });
    } else {
      return str.toString();
    }
  },
  removeItem(key, type) {
    if (type == 1) {
      sessionStorage.removeItem(key);
    } else if (type == 2) {
      localStorage.removeItem(key);
    } else {
      localStorage.removeItem(key);
    }
  },
  //设置本地存储数据
  setItem(key, value, type) {
    if (!value) {
      value = null;
    }
    try {
      if (type == 1) {
        sessionStorage.setItem(key, value);
        if (!value) {
          sessionStorage.removeItem(key);
        }
      } else if (type == 2) {
        localStorage.setItem(key, value);
        if (!value) {
          localStorage.removeItem(key);
        }
      } else {
        localStorage.setItem(key, value);
        if (!value) {
          localStorage.removeItem(key);
        }
      }
    } catch (oException) {
      if (oException.name == "QuotaExceededError") {
        common.log("超出本地存储限额！");
        //如果历史信息不重要了，可清空后再设置
        let userInfo = $vm.$store.getters.getUserInfo;
        localStorage.clear();
        $vm.$store.commit("setUserInfo", userInfo);
        if (type == 1) {
          sessionStorage.setItem(key, value);
          if (!value) {
            sessionStorage.removeItem(key);
          }
        } else if (type == 2) {
          localStorage.setItem(key, value);
          if (!value) {
            localStorage.removeItem(key);
          }
        } else {
          localStorage.setItem(key, value);
          if (!value) {
            localStorage.removeItem(key);
          }
        }
      }
    }
  },
  //获取本地存储数据
  getItem(key, type) {
    let item = null;
    if (type == 1) {
      item = sessionStorage.getItem(key);
    } else if (type == 2) {
      item = localStorage.getItem(key);
    } else {
      item = localStorage.getItem(key);
    }
    if (item == "undefined") {
      item = null;
    }
    return item;
  },
  //获取语言
  lang(langObj, key, options) {
    let str = key;
    if (langObj && langObj[key]) {
      str = langObj[key];
    }
    if (options) {
      str = common.substitute(str, options);
    }
    return str;
  }
};
window.YoCommon = common;
export default common;
