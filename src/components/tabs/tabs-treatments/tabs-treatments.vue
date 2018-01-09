<template lang="pug" src="./tabs-treatments.pug"></template>

<script>
export default {
  props: ['props'],
  data: () => {
    return {
      active: 0
    }
  },
  methods: {
    change (i) {
      this.active = i
    }
  }
}
</script>
