<template lang="pug" src="./modal-contact-survey.pug"></template>

<script>
import FormSurvey from 'components/form/form-survey/form-survey'
import Icon from 'components/icon/icon'

export default {
  props: ['props'],
  data () {
    return {
      active: false
    }
  },
  updated () {
    this.active ? this.$root.$el.classList.add('overflow-hidden') : this.$root.$el.classList.remove('overflow-hidden')
  },
  components: {
    Icon,
    FormSurvey
  }
}
</script>
