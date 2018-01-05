<template lang='pug' src='./block-tab-section.pug'></template>

<script>
export default {
  props: ['props'],
  data () {
    return {
      body: '',
      image: '',
      i: 0
    }
  },
  methods: {
    switchTab (i, props, image) {
      this.body = props
      this.image = image
      this.$store.dispatch('VIEW_BODY', i)
    }
  },
  created () {
    this.switchTab(0, this.props[0].body, this.props[0].image)
  }
}
</script>
