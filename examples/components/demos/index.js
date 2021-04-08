export default{
    // 'basicExtend1': () => require.ensure([], require => require('./basic/extend1.vue'), 'basic'),
    'basicLayoutLayout1': () => import(/* webpackChunkName: "yo-component-basic-layout" */ './basic/layout/layout1'),
    'basicLayoutLayout2': () => import(/* webpackChunkName: "yo-component-basic-layout" */ './basic/layout/layout2'),
    'basicGridGrid1': () => import(/* webpackChunkName: "yo-component-basic-grid" */ './basic/grid/grid1'),
    'basicGridGrid2': () => import(/* webpackChunkName: "yo-component-basic-grid" */ './basic/grid/grid2'),
    'basicButtonType': () => import(/* webpackChunkName: "yo-component-basic-button" */ './basic/button/type'),
    'basicButtonGhost': () => import(/* webpackChunkName: "yo-component-basic-button" */ './basic/button/ghost'),
    'basicButtonStyle': () => import(/* webpackChunkName: "yo-component-basic-button" */ './basic/button/style'),
    'basicButtonColor': () => import(/* webpackChunkName: "yo-component-basic-button" */ './basic/button/color'),
    'basicButtonLink': () => import(/* webpackChunkName: "yo-component-basic-button" */ './basic/button/link'),
    'basicButtonSize': () => import(/* webpackChunkName: "yo-component-basic-button" */ './basic/button/size'),
    'basicButtonBlock': () => import(/* webpackChunkName: "yo-component-basic-button" */ './basic/button/block'),
    'basicButtonDisabled': () => import(/* webpackChunkName: "yo-component-basic-button" */ './basic/button/disabled'),
    'basicButtonIcon': () => import(/* webpackChunkName: "yo-component-basic-button" */ './basic/button/icon'),
    'basicButtonLoading': () => import(/* webpackChunkName: "yo-component-basic-button" */ './basic/button/loading'),
    'basicButtonGroup': () => import(/* webpackChunkName: "yo-component-basic-button" */ './basic/button/group'),
    'basicLinkNormal': () => import(/* webpackChunkName: "yo-component-basic-link" */ './basic/link/normal'),
    'basicLinkLink': () => import(/* webpackChunkName: "yo-component-basic-link" */ './basic/link/link'),
    'basicLinkIcon': () => import(/* webpackChunkName: "yo-component-basic-link" */ './basic/link/icon'),
    'basicLinkDisabled': () => import(/* webpackChunkName: "yo-component-basic-link" */ './basic/link/disabled'),
    'basicLinkUnderline': () => import(/* webpackChunkName: "yo-component-basic-link" */ './basic/link/underline'),
    'basicIconNormal': () => import(/* webpackChunkName: "yo-component-basic-icon" */ './basic/icon/normal'),
    'basicIconColor': () => import(/* webpackChunkName: "yo-component-basic-icon" */ './basic/icon/color'),
    'basicIconSize': () => import(/* webpackChunkName: "yo-component-basic-icon" */ './basic/icon/size'),
    
    'formFormForm1': () => import(/* webpackChunkName: "yo-component-form" */ './form/form/form1'),
    'formFormForm2': () => import(/* webpackChunkName: "yo-component-form" */ './form/form/form2'),
    
    'formInputInput1': () => import(/* webpackChunkName: "yo-component-form" */ './form/input/input1'),
    'formInputInput2': () => import(/* webpackChunkName: "yo-component-form" */ './form/input/input2'),
    'formRadioRadio1': () => import(/* webpackChunkName: "yo-component-form" */ './form/radio/radio1'),
    'formRadioRadio2': () => import(/* webpackChunkName: "yo-component-form" */ './form/radio/radio2'),
    'formCheckboxCheckbox1': () => import(/* webpackChunkName: "yo-component-form" */ './form/checkbox/checkbox1'),
    'formCheckboxCheckbox2': () => import(/* webpackChunkName: "yo-component-form" */ './form/checkbox/checkbox2'),
    
    'navigationBreadcrumbBreadcrumb1': () => import(/* webpackChunkName: "yo-component-navigation" */ './navigation/breadcrumb/breadcrumb1'),
    'navigationBreadcrumbBreadcrumb2': () => import(/* webpackChunkName: "yo-component-navigation" */ './navigation/breadcrumb/breadcrumb2'),
}