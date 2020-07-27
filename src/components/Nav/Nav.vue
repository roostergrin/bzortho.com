<template lang='pug' src='./nav.pug'></template>

<script>
import Vue from 'vue'
import Icon from 'components/icon/icon'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-98372248-1'
})

export default {
  data () {
    return {
      isClicked: false,
      isOpen: false
    }
  },
  computed: {
    links () {
      return this.$router.options.routes
    },
    classObject () {
      return {
        start: this.$store.state.nav === false,
        scrolled: this.$store.state.nav === 1,
        reset: this.$store.state.nav === 2
      }
    }
  },
  methods: {
    openLogin () {
      this.isOpen = !this.isOpen
    },
    openModal () {
      this.$store.dispatch('VIEW_SHOWMODAL', true)
    },
    eventTracking: function () {
      console.log('Event function executed')
      this.$ga.event('send', 'Consultation', 'Free cosultation', 500)
    }
  },
  components: {
    Icon
  }
}
</script>
