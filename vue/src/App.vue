<template>
  <div id="app">
    <div class="app-top">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/server' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Layout from '@/views/layout'
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: {
    Layout
  }
}
</script>
<style lang="less">
  html body{
    height: 900px;
    padding: 0px;
    margin: 0px;
    font-size: 20px;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 900px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
  .app-top{
    height: 60px;
    background-color: #333;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    /deep/ span{
      color: white;
    }
  }
</style>
