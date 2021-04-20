<template>
  <div class="yo-icon-page">
    <yo-anchor :text="'Icon ' + $lang('图标')" size="30"></yo-anchor>
    <p>{{ $lang("提供了一套常用的图标集合。") }}</p>
    <p>
      {{ $lang("基础组件，用于文字超链接。") }}
    </p>
    <p
      class="alert"
      v-html="
        $lang('注意：非 template/render 模式下，需使用 <code>y-icon</code>。')
      "
    ></p>

    <yo-anchor :text="$lang('组件注册')" size="24"></yo-anchor>
    <yo-code
      type="javascript"
      src="/components/demos/basic/icon/use.js"
    ></yo-code>

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
          {{
            $lang(
              "定义图标的颜色，有primary,info,success,warning,error五个颜色常量可以设置"
            )
          }}
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
    <yo-example demo="basic/icon/rotate">
      <template v-slot:desc>
        <yo-desc :title="$lang('图标旋转角度')">
          {{ $lang("定义图标的旋转角度。") }}
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
    </ul>

    <yo-anchor :text="'Icon ' + $lang('属性')" :size="24"></yo-anchor>
    <table class="table">
      <tr>
        <th v-for="item in propsTableKeys" :key="item.code">
          {{ $lang(item.name) }}
        </th>
      </tr>
      <tr v-for="item in propsTableData" :key="item.param">
        <td>{{ item.param }}</td>
        <td v-html="item.desc"></td>
        <td>{{ item.type }}</td>
        <td>{{ item.default || "-" }}</td>
        <td>{{ item.version || "-" }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keywords: "",
      propsTableData: [
        {
          param: "type",
          desc: "图标类型。遵循图标的命名规范",
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "size",
          desc: "设置图标大小尺寸",
          type: "Number|String",
          default: "12",
          version: ""
        },
        {
          param: "color",
          desc:
            "设置图标的颜色，有primary,info,success,warning,error五个颜色常量可以设置",
          type: "String",
          default: "",
          version: ""
        },
        {
          param: "rotate",
          desc: "图标旋转角度",
          type: "Number|String",
          default: "0",
          version: ""
        }
      ],
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
        { code: "radio2-on" },
        { code: "radio2-off" },
        { code: "radio-on" },
        { code: "radio-off" }
      ])
    };
  },
  computed: {
    iconList() {
      let { keywords = "", icons = [] } = this;
      console.log(keywords, "icon search1");
      return icons.filter(item => {
        let { code = "" } = item;
        console.log(keywords, "icon search2");
        keywords = keywords.toUpperCase();
        code = code.toUpperCase();
        return code.indexOf(keywords) > -1;
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../../../assets/less/pages/components/basic/icons/icons.less";
</style>
