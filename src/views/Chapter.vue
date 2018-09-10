<template>
  <div class="chapter-main">
    <h2>{{ c.chapterName }}</h2>
    <chapter-nav-component
      :prev="c.prev"
      :bid="c.bid"
      :next="c.next">
    </chapter-nav-component>
    <div class="chapter-context">
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
  padding-top: 16px;
  padding-bottom: 8px;
  background-color: #FBF6EC;
  text-align: center;
  h2 {
    margin-top: 0;
  }
  .chapter-context {
    margin: 15px;
    line-height: 150%;
    font-size: 22px;
    color: #000;
  }
}
</style>
