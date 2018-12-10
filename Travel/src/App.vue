<template>
  <div id="app">
    <!-- 如果加载过就存到内存里 -->
    <keep-alive>
        <!-- routerview显示的是当前路由地址所对应的内容 -->
        <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
