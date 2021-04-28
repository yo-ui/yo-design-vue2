<template>
  <div>
    <y-divide>分割线 默认实线</y-divide>
    <y-divide dashed> 分割线 虚线</y-divide>
    <y-divide doted>分割线 点线</y-divide>
    <y-divide dashed color="primary">分割线 虚线主题色 primary</y-divide>
    <y-divide dashed color="info">分割线 虚线信息色 info</y-divide>
    <y-divide dashed color="success">分割线 虚线信息色 success</y-divide>
    <y-divide dashed color="error">分割线 虚线信息色 error</y-divide>
    <y-divide dashed color="warning">分割线 虚线信息色 warning</y-divide>
    <y-divide dashed color="#f6ca9d"
      >分割线 虚线信息色 自定义颜色 #f6ca9d</y-divide
    >
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped></style>
