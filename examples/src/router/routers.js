
import { RouterURL,routerAuth} from '@/common/env'

const Routers = [

    {
    path:RouterURL['*'].path,
    name: RouterURL['*'].name,
    meta:{
        title:RouterURL['*'].title,
    },
    component: () => import(/* webpackChunkName: "exnet-index" */ '@/pages/notFound')
},
{
    path: RouterURL['index'].path,
    name: RouterURL['index'].name,
    meta:{
        title:RouterURL['index'].title,
    },
    component: () => import(/* webpackChunkName: "exnet-index" */ '@/pages/index')
},
{
    path: RouterURL['component'].path,
    name: RouterURL['component'].name,
    meta:{
        title:RouterURL['component'].title,
    },
    component: () => import(/* webpackChunkName: "yo-component" */ '@/pages/component'),
    redirect:{
        name:RouterURL['componentGuide'].name,
    },
    children: [
        // 开发指南
        {
            path: RouterURL['componentGuide'].path,
            name: RouterURL['componentGuide'].name,
            meta: {
                title: RouterURL['componentGuide'].title,
            },
            component: () => import(/* webpackChunkName: "yo-component-guide" */ '@/pages/components/develop/guide/guide'),
        },

        //组件-栅格组件
        {
            path: RouterURL['componentGrid'].path,
            name: RouterURL['componentGrid'].name,
            meta: {
                title: RouterURL['componentGrid'].title,
            },
            component: () => import(/* webpackChunkName: "yo-component-grid" */ '@/pages/components/basic/grid/grid'),
        },
        //组件-布局组件
        {
            path: RouterURL['componentLayout'].path,
            name: RouterURL['componentLayout'].name,
            meta: {
                title: RouterURL['componentLayout'].title,
            },
            component: () => import(/* webpackChunkName: "yo-component-layout" */ '@/pages/components/basic/layout/layout'),
        },
        //组件-基础组件
        {
            path: RouterURL['componentButton'].path,
            name: RouterURL['componentButton'].name,
            meta: {
                title: RouterURL['componentButton'].title,
            },
            component: () => import(/* webpackChunkName: "yo-component-button" */ '@/pages/components/basic/button/button'),
        },
        //组件-基础组件
        {
            path: RouterURL['componentLink'].path,
            name: RouterURL['componentLink'].name,
            meta: {
                title: RouterURL['componentLink'].title,
            },
            component: () => import(/* webpackChunkName: "yo-component-link" */ '@/pages/components/basic/link/link'),
        },
        //组件-图标组件
        {
            path: RouterURL['componentIcon'].path,
            name: RouterURL['componentIcon'].name,
            meta: {
                title: RouterURL['componentIcon'].title,
            },
            component: () => import(/* webpackChunkName: "yo-component-Icon" */ '@/pages/components/basic/icons/icons'),
        },
        // 表单
        //组件-输入框组件
        {
            path: RouterURL['componentInput'].path,
            name: RouterURL['componentInput'].name,
            meta: {
                title: RouterURL['componentInput'].title,
            },
            component: () => import(/* webpackChunkName: "yo-component-Input" */ '@/pages/components/form/input/input'),
        },
        //组件-单选框组件
        {
            path: RouterURL['componentRadio'].path,
            name: RouterURL['componentRadio'].name,
            meta: {
                title: RouterURL['componentRadio'].title,
            },
            component: () => import(/* webpackChunkName: "yo-component-Radio" */ '@/pages/components/form/radio/radio'),
        },
        //组件-复选框组件
        {
            path: RouterURL['componentCheckbox'].path,
            name: RouterURL['componentCheckbox'].name,
            meta: {
                title: RouterURL['componentCheckbox'].title,
            },
            component: () => import(/* webpackChunkName: "yo-component-Checkbox" */ '@/pages/components/form/checkbox/checkbox'),
        },

        // 导航
        //组件-面包屑组件
        {
            path: RouterURL['componentBreadcrumb'].path,
            name: RouterURL['componentBreadcrumb'].name,
            meta: {
                title: RouterURL['componentBreadcrumb'].title,
            },
            component: () => import(/* webpackChunkName: "yo-component-Breadcrumb" */ '@/pages/components/navigation/breadcrumb/breadcrumb'),
        },
    ]
},

]

export default Routers
