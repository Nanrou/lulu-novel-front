<template>
  <div>
    <mt-navbar v-model="tabNum" style="background-color: #f2f2f2">
      <template v-for="(val, index) in tabs">
        <mt-tab-item :key="index" :id="index">{{ val }}</mt-tab-item>
      </template>
    </mt-navbar>
    <mt-search
      v-model="searchText"
      cancel-text="取消"
      placeholder="请输入小说名字"
      style="height: 100%">
    </mt-search>
    <mt-tab-container :value="tabNum">
      <mt-tab-container-item :id="0">
        <div class="category-div">
          <el-row>
            <el-col :span="8" v-for="item in categorys" :key="item.value">
              <mt-button @click.native="changeCategory(item)" style="margin: 8px;">{{ item.label }}</mt-button>
            </el-col>
          </el-row>
        </div>
        <category-component v-loading="categoryLoading" :category="category" :category-list="categoryList"></category-component>
      </mt-tab-container-item>
      <mt-tab-container-item :id="1">
        <category-component v-loading="categoryLoading" :category="{'label': '全本', 'value': 'quanben'}" :category-list="categoryList"></category-component>
      </mt-tab-container-item>
      <mt-tab-container-item :id="2">
        <book-shelf-component></book-shelf-component>
      </mt-tab-container-item>
    </mt-tab-container>
    <el-dialog
      title="Oop"
      :visible="dialogVisable"
      width="80%">
      <div style="text-align: center">
        <img src="../assets/images/two-hair.gif"/>
        <p><b>你还没有登陆呀</b></p>
      </div>
      <span slot="footer">
        <el-button type="primary" @click="handleCloseDialog" style="width: 100%">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import categoryComponent from '../components/Category.vue'
import bookShelfComponent from '../components/BookShelf.vue'

export default {
  name: 'home',
  components: {
    categoryComponent,
    bookShelfComponent
  },
  data: function () {
    return {
      tabNum: 0,
      tabs: ['分类', '全本', '书架'],
      searchText: '',
      categorys: [
        {label: '玄幻修真', value: 'xuanhuan'},
        {label: '科幻网游', value: 'kehuan'},
        {label: '都市重生', value: 'dushi'},
        {label: '架空历史', value: 'jiakong'},
        {label: '武侠世界', value: 'wuxia'},
        {label: '灵异悬疑', value: 'lingyi'},
      ],
      category: {label: '玄幻修真', value: 'xuanhuan'},
      categoryList: [],
      categoryLoading: false,
      dialogVisable: false,
    }
  },
  methods: {
    changeCategory: function (item) {
      this.category = item
      this.$router.push({ name: 'category', params: { category: item.value }})
      this.requestCategory(item)
    },
    requestCategory: function (item) {
      this.categoryLoading = true
      console.log(item)
      this.categoryLoading = false
    },

    handleCloseDialog: function () {
      this.tabNum = 0
      this.dialogVisable = false
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }, 
  },
  watch: {
    tabNum: function(val) {
      if (val === 2 && !this.isLogin) {
        this.dialogVisable = true
      }
    }
  },
  mounted: function () {
    this.categoryList = [
      {bid: 111, author: 'lulu', title: '超脱诸天万界', lastestChapter: 'lastChance'},
      {bid: 111, author: 'amao', title: '雪中悍刀行', lastestChapter: 'lastChance++'},
      {bid: 111, author: 'lulu', title: '超脱诸天万界', lastestChapter: 'lastChance'},
      {bid: 111, author: 'amao', title: '雪中悍刀行', lastestChapter: 'lastChance++'},
      {bid: 111, author: 'lulu', title: '超脱诸天万界', lastestChapter: 'lastChance'},
      {bid: 111, author: 'amao', title: '雪中悍刀行', lastestChapter: 'lastChance++'},
      {bid: 111, author: 'lulu', title: '超脱诸天万界', lastestChapter: 'lastChance'},
      {bid: 111, author: 'amao', title: '雪中悍刀行', lastestChapter: 'lastChance++'},
      {bid: 111, author: 'lulu', title: '超脱诸天万界', lastestChapter: 'lastChance'},
      {bid: 111, author: 'amao', title: '雪中悍刀行', lastestChapter: 'lastChance++'},
      {bid: 111, author: 'lulu', title: '超脱诸天万界', lastestChapter: 'lastChance'},
      {bid: 111, author: 'amao', title: '雪中悍刀行', lastestChapter: 'lastChance++'},
    ]
  }
}
</script>

<style lang="scss">
.mint-tab-item-label {
  font-size: 15px;
}

.category-div {
  text-align: center;
  margin-top: 5px;
}

</style>
