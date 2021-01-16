<template>
    <div id="index">
      <div class="container" v-if="isShowContainer">
        这是后台的入口界面，分为超级签管理后台和自助添加审核导出证书签名后台
        <div>
          <p>超级签后台</p>
          <el-button type="primary" plain @click ="goToSuperSign()">超级签后台</el-button>
        </div>
        <div>
          <p>自助添加设备号后台</p>
          <el-button type="success" plain @click ="goToNormalSign()">自助后台</el-button></div>
      </div>
      <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      isShowContainer: false
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    goToSuperSign () {
      if (this.$router.currentRoute.fullPath !== "/server/supersign") {
        this.$router.push('/server/supersign')
      }
      this.isShowContainer = false
    },
    goToNormalSign () {
      if (this.$router.currentRoute.fullPath !== "/server/normalsign") {
        this.$router.push('/server/normalsign')
      }
      this.isShowContainer = false
    }
  },
  components: {},
  watch: {},
  computed: {},
  props: {}
}
</script>
<style lang="less" scoped>

</style>
