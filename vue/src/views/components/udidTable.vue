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
          <template slot="header" >
            <el-button type="primary" icon="el-icon-plus" circle @click="dialogFormVisible = true"></el-button>
          </template>
<!--          <template slot-scope="scope">-->
<!--            <el-button-->
<!--              size="mini"-->
<!--              @click="handleEdit(scope.$index, scope.row)">Edit</el-button>-->
<!--            <el-button-->
<!--              size="mini"-->
<!--              type="danger"-->
<!--              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>-->
<!--          </template>-->
        </el-table-column>
      </el-table>
      <el-dialog title="添加设备号" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="udid" :label-width="formLabelWidth">
            <el-input v-model="form.udid" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="备注" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submit()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex"
import { Notification } from "element-ui"
export default {
  data () {
    return {
      radio: '1',
      formLabelWidth: '120px',
      dialogFormVisible: false,
      form: {
        name: '',
        udid: ''
      }
    }
  },
  methods: {
    ...mapActions(['recordAddUdid']),
    submit () {
      console.log(this.form.name)
      console.log(this.form.udid)
      if (!this.form.name || !this.form.udid) {
        Notification.error({
          title: '发生错误',
          message: '输入内容不能为空'
        })
      } else {
        this.recordAddUdid(
          {
            "data": {
              "attributes": {
                "name": this.form.name,
                "platform": "IOS",
                "udid": this.form.udid
              },
              "type": "devices"
            }
          }
        )
        this.dialogFormVisible = false
      }
    }
    // handleEdit (index, row) {
    //   console.log(index, row)
    // },
    // handleDelete (index, row) {
    //   console.log(index, row)
    // }
  },
  computed: {
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
