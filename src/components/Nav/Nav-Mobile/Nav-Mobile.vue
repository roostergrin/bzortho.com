<template lang='pug' src='./nav-mobile.pug'></template>

<script>
import Icon from 'components/icon/icon'
export default {
  props: ['props'],
  data () {
    return {
      isClicked: false
    }
  },
  computed: {
    links () {
      return this.$router.options.routes
    }
  },
  methods: {
    toggle () {
      this.links = !this.links
      this.isClicked = !this.isClicked
    }
  },
  components: {
    Icon
  }
}
</script>
