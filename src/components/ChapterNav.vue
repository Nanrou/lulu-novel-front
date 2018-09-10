<template>
  <el-row class="chapter-nav">
    <el-col :span="8">
      <router-link :to="'/chapter/' + prev">上一章</router-link>
    </el-col>
    <el-col :span="8">
      <router-link :to="'/book/' + bid">返回目录</router-link>
    </el-col>
    <el-col :span="8">
      <router-link :to="'/chapter/' + next">下一章</router-link>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'chapterNavComponent',
  props: {
    prev: {
      type: String,
      required: true
    },
    bid: {
      type: String,
      required: true
    },
    next: {
      type: String,
      required: true
    },
  }
}
</script>

<style lang="scss">
.chapter-nav {
  padding: 8px 0;
  background-color: #f4f0e9;
  border: 1px solid #ece6da;
  a {
    &:link, &:hover, &:visited, &:active {color:rgb(18, 80, 18)}
  }
}
</style>
