<template>
  <div class="demo">
    <y-button icon="search"></y-button>
    <y-button icon="search" round></y-button>
    <y-button icon="search" circle></y-button>
    <y-button icon="search">{{ $lang("搜索") }}</y-button>
    <y-button type="primary" icon="search"></y-button>
    <y-button type="primary" icon="search" round></y-button>
    <y-button type="primary" icon="search" circle></y-button>
    <y-button type="primary" icon="search">{{ $lang("搜索") }}</y-button>
    <y-button type="dashed" icon="search">{{ $lang("搜索") }}</y-button>
    <y-button>YO</y-button>
    <y-button round>YO</y-button>
    <y-button icon="eye">{{ $lang("图标按钮") }}</y-button>
    <y-button loading type="primary">{{ $lang("loading图标按钮") }}</y-button>
    <y-button loading loading-name="loading1" type="primary">{{
      $lang("loading图标按钮")
    }}</y-button>
    <y-button icon="message">{{ $lang("图标按钮") }}</y-button>
    <y-button icon="loading3">{{ $lang("图标按钮") }}</y-button>
  </div>
</template>
