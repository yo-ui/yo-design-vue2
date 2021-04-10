<template>
  <div class="yo-icon-page">
    <yo-anchor :text="'Icon ' + $lang('图标')" size="30"></yo-anchor>
    <p>{{ $lang("提供了一套常用的图标集合。") }}</p>
    <p>
      {{ $lang("基础组件，用于文字超链接。") }}
    </p>
    <p
      class="alert"
      v-html="$lang('注意：非 template/render 模式下，需使用 <code>y-icon</code>。')"
    ></p>

    <yo-anchor :text="$lang('组件注册')" size="24"></yo-anchor>
    <yo-code type="javascript" src="/components/demos/basic/icon/use.js"></yo-code>

    <yo-anchor :text="$lang('代码示例')" size="24"></yo-anchor>
    <yo-example demo="basic/icon/normal">
      <template v-slot:desc>
        <yo-desc :title="$lang('自定义图标用法')">
          {{
            $lang(
              "YOUI（yo） 的 Icon 支持使用第三方自定义图标，你可以引入任意的字体文件库来使用。"
            )
          }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="basic/icon/color">
      <template v-slot:desc>
        <yo-desc :title="$lang('图标颜色')">
          {{ $lang("定义图标的颜色。") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="basic/icon/size">
      <template v-slot:desc>
        <yo-desc :title="$lang('图标大小')">
          {{ $lang("定义图标的大小。") }}
        </yo-desc>
      </template>
    </yo-example>
    <!--     
    <div class="yo-demo">
      <i class="yo-icon-edit"></i>
      <i class="yo-icon-share"></i>
      <i class="yo-icon-remove"></i>
      <y-button type="primary" icon="search">{{ $lang("搜索") }}</y-button>
    </div> -->
    <div class="search-box">
      <y-input
        size="l"
        icon="search"
        clearable
        v-model="keywords"
        :placeholder="$lang('请输入英文关键词进行搜索，如search')"
      ></y-input>
    </div>
    <p class="center">
      {{ $lang("点击下面的图标按钮可以直接复制组件代码") }}
    </p>
    <ul class="icon-list">
      <li v-for="item in iconList" :key="item.code">
        <i :class="`yo-icon-${item.code}`"></i>
        {{ `yo-icon-${item.code}` }}
      </li>
      <!-- <li>
        <i class="yo-icon-y"></i>
        yo-icon-y
      </li>
      <li>
        <i class="yo-icon-google"></i>
        yo-icon-google
      </li>
      <li>
        <i class="yo-icon-setting"></i>
        yo-icon-setting
      </li>
      <li>
        <i class="yo-icon-print"></i>
        yo-icon-print
      </li>
      <li>
        <i class="yo-icon-full"></i>
        yo-icon-full
      </li>
      <li>
        <i class="yo-icon-plus"></i>
        yo-icon-plus
      </li>
      <li>
        <i class="yo-icon-minus"></i>
        yo-icon-minus
      </li>
      <li>
        <i class="yo-icon-message"></i>
        yo-icon-message
      </li>
      <li>
        <i class="yo-icon-facebook"></i>
        yo-icon-facebook
      </li>
      <li>
        <i class="yo-icon-more"></i>
        yo-icon-more
      </li>
      <li>
        <i class="yo-icon-search"></i>
        yo-icon-search
      </li>
      <li>
        <i class="yo-icon-female"></i>
        yo-icon-female
      </li>
      <li>
        <i class="yo-icon-network-error"></i>
        yo-icon-network-error
      </li>
      <li>
        <i class="yo-icon-password"></i>
        yo-icon-password
      </li>
      <li>
        <i class="yo-icon-calendar"></i>
        yo-icon-calendar
      </li>
      <li>
        <i class="yo-icon-alipay"></i>
        yo-icon-alipay
      </li>
      <li>
        <i class="yo-icon-star"></i>
        yo-icon-star
      </li>
      <li>
        <i class="yo-icon-like"></i>
        yo-icon-like
      </li>
      <li>
        <i class="yo-icon-baidu"></i>
        yo-icon-baidu
      </li>
      <li>
        <i class="yo-icon-voice"></i>
        yo-icon-voice
      </li>
      <li>
        <i class="yo-icon-twitter"></i>
        yo-icon-twitter
      </li>
      <li>
        <i class="yo-icon-category"></i>
        yo-icon-category
      </li>
      <li>
        <i class="yo-icon-share"></i>
        yo-icon-share
      </li>
      <li>
        <i class="yo-icon-mobile"></i>
        yo-icon-mobile
      </li>
      <li>
        <i class="yo-icon-video"></i>
        yo-icon-video
      </li>
      <li>
        <i class="yo-icon-like1"></i>
        yo-icon-like1
      </li>
      <li>
        <i class="yo-icon-right"></i>
        yo-icon-right
      </li>
      <li>
        <i class="yo-icon-phone"></i>
        yo-icon-phone
      </li>
      <li>
        <i class="yo-icon-location"></i>
        yo-icon-location
      </li>
      <li>
        <i class="yo-icon-left"></i>
        yo-icon-left
      </li>
      <li>
        <i class="yo-icon-refresh"></i>
        yo-icon-refresh
      </li>
      <li>
        <i class="yo-icon-user"></i>
        yo-icon-user
      </li>
      <li>
        <i class="yo-icon-cancel"></i>
        yo-icon-cancel
      </li>
      <li>
        <i class="yo-icon-success"></i>
        yo-icon-success
      </li>
      <li>
        <i class="yo-icon-cart"></i>
        yo-icon-cart
      </li>
      <li>
        <i class="yo-icon-zan"></i>
        yo-icon-zan
      </li>
      <li>
        <i class="yo-icon-time"></i>
        yo-icon-time
      </li>
      <li>
        <i class="yo-icon-email"></i>
        yo-icon-email
      </li>
      <li>
        <i class="yo-icon-edit"></i>
        yo-icon-edit
      </li>
      <li>
        <i class="yo-icon-wechat"></i>
        yo-icon-wechat
      </li>
      <li>
        <i class="yo-icon-table"></i>
        yo-icon-table
      </li>
      <li>
        <i class="yo-icon-image"></i>
        yo-icon-image
      </li>
      <li>
        <i class="yo-icon-delete"></i>
        yo-icon-delete
      </li>
      <li>
        <i class="yo-icon-male"></i>
        yo-icon-male
      </li>
      <li>
        <i class="yo-icon-add"></i>
        yo-icon-add
      </li>
      <li>
        <i class="yo-icon-home"></i>
        yo-icon-home
      </li>
      <li>
        <i class="yo-icon-service"></i>
        yo-icon-service
      </li>
      <li>
        <i class="yo-icon-category1"></i>
        yo-icon-category1
      </li>
      <li>
        <i class="yo-icon-return"></i>
        yo-icon-return
      </li>
      <li>
        <i class="yo-icon-notice"></i>
        yo-icon-notice
      </li>
      <li>
        <i class="yo-icon-voice1"></i>
        yo-icon-voice1
      </li>
      <li>
        <i class="yo-icon-music"></i>
        yo-icon-music
      </li>
      <li>
        <i class="yo-icon-user1"></i>
        yo-icon-user1
      </li>
      <li>
        <i class="yo-icon-remove"></i>
        yo-icon-remove
      </li>
      <li>
        <i class="yo-icon-calendar"></i>
        yo-icon-calendar
      </li>
      <li>
        <i class="yo-icon-info"></i>
        yo-icon-info
      </li>
      <li>
        <i class="yo-icon-warn"></i>
        yo-icon-warn
      </li>
      <li>
        <i class="yo-icon-loading4"></i>
        yo-icon-loading4
      </li>
      <li>
        <i class="yo-icon-close"></i>
        yo-icon-close
      </li>
      <li>
        <i class="yo-icon-loading1"></i>
        yo-icon-loading1
      </li>
      <li>
        <i class="yo-icon-eye-close"></i>
        yo-icon-eye-close
      </li>
      <li>
        <i class="yo-icon-upload"></i>
        yo-icon-upload
      </li>
      <li>
        <i class="yo-icon-close1"></i>
        yo-icon-close1
      </li>
      <li>
        <i class="yo-icon-loading3"></i>
        yo-icon-loading3
      </li>
      <li>
        <i class="yo-icon-link"></i>
        yo-icon-link
      </li>
      <li>
        <i class="yo-icon-upload1"></i>
        yo-icon-upload1
      </li>
      <li>
        <i class="yo-icon-loading"></i>
        yo-icon-loading
      </li>
      <li>
        <i class="yo-icon-eye"></i>
        yo-icon-eye
      </li>
      <li>
        <i class="yo-icon-search"></i>
        yo-icon-search
      </li>
      <li>
        <i class="yo-icon-code"></i>
        yo-icon-code
      </li>
      <li>
        <i class="yo-icon-copy"></i>
        yo-icon-copy
      </li>
      <li>
        <i class="yo-icon-down"></i>
        yo-icon-down
      </li>
      <li>
        <i class="yo-icon-up"></i>
        yo-icon-up
      </li>
      <li>
        <i class="yo-icon-power"></i>
        yo-icon-power
      </li>
      <li>
        <i class="yo-icon-switch-off"></i>
        yo-icon-switch-off
      </li>
      <li>
        <i class="yo-icon-switch-on"></i>
        yo-icon-switch-on
      </li>
      <li>
        <i class="yo-icon-check"></i>
        yo-icon-check
      </li>
      <li>
        <i class="yo-icon-check-on"></i>
        yo-icon-check-on
      </li>
      <li>
        <i class="yo-icon-check-off"></i>
        yo-icon-check-off
      </li>
      <li>
        <i class="yo-icon-radio1-off"></i>
        yo-icon-radio1-off
      </li>
      <li>
        <i class="yo-icon-radio1-on"></i>
        yo-icon-radio1-on
      </li>
      <li>
        <i class="yo-icon-radio11-on"></i>
        yo-icon-radio11-on
      </li>
      <li>
        <i class="yo-icon-radio-off"></i>
        yo-icon-radio-off
      </li>
      <li>
        <i class="yo-icon-radio-on"></i>
        yo-icon-radio-on
      </li>
      <li>
        <i class="yo-icon-radio2-off"></i>
        yo-icon-radio2-off
      </li>
      <li>
        <i class="yo-icon-radio2-on"></i>
        yo-icon-radio2-on
      </li> -->
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        keywords: "",
        icons: Object.freeze([
          { code: "y" },
          { code: "google" },
          { code: "setting" },
          { code: "print" },
          { code: "full" },
          { code: "plus" },
          { code: "minus" },
          { code: "message" },
          { code: "facebook" },
          { code: "more" },
          { code: "search" },
          { code: "female" },
          { code: "network-error" },
          { code: "password" },
          { code: "calendar" },
          { code: "alipay" },
          { code: "star" },
          { code: "like" },
          { code: "baidu" },
          { code: "voice" },
          { code: "twitter" },
          { code: "category" },
          { code: "share" },
          { code: "mobile" },
          { code: "video" },
          { code: "like1" },
          { code: "right" },
          { code: "phone" },
          { code: "location" },
          { code: "left" },
          { code: "refresh" },
          { code: "user" },
          { code: "cancel" },
          { code: "success" },
          { code: "cart" },
          { code: "zan" },
          { code: "time" },
          { code: "email" },
          { code: "edit" },
          { code: "wechat" },
          { code: "table" },
          { code: "image" },
          { code: "delete" },
          { code: "male" },
          { code: "add" },
          { code: "home" },
          { code: "service" },
          { code: "category1" },
          { code: "return" },
          { code: "notice" },
          { code: "voice1" },
          { code: "music" },
          { code: "user1" },
          { code: "remove" },
          { code: "calendar" },
          { code: "info" },
          { code: "warn" },
          { code: "loading4" },
          { code: "loading3" },
          { code: "loading2" },
          { code: "loading2" },
          { code: "loading" },
          { code: "close" },
          { code: "eye-close" },
          { code: "upload" },
          { code: "close1" },
          { code: "link" },
          { code: "upload1" },
          { code: "eye" },
          { code: "code" },
          { code: "copy" },
          { code: "down" },
          { code: "up" },
          { code: "power" },
          { code: "switch-off" },
          { code: "switch-on" },
          { code: "check" },
          { code: "check-on" },
          { code: "check-off" },
          { code: "radio1-off" },
          { code: "radio1-on" },
          { code: "radio11-on" },
          { code: "radio11-off" },
          { code: "radio2-on" },
          { code: "radio2-off" },
          { code: "radio-on" },
          { code: "radio-off" },
        ]),
      };
    },
    computed: {
      iconList() {
        let { keywords = "", icons = [] } = this;
        return icons.filter((item) => {
          let { code = "" } = item;
          keywords = keywords.toUpperCase();
          code = code.toUpperCase();
          return code.indexOf(keywords) > -1;
        });
      },
    },
  };
</script>

<style lang="less" scoped>
  @import "../../../../assets/less/pages/components/basic/icons/icons.less";
</style>
