<template>
  <div class="demo">
    <yo-container>
      <yo-header>yo-header</yo-header>
      <yo-main>yo-main</yo-main>
      <yo-footer>yo-footer</yo-footer>
    </yo-container>

    <yo-container horizontal>
      <yo-side>yo-side</yo-side>
      <yo-container>
        <yo-header>yo-header</yo-header>
        <yo-main>yo-main</yo-main>
        <yo-footer>yo-footer</yo-footer>
      </yo-container>
    </yo-container>

    <yo-container horizontal>
      <yo-container>
        <yo-header>yo-header</yo-header>
        <yo-main>yo-main</yo-main>
        <yo-footer>yo-footer</yo-footer>
      </yo-container>
      <yo-side>yo-side</yo-side>
    </yo-container>

    <yo-container>
      <yo-header>yo-header</yo-header>
      <yo-container horizontal>
        <yo-side>yo-side</yo-side>
        <yo-container>
          <yo-main>yo-main</yo-main>
          <yo-footer>yo-footer</yo-footer>
        </yo-container>
      </yo-container>
    </yo-container>

    <yo-container>
      <yo-header>yo-header</yo-header>
      <yo-container horizontal>
        <yo-container>
          <yo-main>yo-main</yo-main>
          <yo-footer>yo-footer</yo-footer>
        </yo-container>
        <yo-side>yo-side</yo-side>
      </yo-container>
    </yo-container>

    <yo-container>
      <yo-header>yo-header</yo-header>
      <yo-container>
        <yo-side>yo-side</yo-side>
        <yo-main>yo-main</yo-main>
      </yo-container>
      <yo-footer>yo-footer</yo-footer>
    </yo-container>

    <yo-container>
      <yo-header>yo-header</yo-header>
      <yo-container>
        <yo-main>yo-main</yo-main>
        <yo-side>yo-side</yo-side>
      </yo-container>
      <yo-footer>yo-footer</yo-footer>
    </yo-container>

    <yo-container>
      <yo-header>yo-header</yo-header>
      <yo-main>yo-main</yo-main>
    </yo-container>

    <yo-container>
      <yo-side>yo-side</yo-side>
      <yo-main>yo-main</yo-main>
    </yo-container>
  </div>
</template>
<style scoped>
.demo > .yo-container {
  margin-bottom: 20px;
}
.demo .yo-container .yo-header {
  background-color: #0a9fad;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.demo .yo-container .yo-main {
  background-color: #0bc4d630;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a9fad;
}
.demo .yo-container .yo-side {
  background-color: #033838;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.demo .yo-container .yo-footer {
  background-color: #057782;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
}
</style>
