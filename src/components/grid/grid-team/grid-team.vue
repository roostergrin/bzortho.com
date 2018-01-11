<template lang="pug" src="./grid-team.pug"></template>

<script>
import ModalTeamBio from 'components/modal/modal-team-bio/modal-team-bio'

export default {
  props: ['props'],
  data () {
    return {
      active: '',
      modal: '',
      show: false
    }
  },
  methods: {
    mouseOver (i) {
      this.active = i
    },
    mouseLeave (i) {
      this.active = ''
    },
    modalShow (info) {
      this.modal = info
      this.show = true
    }
  },
  components: {
    ModalTeamBio
  }
}
</script>
