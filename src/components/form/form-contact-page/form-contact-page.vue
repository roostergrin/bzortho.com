<template lang="pug" src="./form-contact-page.pug"></template>

<script>
import api from 'api'
import axios from 'axios'

export default {
  data: () => {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      formSubmitted: false
    }
  },
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll()
      .then(result => {
        if (result) {
          this.formSubmitted = true
        } else {
          alert('Correct them errors!')
        }
      })
      .catch(() => {
        alert('Correct them errors!')
      })
    },
    onSubmit: function (e) {
      axios.post(api + '/rg-mail/v1/contact-page', {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message
      })
      .then(res => {
        console.log(res)
      })
      .catch(e => {
        console.log('Form Error: ' + e)
      })
    }
  }
}
</script>
