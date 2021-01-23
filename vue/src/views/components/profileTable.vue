<template>
    <div id="index">
      <el-table
        :data="profileList"
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
          label="profileType"
          prop="attributes.profileType">
        </el-table-column>
<!--        <el-table-column-->
<!--          label="profileContent"-->
<!--          prop="attributes.profileContent">-->
<!--        </el-table-column>-->
        <el-table-column
          label="Date"
          prop="attributes.createdDate">
        </el-table-column>
        <el-table-column
          align="right">
          <template slot="header">
            <el-button type="primary" icon="el-icon-plus" circle @click="dialogFormVisible = true"></el-button>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleDownLoad(scope.$index, scope.row)">download</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="创建一个签名文件" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="签名名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="签名类型" :label-width="formLabelWidth">
            <el-select v-model="form.type" placeholder="请选择PRORFILE类型">
              <el-option
                v-for="item in type"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="证书" :label-width="formLabelWidth">
            <el-select v-model="form.cert" placeholder="请选择绑定的证书文件">
              <el-option
                v-for="item in cerList"
                :key="item.id"
                :label="item.attributes.name+item.attributes.expirationDate"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="bundleId" :label-width="formLabelWidth">
            <el-select v-model="form.bundleID" placeholder="请选择绑定的bundleID">
              <el-option
                v-for="item in bundleIDList"
                :key="item.id"
                :label="item.attributes.identifier"
                :value="item.id">
              </el-option>
            </el-select>
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
      type: ['IOS_APP_DEVELOPMENT', 'IOS_APP_STORE', 'IOS_APP_ADHOC'],
      formLabelWidth: '120px',
      dialogFormVisible: false,
      form: {
        name: "",
        type: "",
        cert: "",
        bundleID: ""
      }
    }
  },
  methods: {
    ...mapActions('normalCert', ['RECORD_UPDATEBASE64PROFILE']),
    ...mapActions(['recordGetBundleIDList', 'recordDelProfile', 'recordGetProfileList', 'recordCreateProfile']),
    handleDownLoad (index, row) {
      const base64 = row.attributes.profileContent
      const name = row.attributes.name
      const profileForm = { base64, name }
      this.RECORD_UPDATEBASE64PROFILE(profileForm)
    },
    handleDelete (index, row) {
      const id = row.id
      this.recordDelProfile(id).then(() => {
        this.recordGetProfileList()
      }
      )
    },
    submit () {
      const data = {
        "data": {
          "attributes": {
            "name": this.form.name,
            "profileType": this.form.type
          },
          "relationships": {
            "bundleId": {
              "data": {
                "id": this.form.bundleID,
                "type": "bundleIds"
              }
            },
            "certificates": {
              "data": [
                { // "id": "iPhone Distribution: Zhengzhou Danhuo Network Technology Co., Ltd. (ZV28W82FWU)",
                  "id": this.form.cert,
                  "type": "certificates"
                }
              ]
            },
            "devices": {
              "data": this.devices
            }
          },
          "type": "profiles"
        }
      }
      this.recordCreateProfile(data).then(() => {
        this.dialogFormVisible = false
        this.recordGetProfileList()
      })
    }
  },
  computed: {
    ...mapState({
      udidList: state => state.udidList,
      profileList: state => state.profileList,
      cerList: state => state.cerList,
      bundleIDList: state => state.bundleIDList
    }),
    devices () {
      var data = this.udidList.map(item => {
        return ({
          "id": item.id, "type": "devices"
        })
      })
      return data
    }
  }
}
</script>
<style lang="less" scoped>
#index{
  margin: 0 40px;
}
</style>
