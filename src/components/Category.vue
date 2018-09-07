<template>
  <div>
    <div class="category-div-title">
      好看的{{ category.label }}小说
    </div>
    <div class="bookbox" v-for="(c, index) in pageContent" :key="index">
      <a href="/">
        <div style="100px">
          <img :src="randomImg()"/>
          <h4>{{ c.title }}</h4>
          <p>作者: &nbsp; {{ c.author }}</p>
          <p>更新至: &nbsp; <b>{{ c.lastestChapter }}</b></p>
        </div>
      </a>
    </div>
    <div class="pagination-div">
      <el-pagination
        layout="prev, pager, next"
        :current-page.sync="currentPage"
        :page-size="5"
        :total="categoryList.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'categoryComponent',
  props: {
    category: {
      type: Object,
      required: true
    },
    categoryList: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      perCount: 5, // 每页条数
      currentPage: 1, // 当前页码
      randomImg: () => {
        return require('../assets/images/titlePage/' + Math.floor(Math.random() * 19)  + '.jpg')
      }
    }
  },
  methods: {
  },
  computed: {
    pageContent () {
      return this.categoryList.slice((this.currentPage - 1) * this.perCount, this.currentPage * this.perCount)
    }
  },
  mounted: function () {
  },

  beforeDestroy: function () {
  }
}
</script>

<style lang="scss">
.category-div-title {
  margin-top: 12px;
  border: 1px 0 solid #dfdfdf;
  border-bottom: 3px solid #3ba8de;
  background: #f2f2f2;
  font-size: 20px;
  text-align: center;
}

.bookbox {
  overflow: hidden;
  padding: 8px;
  border-bottom: 1px solid #dfdfdf;
  img {
    float: left;
    width: 80px;
    height: 100px;
    margin-right: 12px;
  }
  h4 {
    margin-top: 8px;
    margin-bottom: 5px;
    color: #007BB1;
  }
  p {
    margin-top: 8px;
    margin-bottom: 5px;
    color: #8f8f8f;
    b {
      color: #2c3e50
    }
  }
}

.pagination-div {
  margin-top: 15px;
  text-align: center;
}
</style>
