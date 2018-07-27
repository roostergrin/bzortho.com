<template lang='pug' src='./blog.pug'></template>

<script>
import Loader from 'components/loader/loader'
import NavTrigger from 'components/nav/custom-nav-trigger/custom-nav-trigger'
import Hero from 'components/hero/hero'
import BlogLists from 'components/Custom/custom-posts/custom-posts'

export default {
  name: 'blog',
  computed: {
    props () {
      return this.$store.state.pages['blog']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    NavTrigger,
    Hero,
    BlogLists
  }
}
</script>
