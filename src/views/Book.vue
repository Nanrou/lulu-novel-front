<template>
  <div class="book-div">
    <div class="book-header">
      <el-row class="book-detail">
        <el-col :span="8" style="text-align: center">
          <img class="book-img" :src="randomImg()"/>
        </el-col>
        <el-col :span="16">
          <h2>{{ b.title }}</h2>
          <p>作者：{{ b.author }}</p>
          <p>分类：{{ b.category }}</p>
          <p>状态：{{ b.status === 0 ? '连载中' : '已完本' }}</p>
          <p>更新：{{ b.updateTime }}</p>
          <p>最新：{{ b.lastestChapter }}</p>
        </el-col>
      </el-row>
      <div class="book-btn">
        <mt-button type="primary" style="width: 100%">开始阅读</mt-button>
      </div>
      <div class="book-btn" v-if="record">
        <mt-button type="primary" style="width: 100%">上次读到</mt-button>
      </div>
    </div>
    <div class="category-div-title" style="text-align: left">
      {{ b.title }} 简介
    </div>
    <div class=remark-div>
      {{ b.remark }}
    </div>
    <div class="category-div-title" style="text-align: left">
      {{ b.title }} 最新章节
    </div>
    <div class="chapter-list">
      <template v-for="(l, index) in lastestChapterList">
        <mt-cell :title="l.title" :to="'/chapter/' + l.cid" :key="index" is-link></mt-cell>
      </template>
    </div>
      <div class="book-btn">
        <mt-button type="primary" style="width: 100%" @click="goToChapters">点击查看全部章节</mt-button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'book',
  data: function () {
    return {
      b: {},
      lastestChapterList: [],
      record: false,
      randomImg: () => {
        return require('../assets/images/titlePage/' + Math.floor(Math.random() * 19)  + '.jpg')
      }
    }
  },
  methods: {
    goToChapters: function () {
      this.$router.push({ name: 'chapters', params: { bid: this.b.bid }})
    }
  },
  mounted: function () {
    this.b = {
      bid: 'hash',
      title: 'liangjue',
      author: 'santian',
      status: 0,
      category: 'lingyixuanyi',
      updateTime: '2017-12-14 06:26:00',
      lastestChapter: 'that chapter',
      remark: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla '
    }

    this.lastestChapterList = [
      {title: '2222', cid: 'asbc'},
      {title: '2222', cid: 'asbc'},
      {title: '2222', cid: 'asbc'},
      {title: '2222', cid: 'asbc'},
      {title: '2222', cid: 'asbc'},
      {title: '2222', cid: 'asbc'},
      {title: '2222', cid: 'asbc'},
      {title: '2222', cid: 'asbc'},
      {title: '2222', cid: 'asbc'},
      {title: '2222', cid: 'asbc'},
      {title: '2222', cid: 'asbc'},
    ]

    if (window.localStorage.getItem('superxiaoshuo-books-record')) {
      let _tmp = JSON.parse(window.localStorage.getItem('superxiaoshuo-books-record')) 
      if (_tmp.hasOwnProperty(this.b.bid)) {
        this.record = _tmp[this.b.bid]
      }
    }
  }
}
</script>

<style lang="scss">
.book-div {
  width: 99%;
  margin: 10px auto;
  .book-header {
    .book-detail {
      height: 120px;
      img {
        height: 120px;
      }
      h2 {
        margin: 0;
        height: 30px;
        line-height: 30px;
        font-size: 22px;
        color: #000;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      p {
        margin: 0;
        line-height: 18px;
        font-size: 12px;
        color: #999; 
      }
    }
    .book-btn {
      margin: 8px auto;
      width: 80%;
    }
  }
  .remark-div {
    word-wrap: normal;
    width: 100%;
    color: #999;
    font-size: 16px;
  }
  .chapter-list {
    margin: 0 auto 8px;
  }
}
</style>
