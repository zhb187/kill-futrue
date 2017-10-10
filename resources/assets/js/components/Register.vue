<template lang="html">
    <el-row type="flex" class="row-bg register" justify="center">
        <el-col class="register-main" :md="6" :sm="12" :xs="24">
            <h1>Taurus</h1>
            <el-form ref="form" :model="form">
                <el-form-item>
                    <el-input placeholder="账户" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="密码" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">注册</el-button>
                </el-form-item>
                <el-form-item>
                     <router-link :to="{ name: 'login' }">已有账户，去登录</router-link>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>
<script>
export default {
    data() {
      return {
        form: {
          name: '',
          password: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
