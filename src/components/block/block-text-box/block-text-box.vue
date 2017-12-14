<template lang='pug' src='./block-text-box.pug'></template>

<script>
export default {
  props: ['props'],
  data () {
    return {
      list: []
    }
  },
  created () {
    this.list = this.props
  }
}
</script>
