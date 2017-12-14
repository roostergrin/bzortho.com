<template lang="pug" src="./block-slider-container.pug"></template>

<script>
import Slider from 'components/slider/slider'
import SliderItem from 'components/slider/slider-item'

export default {
  props: ['props'],
  data () {
    return {
      list: []
    }
  },
  methods: {
    whatAmI (i) {
      this.$children[0].jump(i)
      this.$store.dispatch('VIEW_TYPES', i)
    }
  },
  created () {
    this.list = this.props
    this.$store.dispatch('VIEW_TYPES', 0)
  },
  component: {
    Slider,
    SliderItem
  }
}
</script>
