<template>
  <div class="demo">
    <p>
      <y-icon type="edit" :size="20"></y-icon>
      <y-icon type="share" :size="20"></y-icon>
      <y-icon type="remove" :size="20"></y-icon>
      <y-button type="primary"
        ><y-icon type="search" :size="14" color="#fff"></y-icon>
        {{ $lang("搜索") }}</y-button
      >
    </p>
    <p>
      <i class="yo-icon-edit" style="font-size: 24px"></i>
      <i class="yo-icon-share" style="font-size: 24px"></i>
      <i class="yo-icon-remove" style="font-size: 24px"></i>
      <y-button type="primary" icon="search">{{ $lang("搜索") }}</y-button>
    </p>
  </div>
</template>
