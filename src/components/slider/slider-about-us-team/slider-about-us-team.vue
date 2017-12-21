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
  }
}
</script>
