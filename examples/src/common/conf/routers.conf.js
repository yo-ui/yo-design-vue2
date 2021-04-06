/**
 * 页面路由名称
 */
export default {
    // "个人中心",
    '*': {name:'*',path:'*',title:'404 Not Found'},
    'index': {name:'index',path:'/',title:'首页'},
    'component': {name:'component',path:'/component',title:'组件页'},
    'componentGuide': {name:'componentGuide',path:'',title:'组件入门页'},
    'componentButton': {name:'componentButton',path:'basic/button',title:'按钮组件'},
    'componentLink': {name:'componentLink',path:'basic/Link',title:'文字链接组件'},
    'componentIcon': {name:'componentIcon',path:'basic/icons',title:'图标组件'},
    'componentGrid': {name:'componentGrid',path:'basic/grid',title:'按钮组件'},
    'componentLayout': {name:'componentLayout',path:'basic/layout',title:'布局组件'},

    'componentInput': {name:'componentInput',path:'form/input',title:'输入框组件'},
    'componentRadio': {name:'componentRadio',path:'form/radio',title:'单选框组件'},
    'componentCheckbox': {name:'componentCheckbox',path:'form/checkbox',title:'复选框组件'},
    
    'componentBreadcrumb': {name:'componentBreadcrumb',path:'navigation/breadcrumb',title:'面包屑组件'},

    'login': {name:'login',path:'/signin',title:'登录'},
    'reg': {name:'reg',path:'/signup',title:'注册'},
    'contact': {name:'contact',path:'/contact',title:'联系我们'},
}
