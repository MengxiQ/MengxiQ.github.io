<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">
        <div style="font-weight: bold;">MengxiQ</div>
        <!-- <img
          style="width: 100px"
          src="/images/element-plus-logo.svg"
          alt="Element logo"
        /> -->
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">Echart 示例</el-menu-item>
      <el-sub-menu index="2" disabled>
        <template #title>其他</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  
  <style>
  .flex-grow {
    flex-grow: 1;
  }
  </style>