<template>
  <div class="yo-component-link-page">
    <yo-anchor :text="'Link' + $lang('文字链接')" size="30"></yo-anchor>
    <p>
      {{ $lang("基础组件，用于文字超链接。") }}
    </p>
    <p
      class="alert"
      v-html="$lang('注意：非 template/render 模式下，需使用 <code>y-link</code>。')"
    ></p>

    <yo-anchor :text="$lang('组件注册')" size="24"></yo-anchor>
    <yo-code type="javascript" src="/components/demos/basic/link/use.js"></yo-code>

    <yo-anchor :text="$lang('代码示例')" size="24"></yo-anchor>
    <yo-example demo="basic/link/normal">
      <template v-slot:desc>
        <yo-desc :title="$lang('基础用法')">
          {{
            $lang(
              "基础的文字链接用法。链接有6种类型:默认链接、主题色链接、信息链接、成功链接、警告链接、错误链接"
            )
          }}
        </yo-desc>
      </template>
    </yo-example>

    <yo-example demo="basic/link/disabled">
      <template v-slot:desc>
        <yo-desc :title="$lang('禁用状态')">
          {{ $lang("文字链接不可用状态。") }}
        </yo-desc>
      </template>
    </yo-example>

    <yo-example demo="basic/link/underline">
      <template v-slot:desc>
        <yo-desc :title="$lang('下划线')">
          {{ $lang("文字链接下划线。") }}
        </yo-desc>
      </template>
    </yo-example>

    <yo-example demo="basic/link/icon">
      <template v-slot:desc>
        <yo-desc :title="$lang('图标')">
          {{ $lang("带图标的文字链接可增强辨识度。") }}
        </yo-desc>
      </template>
    </yo-example>

    <yo-example demo="basic/link/link">
      <template v-slot:desc>
        <yo-desc :title="$lang('带链接')">
          {{ $lang("链接可跳转") }}
        </yo-desc>
      </template>
    </yo-example>

    <!-- <h3>其他</h3>
    <yo-example demo="basic/link/link2"></yo-example> -->

    <yo-anchor :text="'Link ' + $lang('参数')"></yo-anchor>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>

    <yo-anchor :text="'Link ' + $lang('方法')"></yo-anchor>
    <table class="table">
      <tr>
        <th>方法</th>
        <th>说明</th>
        <th>参数</th>
        <th>返回值</th>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>

    <yo-anchor :text="'Link ' + $lang('事件')"></yo-anchor>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>返回值</th>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<style lang="less" scoped>
  @import "../../../../assets/less/pages/components/basic/link/link.less";
</style>
