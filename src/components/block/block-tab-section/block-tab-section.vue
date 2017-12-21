<template lang='pug' src='./block-tab-section.pug'></template>

<script>
export default {
  props: ['props'],
  data () {
    return {
      body: 'Traditional metal braces are the most common type of braces and are more comfortable today than ever before. Made of high-grade stainless steel, metal braces straighten your teeth using metal brackets and archwires. With metal braces, you have the option of adding colored elastics (rubber bands) for a more unique and colorful smile.',
      i: 0
    }
  },
  methods: {
    switchTab (i, props) {
      this.body = props
      this.$store.dispatch('VIEW_BODY', i)
      console.log(this.$store.state.body)
    }
  },
  created () {
    this.switchTab(0, 'Traditional metal braces are the most common type of braces and are more comfortable today than ever before. Made of high-grade stainless steel, metal braces straighten your teeth using metal brackets and archwires. With metal braces, you have the option of adding colored elastics (rubber bands) for a more unique and colorful smile.')
  }
}
</script>
