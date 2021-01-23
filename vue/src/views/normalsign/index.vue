<template>
    <div id="index">
<!--        normal-->
<!--        <p>1通过读取服务器中存储的当前的证书及p2等文件 可供选择</p>-->
<!--        <p>2一些按钮提供api的处理</p>-->
<!--        <p>3个别api提供数据展示及通过base64转文件提供下载功能</p>-->
      <div class="top">
        <el-radio-group v-model="radioValue"  size="small">
        <el-radio v-for = "(item,i) in certLists"  :key="i"  :label="item" border>
          {{item}}</el-radio>
          </el-radio-group>
        <div class="cert-info">
          <p v-for="(item,i) in certList" :key="i">{{item}}</p>
        </div>
      </div>
      <div class="content">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">bundleId列表</el-menu-item>
          <el-menu-item index="2">设备号列表</el-menu-item>
          <el-menu-item index="3">证书列表</el-menu-item>
          <el-menu-item index="4">签名列表</el-menu-item>
          <el-menu-item index="5">处理中心</el-menu-item>
        </el-menu>
        <bundleIdTable v-if="activeIndex==1"></bundleIdTable>
        <udidTable v-else-if="activeIndex==2"></udidTable>
        <certTable v-else-if="activeIndex==3"></certTable>
        <profileTable v-else-if="activeIndex==4"></profileTable>
      </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import udidTable from '@/views/components/udidTable.vue'
import profileTable from '@/views/components/profileTable.vue'
import certTable from '@/views/components/certTable.vue'
import bundleIdTable from '@/views/components/bundleIdTable.vue'
export default {
  name: 'index',
  data () {
    return {
      radioValue: "test1",
      activeIndex: '4'
    }
  },
  created () {
  },
  mounted () {
    this.recordToken()
    this.recordGetUdidList()
    this.recordGetProfileList()
    this.recordGetCerList()
    this.recordGetBundleIDList()
    this.RECORD_UPDATECERTLISTS()
    this.RECORD_UPDATECERTLIST(this.radioValue)
  },
  methods: {
    ...mapActions('normalCert', ['RECORD_UPDATECERTLISTS', 'RECORD_UPDATECERTLIST']),
    ...mapActions(['recordToken', 'recordGetUdidList', 'recordGetProfileList', 'recordGetCerList', 'recordGetBundleIDList']),
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
      this.activeIndex = key
    }
  },
  components: {
    profileTable,
    udidTable,
    certTable,
    bundleIdTable
  },
  watch: {
    radioValue (val) {
      if (val) {
        // console.log(val)
        this.RECORD_UPDATECERTLIST(val)
      }
    }
  },
  computed: {
    ...mapState('normalCert', ['certLists', 'certList'])
  },
  props: {}
}
</script>
<style lang="less" scoped>
#index{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  .top{
    width: 100%;
    height: 200px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    .el-radio-group{
       height: 160px;
       width: 200px;
      display: flex;
      flex-flow: column wrap;
      justify-content: flex-start;
      align-items:flex-start;
      align-self: center;
      .el-radio{
        margin-top: 10px;
      }
    }
    .cert-info{

    }
  }
  .content{
    width: 100%;
  }
}
</style>
