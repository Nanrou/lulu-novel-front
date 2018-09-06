<template>
  <div>
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
      </mt-tab-container-item>
      <mt-tab-container-item :id="2">
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import categoryComponent from '../components/Category.vue'

export default {
  name: 'homeComponent',
  components: {
    categoryComponent
  },
  data: function () {
    return {
      categorys: [
        {label: '玄幻修真', value: 'xuanhuan'},
        {label: '科幻网友', value: 'kehuan'},
        {label: '都市重生', value: 'dushi'},
        {label: '架空历史', value: 'jiakong'},
        {label: '武侠世界', value: 'wuxia'},
        {label: '灵异悬疑', value: 'lingyi'},
      ],
      category: {label: '玄幻修真', value: 'xuanhuan'},
      categoryList: [],
      categoryLoading: false,
    }
  },
  methods: {
    changeCategory: function (item) {
      this.category = item
      this.requestCategory()
    },

    requestCategory: function (item) {
      this.categoryLoading = true
      this.categoryLoading = false
    },

  },
  computed: {
    tabNum () {
      return this.$store.state.tabNum
    }
  },
  mounted: function () {
    this.categoryList = [
      {author: 'lulu', title: '超脱诸天万界', lastestChapter: 'lastChance'},
      {author: 'amao', title: '雪中悍刀行', lastestChapter: 'lastChance++'},
      {author: 'lulu', title: '超脱诸天万界', lastestChapter: 'lastChance'},
      {author: 'amao', title: '雪中悍刀行', lastestChapter: 'lastChance++'},
      {author: 'lulu', title: '超脱诸天万界', lastestChapter: 'lastChance'},
      {author: 'amao', title: '雪中悍刀行', lastestChapter: 'lastChance++'},
      {author: 'lulu', title: '超脱诸天万界', lastestChapter: 'lastChance'},
      {author: 'amao', title: '雪中悍刀行', lastestChapter: 'lastChance++'},
      {author: 'lulu', title: '超脱诸天万界', lastestChapter: 'lastChance'},
      {author: 'amao', title: '雪中悍刀行', lastestChapter: 'lastChance++'},
      {author: 'lulu', title: '超脱诸天万界', lastestChapter: 'lastChance'},
      {author: 'amao', title: '雪中悍刀行', lastestChapter: 'lastChance++'},
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

.main-footer {
  margin-top: 12px;
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
