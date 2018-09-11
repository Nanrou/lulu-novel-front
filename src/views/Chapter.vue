<template>
  <div class="chapter-main">
    <div class="control-bar">
      <span class="span-left">
        字体：
        <mt-button type="default" size="small" @click="contextFontSize=28">大</mt-button>
        <mt-button type="default" size="small" @click="contextFontSize=22">中</mt-button>
        <mt-button type="default" size="small" @click="contextFontSize=16">小</mt-button>
      </span>
      <span class="span-right">
        <mt-button type="default" size="small">护眼</mt-button>
        <mt-button type="default" size="small">关灯</mt-button>
      </span>
    </div>
    <h2>{{ c.chapterName }}</h2>
    <chapter-nav-component
      :prev="c.prev"
      :bid="c.bid"
      :next="c.next">
    </chapter-nav-component>
    <div class="chapter-context" v-bind:style="{ fontSize: contextFontSize + 'px' }">
      {{ c.context }}
    </div>
    <chapter-nav-component
      :prev="c.prev"
      :bid="c.bid"
      :next="c.next">
    </chapter-nav-component>
  </div>
</template>

<script>
import chapterNavComponent from '@/components/ChapterNav.vue'

export default {
  name: 'chapter',
  components: {
    chapterNavComponent
  },
  data: function () {
    return {
      c: {},
      contextFontSize: 22,
    }
  },
  mounted: function () {
    this.c = {
      bid: '111',
      cid: 'asc',
      chapterName: 'bbb',
      context: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ',
      prev: 'prev_id',
      next: 'next_id'
    }
  }

}
</script>

<style lang="scss">
.chapter-main {
  padding-bottom: 8px;
  background-color: #FBF6EC;
  text-align: center;
  h2 {
    margin-top: 12px;
  }
  .chapter-context {
    margin: 15px;
    line-height: 150%;
    color: #000;
  }
  .control-bar {
    height: 40px;
    font-size: 16px;
    background-color: #ECF0F0;
    .span-left {
      float: left;
      padding: 3px;
    }
    .span-right {
      float: right;
      padding: 3px;
    }
    button: {
      margin: auto 2px;
    }
  }
}
</style>
