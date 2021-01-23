<template>
    <div id="index">
      <el-table
        :data="bundleIDList"
        style="width: 100%">
        <el-table-column
          label="ID"
          prop="id">
        </el-table-column>
        <el-table-column
          label="Name"
          prop="attributes.name">
        </el-table-column>
        <el-table-column
          label="identifier"
          prop="attributes.identifier">
        </el-table-column>
<!--        <el-table-column-->
<!--          label="certificateContent"-->
<!--          prop="attributes.certificateContent">-->
<!--        </el-table-column>-->
<!--        <el-table-column-->
<!--          label="expirationDate"-->
<!--          prop="attributes.expirationDate">-->
<!--        </el-table-column>-->
        <el-table-column
          align="right">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
<!--            <el-button-->
<!--              size="mini"-->
<!--              @click="handleDownLoad(scope.$index, scope.row)">DownLoad</el-button>-->
<!--            <el-button-->
<!--              size="mini"-->
<!--              type="danger"-->
<!--              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>-->
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex"

export default {
  data () {
    return {
      search: ''
    }
  },
  methods: {
    ...mapActions('normalCert', ['RECORD_UPDATEBASE64']),
    // handleDownLoad (index, row) {
    //   console.log(index, row)
    //   const base64 = row.attributes.certificateContent
    //   const name = row.attributes.name
    //   const certForm = { base64, name }
    //   this.RECORD_UPDATEBASE64(certForm)
    // },
    // handleDelete (index, row) {
    //   console.log(index, row)
    // }
  },
  computed:{
    ...mapState({
      udidList: state => state.udidList,
      profileList: state => state.profileList,
      cerList: state => state.cerList,
      bundleIDList: state => state.bundleIDList
    })
  }
}
</script>
<style lang="less" scoped>
#index{
  margin: 0 40px;
}
</style>
