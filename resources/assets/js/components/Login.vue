<template lang="html">
    <el-row type="flex" class="row-bg login" justify="center">
        <el-col class="login-main" :md="6" :sm="12" :xs="24">
            <h1>Taurus</h1>
            <el-form ref="form" :model="form">
                <el-form-item>
                    <el-input placeholder="账户" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="密码" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button   type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
                <el-form-item>
                    没有账户？<router-link :to="{ name: 'register' }">点击注册</router-link>
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
