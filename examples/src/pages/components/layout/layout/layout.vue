<template>
  <div class="yo-component-layout-page">
    <yo-anchor :text="'Layout' + $lang('布局容器')" size="30"></yo-anchor>
    <p>
      协助进行页面级整体布局。用于布局的容器组件，方便快速搭建页面的基本结构：<br />
      <code>&lt;yo-container&gt;</code>：外层容器。当子元素中包含
      <code>&lt;yo-header&gt;</code> 或
      <code>&lt;yo-footer&gt;</code>
      时，全部子元素会垂直上下排列，否则会水平左右排列。<br />

      <code>&lt;yo-header&gt;</code
      >：顶栏容器。自带默认样式，其下可嵌套任何元素，只能放在 Container 中。<br />

      <code>&lt;yo-side&gt;</code
      >：侧边栏容器。自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout
      中。<br />

      <code>&lt;yo-main&gt;</code
      >：主要区域容器。自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。<br />

      <code>&lt;yo-footer&gt;</code
      >：底栏容器。自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。<br />
    </p>

    <p class="alert">
      以上组件采用了 flex 布局，使用前请确定目标<y-link
        type="info"
        to="http://caniuse.com/#search=flex"
        target="_blank"
        >浏览器是否兼容</y-link
      >。此外，<code>&lt;yo-container&gt;</code>
      的子元素只能是后四者，后四者的父元素也只能是
      <code>&lt;yo-container&gt;</code>。
    </p>

    <yo-anchor :text="$lang('组件注册')" :size="24"></yo-anchor>
    <yo-code
      type="javascript"
      src="/components/demos/layout/layout/use.js"
    ></yo-code>
    <yo-anchor :text="$lang('代码示例')" :size="24"></yo-anchor>

    <yo-example demo="layout/layout/normal">
      <template v-slot:desc>
        <yo-desc :title="$lang('基本结构')">
          {{ $lang("典型的页面布局。") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/layout/trigger">
      <template v-slot:desc>
        <yo-desc :title="$lang('自定义触发器')">
          {{
            $lang(
              '要使用自定义触发器，可以设置 :trigger="null" 来隐藏默认设定。'
            )
          }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/layout/trigger">
      <template v-slot:desc>
        <yo-desc :title="$lang('顶部-侧边布局-通栏')">
          {{
            $lang(
              "同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。"
            )
          }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/layout/trigger">
      <template v-slot:desc>
        <yo-desc :title="$lang('顶部-侧边布局')">
          {{ $lang("拥有顶部导航及侧边栏的页面，多用于展示类网站。") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/layout/trigger">
      <template v-slot:desc>
        <yo-desc :title="$lang('上中下布局 ')">
          {{ $lang("拥有顶部导航及侧边栏的页面，多用于展示类网站。") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/layout/trigger">
      <template v-slot:desc>
        <yo-desc :title="$lang('响应式布局  ')">
          {{ $lang("拥有顶部导航及侧边栏的页面，多用于展示类网站。") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/layout/trigger">
      <template v-slot:desc>
        <yo-desc :title="$lang('固定侧边栏  ')">
          {{ $lang("拥有顶部导航及侧边栏的页面，多用于展示类网站。") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/layout/trigger">
      <template v-slot:desc>
        <yo-desc :title="$lang('固定头部')">
          {{ $lang("拥有顶部导航及侧边栏的页面，多用于展示类网站。") }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="layout/layout/trigger">
      <template v-slot:desc>
        <yo-desc :title="$lang('侧边布局  ')">
          {{ $lang("拥有顶部导航及侧边栏的页面，多用于展示类网站。") }}
        </yo-desc>
      </template>
    </yo-example>
  </div>
</template>

<style lang="less" scoped>
@import "../../../../assets/less/pages/components/layout/layout/layout.less";
</style>
