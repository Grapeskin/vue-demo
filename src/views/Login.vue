<template>
  <div >
    <el-row  id="my-id">
      <el-col :span="16">
        <img src="../assets/logo.png">
      </el-col>
      <el-col :span="8">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'

export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        username: 'admin',
        password: '123456',
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid && this.ruleForm.username === 'admin' && this.ruleForm.password === '123456') {
          ElMessage.success({
            message: '登录成功！欢迎你',
            type: 'success'
          });
          window.localStorage.setItem('user', JSON.stringify({username: this.ruleForm.username}))
          this.$router.push(`/home`)
        } else {
          ElMessage.error('用户名或密码错误');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>

</style>