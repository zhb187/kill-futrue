<template lang="html">
    <el-row >
        <el-col :sm="6" :xs="24">
            <el-menu :default-active="$route.path" router:true class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="light">
                <el-submenu index="1">
                    <template slot="title">订单管理</template>
                    <el-menu-item-group title="订单列表">
                        <el-menu-item index="/OrderList/newList">新订单</el-menu-item>
                        <el-menu-item index="1-2">转包</el-menu-item>
                        <el-menu-item index="1-3">自己发货</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="订单详情">
                        <el-menu-item index="1-4">订单详情</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="2">客户和生意伙伴</el-menu-item>
                <el-menu-item index="3">包装规则</el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
export default {
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
