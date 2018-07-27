<template lang="pug" src="./custom-posts.pug"></template>

<script>

export default {
  computed: {
    props () {
      return this.$store.state.blog
    }
  }
}
</script>
