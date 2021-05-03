<template lang='pug' src='./custom-home-text-box.pug'></template>

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
