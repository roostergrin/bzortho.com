<template lang="pug" src="./custom-about-us-doctor.pug"></template>

<script>
export default {
  props: ['props'],
  data () {
    return {
      active: 0
    }
  },
  methods: {
    activate (num) {
      this.active = num
    }
  }
}
</script>
