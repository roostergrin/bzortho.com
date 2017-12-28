<template lang="pug" src="./custom-modal-multitool.pug"></template>

<script>
import Icon from 'components/icon/icon'
import ModalForm from 'components/form/form-modal/form-modal'

export default {
  props: ['props'],
  methods: {
    closeModal () {
      this.$store.dispatch('VIEW_SHOWMODAL', false)
    }
  },
  components: {
    Icon,
    ModalForm
  }
}
</script>
