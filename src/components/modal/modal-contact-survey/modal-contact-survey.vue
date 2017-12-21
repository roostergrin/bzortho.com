<template lang="pug" src="./modal-contact-survey.pug"></template>

<script>
export default {
  props: ['props'],
  data () {
    return {
      active: false
    }
  },
  updated () {
    this.active ? this.$root.$el.classList.add('overflow-hidden') : this.$root.$el.classList.remove('overflow-hidden')
  }
}
</script>
