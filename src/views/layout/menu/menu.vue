<template>
    
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="/"
        text-color="#fff"
        router="true"
        :collapse="props.isCollapse"
      >
    <el-menu-item>
        <span>生鲜管理系统</span>
    </el-menu-item>
      <el-menu-item index="/">
          <el-icon><icon-menu /></el-icon>
          <span>首页</span>
        </el-menu-item>

        <el-sub-menu index="/product">
          <template #title>
            <el-icon><location /></el-icon>
            <span>产品管理</span>
          </template>
            <el-menu-item index="/product/list">产品列表</el-menu-item>
            <el-menu-item index="/product/category">产品分类</el-menu-item>
        </el-sub-menu>
        
        <el-sub-menu index="/order">
          <template #title>
            <el-icon><location /></el-icon>
            <span>订单管理</span>
          </template>
          <el-menu-item index="/order/list">订单列表</el-menu-item>
            <el-menu-item index="/order/form">订单清单</el-menu-item>
            <el-menu-item index="/order/checks">订单审核</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="/ads">
          <template #title>
            <el-icon><location /></el-icon>
            <span>广告管理</span>
          </template>
            <el-menu-item index="/ads/list">广告列表</el-menu-item>
            <el-menu-item index="/ads/category">广告分类</el-menu-item>
        </el-sub-menu>
      </el-menu>

</template>

<script setup>
    import {Document,Menu as IconMenu,Location, Setting} from '@element-plus/icons-vue'

 const props = defineProps(['isCollapse'])

</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
  border-right: none;
}
.el-menu .is-active{
  
    background-color:dodgerblue;
}

</style>