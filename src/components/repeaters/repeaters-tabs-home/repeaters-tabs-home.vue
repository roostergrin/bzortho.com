<template lang="pug" src="./repeaters-tabs-home.pug"></template>

<script>
import Icon from 'components/icon/icon'

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
  },
  components: {
    Icon
  }
}
</script>
