<template>
  <div id="app">
    <div class="home-header">
      <div class="logo">
        <router-link to="/">
          <h2>超级</h2>
          <p>m.superxiaoshuo.com</p>
        </router-link>
      </div>
      <div class="register">
        <template v-if="isLogin">
          hi~
          <mt-button size="small" @click="logout">登出</mt-button>
        </template>
        <template v-else>
          <mt-button size="small" @click="register">注册</mt-button>
          <mt-button size="small" @click="login">登陆</mt-button>
        </template>
      </div>
    </div>

    <router-view/>

    <div class="main-footer">
      <p>© 2018 露露&阿毛出品</p>
      <!--
      <el-row type="flex" justify="space-around">
        <el-col :span="6">
          <a href="/">收藏</a>
        </el-col>
        <el-col :span="6">
          <a href="/">书架</a>
        </el-col>
        <el-col :span="6">
          <a href="/" style="color: #F56C6C">报错</a>
        </el-col>
      </el-row>
      -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
    }
  },
  methods: {
    login: function () {
      this.$store.commit('login')
    },

    logout: function () {
      this.$store.commit('logout')
    },
    register: function () {
      
    },
  },
  watch: {
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }, 
  },
  mounted: function () {
  }
}
</script>


<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a {
  text-decoration: none;
  // &:link, &:hover, &:visited, &:active {color: #292b32}
}

.home-header {
  background-color: #007BB1;
  color: #fff;
  height: 50px;
  display: block;
  text-align: center;
  .logo {
    float: left;
    margin-left: 10px;
    a {
      &:link, &:hover, &:visited, &:active {color: #fff}
      h2 {
        font-size: 18px;
        font-weight: bolder;
        padding-top: 6px;
        margin: 0;
      }
      p {
        font-size: 15px;
        line-height: 80%;
        margin: 0;
      }
    }
  }
  .register {
    float: right;
    font-size: 16px;
    button {
      margin: 3px;
      margin-top: 8px;
    }
  }
}

.main-footer {
  background: #ECF0F0;
  padding: 10px 0 0;
  border-top: 1px solid #f1f1f1;
  text-align: center;
  padding-bottom: 50px;
  a {
    &:link, &:hover, &:visited, &:active {color: #606266}
  }
}
</style>
