<template lang='pug' src='./blog-post.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'blog-post',
  data () {
    return {
      date: ''
    }
  },
  computed: {
    props () {
      const current = this.$router.history.current.params.id
      return this.$store.state.blog[current]
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader
  }
}
</script>
