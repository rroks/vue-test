<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside width="200px">
        <el-menu id="nav" :default-active="this.$route.path" @select="handleSelect" router>
          <el-menu-item index="/base">Home</el-menu-item>
          <el-menu-item index="/about">About</el-menu-item>
          <el-submenu index="/par">
            <template slot="title">基础数据</template>
            <el-menu-item index="/first">准驾类型</el-menu-item>
            <el-menu-item index="/second">事故类型</el-menu-item>
          </el-submenu>
          
        </el-menu>

        <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
        </div>-->
      </el-aside>
      <el-container>
        <el-header style="text-align: right; line-height: 60px;">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span style="margin-right: 15px">User</span>
          <i class="el-icon-switch-button" @click="logOut" style="margin-right: 15px"></i>
        </el-header>
        <el-main>
            <router-view />
      </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld";
import axios from "../axios_config"

export default {
  data() {
    return {
      Home: "home",
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: '../assets/logo.png'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(keyPath);
    },
    logOut() {
      var self = this
      this.$confirm('您确定要退出吗?', '退出管理平台', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        console.log(localStorage.getItem("token"));
        // localStorage.removeItem("token");
        self.$router.replace("/login");
        if (localStorage.getItem("token") !== null) {
          axios.post(
            "/system/user/logout"
          ).then(res => {
            // localStorage.removeItem("token")
            next("/login");
          })
        // } else {
        //   alert("Logout failed.");
        }
          
        //   self.$store.dispatch('LogOut', info).then(() => {
        //     self.$router.push({ path: "/login" })
        // })
        // localStorage.removeItem("token");
        // self.$store.dispatch('LogOut', info).then(() => {
        //   self.$router.push({ path: '/login' })
        // }).catch(() => {
        // })
      // }).catch(() => {})

    })
  }
  }
}
</script>

<style>
  .el-aside {
    color: #333;
    height: 100%;
  }
  .el-menu {
    height: 100%;
  }
</style>
