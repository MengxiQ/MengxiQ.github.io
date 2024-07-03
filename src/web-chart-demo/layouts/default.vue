<template>
  <div class="common-layout">
    <el-container style="padding: 0;">
      <el-header>
        <AppHeader></AppHeader>
      </el-header>
      <el-main style="padding: 0; ">
        <slot></slot>
      </el-main>
      <!-- <el-footer>
        <AppFooter></AppFooter>
      </el-footer> -->
    </el-container>
  </div>
</template>
<style lang="scss">
.common-layout {
  // background-color: palegoldenrod;
  // height: 100vh;
}
</style>
<style>
  html,body{
    padding: 0;
    margin: 0;
  }
</style>