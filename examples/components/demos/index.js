export default {
  // 'basicExtend1': () => require.ensure([], require => require('./basic/extend1.vue'), 'basic'),

  basicFontFont: () =>
    import(
      /* webpackChunkName: "yo-component-basic-font" */ "./basic/font/font"
    ),
  basicColorPrimary: () =>
    import(
      /* webpackChunkName: "yo-component-basic-color" */ "./basic/color/primary"
    ),
  basicColorAssist: () =>
    import(
      /* webpackChunkName: "yo-component-basic-color" */ "./basic/color/assist"
    ),
  basicColorNeutral: () =>
    import(
      /* webpackChunkName: "yo-component-basic-color" */ "./basic/color/neutral"
    ),
  basicButtonType: () =>
    import(
      /* webpackChunkName: "yo-component-basic-button" */ "./basic/button/type"
    ),
  basicButtonGhost: () =>
    import(
      /* webpackChunkName: "yo-component-basic-button" */ "./basic/button/ghost"
    ),
  basicButtonStyle: () =>
    import(
      /* webpackChunkName: "yo-component-basic-button" */ "./basic/button/style"
    ),
  basicButtonColor: () =>
    import(
      /* webpackChunkName: "yo-component-basic-button" */ "./basic/button/color"
    ),
  basicButtonLink: () =>
    import(
      /* webpackChunkName: "yo-component-basic-button" */ "./basic/button/link"
    ),
  basicButtonSize: () =>
    import(
      /* webpackChunkName: "yo-component-basic-button" */ "./basic/button/size"
    ),
  basicButtonBlock: () =>
    import(
      /* webpackChunkName: "yo-component-basic-button" */ "./basic/button/block"
    ),
  basicButtonDisabled: () =>
    import(
      /* webpackChunkName: "yo-component-basic-button" */ "./basic/button/disabled"
    ),
  basicButtonIcon: () =>
    import(
      /* webpackChunkName: "yo-component-basic-button" */ "./basic/button/icon"
    ),
  basicButtonLoading: () =>
    import(
      /* webpackChunkName: "yo-component-basic-button" */ "./basic/button/loading"
    ),
  basicButtonGroup: () =>
    import(
      /* webpackChunkName: "yo-component-basic-button" */ "./basic/button/group"
    ),
  basicLinkNormal: () =>
    import(
      /* webpackChunkName: "yo-component-basic-link" */ "./basic/link/normal"
    ),
  basicLinkLink: () =>
    import(
      /* webpackChunkName: "yo-component-basic-link" */ "./basic/link/link"
    ),
  basicLinkIcon: () =>
    import(
      /* webpackChunkName: "yo-component-basic-link" */ "./basic/link/icon"
    ),
  basicLinkDisabled: () =>
    import(
      /* webpackChunkName: "yo-component-basic-link" */ "./basic/link/disabled"
    ),
  basicLinkUnderline: () =>
    import(
      /* webpackChunkName: "yo-component-basic-link" */ "./basic/link/underline"
    ),
  basicIconNormal: () =>
    import(
      /* webpackChunkName: "yo-component-basic-icon" */ "./basic/icon/normal"
    ),
  basicIconColor: () =>
    import(
      /* webpackChunkName: "yo-component-basic-icon" */ "./basic/icon/color"
    ),
  basicIconSize: () =>
    import(
      /* webpackChunkName: "yo-component-basic-icon" */ "./basic/icon/size"
    ),
  basicIconRotate: () =>
    import(
      /* webpackChunkName: "yo-component-basic-icon" */ "./basic/icon/rotate"
    ),

  //布局
  layoutLayoutNormal: () =>
    import(
      /* webpackChunkName: "yo-component-layout-layout" */ "./layout/layout/normal"
    ),
  // layoutLayoutLayout1: () =>
  //   import(
  //     /* webpackChunkName: "yo-component-layout-layout" */ "./layout/layout/layout1"
  //   ),
  // layoutLayoutLayout2: () =>
  //   import(
  //     /* webpackChunkName: "yo-component-layout-layout" */ "./layout/layout/layout2"
  //   ),
  layoutGridNormal: () =>
    import(
      /* webpackChunkName: "yo-component-layout-grid" */ "./layout/grid/normal"
    ),
  layoutGridGutter: () =>
    import(
      /* webpackChunkName: "yo-component-layout-grid" */ "./layout/grid/gutter"
    ),
  layoutGridGroup: () =>
    import(
      /* webpackChunkName: "yo-component-layout-grid" */ "./layout/grid/group"
    ),
  layoutGridOffset: () =>
    import(
      /* webpackChunkName: "yo-component-layout-grid" */ "./layout/grid/offset"
    ),
  layoutGridFlex: () =>
    import(
      /* webpackChunkName: "yo-component-layout-grid" */ "./layout/grid/flex"
    ),
  layoutGridOrder: () =>
    import(
      /* webpackChunkName: "yo-component-layout-grid" */ "./layout/grid/order"
    ),
  layoutGridResponsive: () =>
    import(
      /* webpackChunkName: "yo-component-layout-grid" */ "./layout/grid/responsive"
    ),
  layoutGridAlign: () =>
    import(
      /* webpackChunkName: "yo-component-layout-grid" */ "./layout/grid/align"
    ),

  layoutListNormal: () =>
    import(
      /* webpackChunkName: "yo-component-layout-list" */ "./layout/list/normal"
    ),
  layoutListSize: () =>
    import(
      /* webpackChunkName: "yo-component-layout-list" */ "./layout/list/size"
    ),
  layoutListIcon: () =>
    import(
      /* webpackChunkName: "yo-component-layout-list" */ "./layout/list/icon"
    ),
  layoutListType: () =>
    import(
      /* webpackChunkName: "yo-component-layout-list" */ "./layout/list/type"
    ),
  layoutListLoading: () =>
    import(
      /* webpackChunkName: "yo-component-layout-list" */ "./layout/list/loading"
    ),
  layoutCardNormal: () =>
    import(
      /* webpackChunkName: "yo-component-layout-card" */ "./layout/card/normal"
    ),
  layoutCardSize: () =>
    import(
      /* webpackChunkName: "yo-component-layout-card" */ "./layout/card/size"
    ),
  layoutCardHover: () =>
    import(
      /* webpackChunkName: "yo-component-layout-card" */ "./layout/card/hover"
    ),
  layoutCardBorder: () =>
    import(
      /* webpackChunkName: "yo-component-layout-card" */ "./layout/card/border"
    ),
  layoutCardShadow: () =>
    import(
      /* webpackChunkName: "yo-component-layout-card" */ "./layout/card/shadow"
    ),
  layoutCardLink: () =>
    import(
      /* webpackChunkName: "yo-component-layout-card" */ "./layout/card/link"
    ),
  layoutCardSimple: () =>
    import(
      /* webpackChunkName: "yo-component-layout-card" */ "./layout/card/simple"
    ),
  layoutCardPoster: () =>
    import(
      /* webpackChunkName: "yo-component-layout-card" */ "./layout/card/poster"
    ),
  layoutCardInner: () =>
    import(
      /* webpackChunkName: "yo-component-layout-card" */ "./layout/card/inner"
    ),
  layoutCollapseNormal: () =>
    import(
      /* webpackChunkName: "yo-component-layout-collapse" */ "./layout/collapse/normal"
    ),
  layoutCollapseAccordion: () =>
    import(
      /* webpackChunkName: "yo-component-layout-collapse" */ "./layout/collapse/accordion"
    ),
  layoutCollapseSize: () =>
    import(
      /* webpackChunkName: "yo-component-layout-collapse" */ "./layout/collapse/size"
    ),
  layoutCollapseGroup: () =>
    import(
      /* webpackChunkName: "yo-component-layout-collapse" */ "./layout/collapse/group"
    ),
  layoutCollapseSimple: () =>
    import(
      /* webpackChunkName: "yo-component-layout-collapse" */ "./layout/collapse/simple"
    ),
  layoutCollapseDiy: () =>
    import(
      /* webpackChunkName: "yo-component-layout-collapse" */ "./layout/collapse/diy"
    ),
  layoutCollapseHide: () =>
    import(
      /* webpackChunkName: "yo-component-layout-collapse" */ "./layout/collapse/hide"
    ),
  layoutCollapseExtra: () =>
    import(
      /* webpackChunkName: "yo-component-layout-collapse" */ "./layout/collapse/extra"
    ),
  layoutCollapseAction: () =>
    import(
      /* webpackChunkName: "yo-component-layout-collapse" */ "./layout/collapse/action"
    ),
  layoutSplitNormal: () =>
    import(
      /* webpackChunkName: "yo-component-layout-split" */ "./layout/split/normal"
    ),
  layoutSplitType: () =>
    import(
      /* webpackChunkName: "yo-component-layout-split" */ "./layout/split/type"
    ),
  layoutSplitGroup: () =>
    import(
      /* webpackChunkName: "yo-component-layout-split" */ "./layout/split/group"
    ),

  formFormForm1: () =>
    import(/* webpackChunkName: "yo-component-form" */ "./form/form/form1"),
  formFormForm2: () =>
    import(/* webpackChunkName: "yo-component-form" */ "./form/form/form2"),

  formInputNormal: () =>
    import(
      /* webpackChunkName: "yo-component-form-input" */ "./form/input/normal"
    ),
  formInputPreAppend: () =>
    import(
      /* webpackChunkName: "yo-component-form-input" */ "./form/input/preAppend"
    ),
  formInputGroup: () =>
    import(
      /* webpackChunkName: "yo-component-form-input" */ "./form/input/group"
    ),
  formInputLoading: () =>
    import(
      /* webpackChunkName: "yo-component-form-input" */ "./form/input/loading"
    ),
  formInputInput1: () =>
    import(
      /* webpackChunkName: "yo-component-form-input" */ "./form/input/input1"
    ),
  formInputInput2: () =>
    import(
      /* webpackChunkName: "yo-component-form-input" */ "./form/input/input2"
    ),
  formRadioRadio1: () =>
    import(/* webpackChunkName: "yo-component-form" */ "./form/radio/radio1"),
  formRadioRadio2: () =>
    import(/* webpackChunkName: "yo-component-form" */ "./form/radio/radio2"),
  formCheckboxCheckbox1: () =>
    import(
      /* webpackChunkName: "yo-component-form" */ "./form/checkbox/checkbox1"
    ),
  formCheckboxCheckbox2: () =>
    import(
      /* webpackChunkName: "yo-component-form" */ "./form/checkbox/checkbox2"
    ),

  navigationBreadcrumbBreadcrumb1: () =>
    import(
      /* webpackChunkName: "yo-component-navigation" */ "./navigation/breadcrumb/breadcrumb1"
    ),
  navigationBreadcrumbBreadcrumb2: () =>
    import(
      /* webpackChunkName: "yo-component-navigation" */ "./navigation/breadcrumb/breadcrumb2"
    )
};
