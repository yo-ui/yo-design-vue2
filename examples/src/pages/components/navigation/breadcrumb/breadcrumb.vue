<template>
  <div class="yo-component-breadcrumb-page">
    <yo-anchor :text="'Breadcrumb' + $lang('面包屑')" size="18"></yo-anchor>

    <p>说明</p>

    <h3>基本调用</h3>
    <yo-example
      root="/components/demos/"
      demo="navigation/breadcrumb/breadcrumb1"
      ext=".vue"
    ></yo-example>

    <h3>其他</h3>
    <yo-example
      root="/components/demos/"
      demo="navigation/breadcrumb/breadcrumb2"
      ext=".vue"
    ></yo-example>

    <yo-anchor :text="'Breadcrumb ' + $lang('参数')"></yo-anchor>
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

    <yo-anchor :text="'Breadcrumb ' + $lang('方法')"></yo-anchor>
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

    <yo-anchor :text="'Breadcrumb ' + $lang('事件')"></yo-anchor>
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
@import "../../../../assets/less/pages/components/navigation/breadcrumb/breadcrumb.less";
</style>
