<template lang="pug" src="./repeaters-tabs-home.pug"></template>

<script>
export default {
  props: ['props'],
  data () {
    return {
      active: ''
    }
  },
  methods: {
    activate (num) {
      this.active = num
    }
  }
}
</script>
