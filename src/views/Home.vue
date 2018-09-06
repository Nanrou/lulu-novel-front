<template>
  <div>
    <mt-navbar v-model="tabCount">
      <template v-for="(val, index) in tabs">
        <mt-tab-item :key="index" :id="index">{{ val }}</mt-tab-item>
      </template>
    </mt-navbar>
    <mt-search
      v-model="searchText"
      cancel-text="取消"
      placeholder="请输入小说名字">
    </mt-search>
    <mt-tab-container v-model="tabCount">
      <mt-tab-container-item id="0">
      </mt-tab-container-item>
      <mt-tab-container-item id="1">
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import category from '../components/Category.vue'

export default {
  name: 'homeComponent',
  components: {
    category
  },
  data: function () {
    return {
      tabCount: 0,
      tabs: ['分类', '全本', '书架'],
      searchText: '',
    }
  },
  methods: {
    register: function () {

    },

    login: function () {

    }
  }
}
</script>

<style lang="scss">
.mint-tab-item-label {
  font-size: 15px;
}
</style>
