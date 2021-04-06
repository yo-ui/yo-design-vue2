<!--demo页面-->
<template>
    <div class="fq-develop-guide-page">
        <yo-anchor :text="$lang('快速上手')"></yo-anchor>
        <p>
            {{$lang('本节将介绍如何在项目中使用 YOUI')}}
        </p>
        <yo-anchor :text="$lang('引入 YOUI')"></yo-anchor>

        <p>{{$lang('你可以引入整个 YOUI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 YOUI。')}}</p>

        <yo-anchor :text="$lang('完整引入')"></yo-anchor>
        <p>{{$lang('在 main.js 中写入以下内容：')}}</p>
<yo-code>
import Vue from 'vue';
import YOUI from 'youi';
import 'youi/lib/default/index.css';
import App from './App.vue';
Vue.use(YOUI);
new Vue({
    el: '#app',
    render: h => h(App)
});
</yo-code>
        <p>
            {{$lang('以上代码便完成了 YOUI 的引入。需要注意的是，样式文件需要单独引入。')}}
        </p>
        <yo-anchor :text="$lang('按需引入')">
        <a :href="'#'+$lang('按需引入')" class="yo-font yolianjie"></a>{{$lang('按需引入')}}
        </yo-anchor>
    <p>
    {{$lang('借助')}} babel-plugin-component，{{$lang('我们可以只引入需要的组件，以达到减小项目体积的目的。')}}
    </p>
    <p>
    {{$lang('首先，安装')}} babel-plugin-component：
    </p>
    <yo-code>
    npm install babel-plugin-component -D
    </yo-code>
    <p>
    {{$lang('然后，将 .babelrc 修改为：')}}
    </p>
    <yo-code>
    {
    "presets": [["es2015", { "modules": false }]],
    "plugins": [
        [
        "component",
        {
            "libraryName": "youi",
            "styleLibraryName": "theme-chalk"
        }
        ]
    ]
    }
    </yo-code>
    <p>
    {{$lang('接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：')}}
    </p>
<yo-code>
import Vue from 'vue';
import { Button, Select } from 'youi';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
</yo-code>
<p>
{{$lang('完整组件列表和引入方式（完整组件列表以 components.json 为准）')}}
</p>
<yo-code>
import Vue from 'vue';
import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  PageHeader,
  CascaderPanel,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'youi';

Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Autocomplete);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Alert);
Vue.use(Slider);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Progress);
Vue.use(Spinner);
Vue.use(Badge);
Vue.use(Card);
Vue.use(Rate);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Cascader);
Vue.use(ColorPicker);
Vue.use(Transfer);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Link);
Vue.use(Divider);
Vue.use(Image);
Vue.use(Calendar);
Vue.use(Backtop);
Vue.use(PageHeader);
Vue.use(CascaderPanel);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
</yo-code>
<yo-anchor :text="$lang('全局配置')"></yo-anchor>
<p>
{{$lang('在引入 YOUI 时，可以传入一个全局配置对象。该对象目前支持 size 与 zIndex 字段。size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）。按照引入 YOUI 的方式，具体操作如下：')}}
</p>
<p>
{{$lang('完整引入 YOUI：')}}
</p>
<yo-code>
import Vue from 'vue';
import YOUI from 'youi';
Vue.use(YOUI, { size: 'small', zIndex: 3000 });
</yo-code>
<p>
{{$lang('按需引入 YOUI：')}}
</p>
<yo-code>
import Vue from 'vue';
import { Button } from 'youi';

Vue.prototype.$YOUI = { size: 'small', zIndex: 3000 };
Vue.use(Button);
</yo-code>
<p>
{{$lang('按照以上设置，项目中所有拥有 size 属性的组件的默认尺寸均为 \'small\'，弹框的初始 z-index 为 3000。')}}
</p>
<yo-anchor :text="$lang('开始使用')"></yo-anchor>
<p>
{{$lang('至此，一个基于 Vue 和 YOUI 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。')}}
</p>
    </div>
</template>

<script>
    import fqCommon from '@/common/common'
    export default {
        name: 'fq-develop-guide-page',
        components: { //组件传入
            // yoCode:() => import(/* webpackChunkName: "yo-component-code" */ '@com/common/yo-code'),
        },
        data() {
            return {
            }
        },
        mounted() {
            // this.$refs.fq_index_kline.init();
        },
        computed: {

        },
        methods: {

        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
// @import "../assets/less/pages/index.less";
</style>
