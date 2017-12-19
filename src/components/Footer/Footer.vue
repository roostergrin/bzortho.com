<template lang='pug' src='./footer.pug'></template>

<script>
import Icon from 'components/icon/icon'

export default {
  // props: ['props'],
  computed: {
    classObject () {
      return {
        home: this.$route.name === 'home',
        aboutus: this.$route.name === 'about us'
      }
    },
    props () {
      return this.$store.state.pages.app
    }
  },
  components: {
    Icon
  }
}
</script>
