<template lang="pug" src="./grid-team.pug"></template>

<script>
export default {
  props: ['props'],
  data () {
    return {
      active: ''
    }
  },
  methods: {
    mouseOver (i) {
      this.active === i ? this.active = '' : this.active = i
    }
  }
}
</script>
