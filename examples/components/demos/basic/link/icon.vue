<template>
  <div>
    <y-link icon="message">默认文字链接</y-link>
    <y-link>
      <template v-slot:left>
        <y-icon type="message"></y-icon>
      </template>
      <template v-slot:right>
        <y-icon type="eye"></y-icon>
      </template>
      &nbsp;左右插槽文字链接&nbsp;</y-link
    >
    <y-link>
      <i class="yo-icon-message"></i>
      &nbsp;一般文字链接&nbsp;
      <i class="yo-icon-eye"></i
    ></y-link>
    <y-link right-icon="eye">默认文字链接</y-link>
    <y-link icon="left" right-icon="right">默认文字链接</y-link>
  </div>
</template>
