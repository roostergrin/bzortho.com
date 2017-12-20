<template lang="pug" src="./custom-contact-body.pug"></template>

<script>
import FormContactPage from 'components/form/form-contact-page/form-contact-page'
import CustomContactColumn from 'components/custom/custom-contact-column/custom-contact-column'
import ModalContactSurvey from 'components/modal/modal-contact-survey/modal-contact-survey'
export default {
  props: ['props'],
  components: {
    FormContactPage,
    CustomContactColumn,
    ModalContactSurvey
  }
}
</script>
