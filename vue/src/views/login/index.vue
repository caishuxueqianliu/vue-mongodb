<template>
    <div id="index">
      <p>这是登陆页面</p>
      <div class="loginFrom">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm box">
          <el-form-item label="用户名" prop="user" class="label">
            <el-input type="text" v-model="ruleForm.user" autocomplete="off" clearable></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="pass" class="label">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" clearable></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code" class="label">
            <el-input type="text" v-model="ruleForm.code" autocomplete="off" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>
<script>
export default {
  name: "login",
  data () {
    var checkCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('验证码不能为空'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var checkUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        user: '',
        code: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' },
          { min: 6, max: 8, message: '密码长度在 6 到 8 个字符', trigger: 'blur' }
        ],
        user: [
          { validator: checkUser, trigger: 'blur' },
          { min: 4, max: 9, message: '用户名长度在 4 到 9 个字符', trigger: 'blur' }
        ],
        code: [
          { validator: checkCode, trigger: 'blur' },
          { min: 4, max: 4, message: '验证码为 4 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="less" scoped>
#index{
  background-color:#333;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  p{
    font-size: 20px;
    color:white;
  }
  .loginFrom{
    height: 600px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin-right: 10rem;
    .box{
      width: 25rem;
    }
    /deep/ .el-form-item__label{
      color: white;
    }
  }
}
</style>
