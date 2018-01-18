<template lang='pug' src='./nav.pug'></template>

<script>
import Icon from 'components/icon/icon'

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
    },
    phone () {
      const reg = /\d+/g
      let phone = this.$store.state.pages.app.acf.app.footer.phone
      return 'tel:+1' + phone.match(reg).join('')
    },
    phoneNum () {
      return this.$store.state.pages.app.acf.app.footer.phone
    }
  },
  methods: {
    openLogin () {
      this.isOpen = !this.isOpen
    },
    openModal () {
      this.$store.dispatch('VIEW_SHOWMODAL', true)
    }
  },
  components: {
    Icon
  }
}
</script>
