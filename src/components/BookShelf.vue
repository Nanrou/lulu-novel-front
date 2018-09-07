<template>
  <div>
    <div v-if="isLogin">
      空空如也
    </div>

  </div>
</template>

<script>
export default {
  name: 'bookShelfComponent',
  data: function () {
    return {
    }
  },
  methods: {
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
