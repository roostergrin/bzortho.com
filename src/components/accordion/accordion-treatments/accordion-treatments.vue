<template lang="pug" src="./accordion-treatments.pug"></template>

<script>
export default {
  props: ['props'],
  data: () => {
    return {
      active: ''
    }
  },
  methods: {
    activate (i) {
      this.active === i ? this.active = '' : this.active = i
    }
  }
}
</script>
