<template>
    <div id="index">
        normal
        <p>1通过读取服务器中存储的当前的证书及p2等文件 可供选择</p>
        <p>2一些按钮提供api的处理</p>
        <p>3个别api提供数据展示及通过base64转文件提供下载功能</p>
      {{certList}}
      <el-select v-model="value" placeholder="请选择" de>
        <el-option
          v-for="item in certLists"
          :key="item"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '1'
    }
  },
  created () {
    this.RECORD_UPDATECERTLISTS()
  },
  mounted () {
  },
  methods: {
    ...mapActions('normalCert', ['RECORD_UPDATECERTLISTS', 'RECORD_UPDATECERTLIST'])
  },
  components: {},
  watch: {
    value (val) {
      if (val) {
        console.log(val)
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

</style>

