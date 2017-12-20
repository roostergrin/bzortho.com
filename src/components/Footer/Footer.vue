<template lang='pug' src='./footer.pug'></template>

<script>
import Icon from 'components/icon/icon'

export default {
  computed: {
    classObject () {
      return {
        home: this.$route.name === 'home',
        aboutus: this.$route.name === 'about us'
      }
    },
    props () {
      return this.$store.state.pages.app
    },
    phone () {
      const reg = /\d+/g
      let phone = this.$store.state.pages.app.acf.app.footer.phone
      return 'tel:+1' + phone.match(reg).join('')
    }
  },
  components: {
    Icon
  }
}
</script>
