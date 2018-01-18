<template lang="pug" src="./custom-invisalign-section.pug"></template>

<script>
export default {
  props: ['props'],
  data: () => {
    return {
      active: 0
    }
  },
  methods: {
    activate (i) {
      this.active = i
    }
  }
}
</script>
