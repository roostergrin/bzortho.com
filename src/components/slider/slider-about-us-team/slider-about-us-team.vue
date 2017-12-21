<template lang="pug" src="./slider-about-us-team.pug"></template>

<script>
import SliderAboutUsTeam from './slider-about-us-team.directive'

export default {
  props: ['props'],
  data () {
    return {
      active: false
    }
  },
  directives: {
    SliderAboutUsTeam
  },
  methods: {
    test (i) {
      console.log(i)
      // console.log(this)
      // :class="{'slider-about-us-team__slide-content--active': test(slide)}"
    }
  }
}
</script>
