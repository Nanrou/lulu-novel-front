<template>
  <div>
    <div class="category-div-title" style="text-align: left">
      {{ b.title }} 所有章节
    </div>
    <div class="chapter-list">
      <template v-for="(c, index) in chapters">
        <mt-cell :title="c.title" :to="'/chapter/' + c.cid" :key="index" is-link></mt-cell>
      </template>
    </div>
    <div class="chapters-pagination">
      <el-pagination
        :current-page.sync="currentPage"
        :page-size="5"
        layout="prev, slot, next"
        @current-change="handlePagination"
        :total="allChapter.length">
        <span>
          <el-select v-model="pickerIndex" @change="handlePicker">
            <el-option
              v-for="item in pickerOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              >
            </el-option>
          </el-select>
        </span>
      </el-pagination>
    </div>
  </div>
</template>

<script>
// todo 现在的做法是第一次就全部请求，然后304
export default {
  name: 'chapters',
  data: function () {
    return {
      b: {},
      pageSize: 5,
      currentPage: 1,
      chapters: [],
      allChapter: [],
      pickerIndex: 0,
      pickerOption: [],
    }
  },
  methods: {
    handlePicker: function (val) {
      this.currentPage = val + 1
      this.handlePagination(this.currentPage)
    },
    handlePagination: function (val) {
      this.chapters = this.allChapter.slice((val - 1) * this.pageSize,  val * this.pageSize)
    }
  },
  mounted: function () {
    this.b = {
      title: 'test',
    }
    for (let i=0; i < 20; i++) {
      this.allChapter.push({
        title: String(i), cid: String(i)
      })
    }

    this.chapters = this.allChapter.slice(0, this.pageSize)

    let _total = Math.floor(this.allChapter.length / this.pageSize)
    for (let i=0; i < _total; i++) {
      this.pickerOption.push({
        value: i,
        label: 1 + i * this.pageSize + '章 - ' + ((i + 1) * this.pageSize) + '章'
      })
    }

    if (1 + _total * this.pageSize <= this.allChapter.length) {
      this.pickerOption.push({
        value: _total,
        label: 1 + _total * this.pageSize + '章 - ' + this.allChapter.length + '章'
      })
    }
    
  }
}
</script>

<style lang="scss">
.chapters-pagination {
  text-align: center;
  height: 42px;
  button {
    width: 40px;
    height: 40px;
  }
}
</style>
