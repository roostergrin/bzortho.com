<template lang="pug" src="./custom-get-started-section.pug"></template>

<script>
export default {
  props: ['props'],
  data () {
    return {
      active: ''
    }
  },
  methods: {
    activate (i) {
      this.active = i
    }
  }
}
</script>
