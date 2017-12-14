<template lang="pug" src="./custom-new-slider.pug"></template>

<script>
import Slider2 from 'components/slider/slider'
import SliderItem from 'components/slider/slider-item'

export default {
  props: ['props'],
  components: {
    Slider2,
    SliderItem
  },
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
  }
}
</script>
