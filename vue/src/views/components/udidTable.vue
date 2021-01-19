<template>
    <div id="index">
      <el-table
        :data="udidList"
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
          label="UDID"
          prop="attributes.udid">
        </el-table-column>
        <el-table-column
          label="Date"
          prop="attributes.addedDate">
        </el-table-column>
        <el-table-column
          align="right">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>
<script>
import {mapState} from "vuex";

export default {
  data () {
    return {
      search: ''
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  },
  computed:{
    ...mapState({
      udidList: state => state.udidList,
      profileList: state => state.profileList,
      cerList: state => state.cerList,
    })
  }
}
</script>
<style lang="less" scoped>
#index{
  margin: 0 40px;
}
</style>
