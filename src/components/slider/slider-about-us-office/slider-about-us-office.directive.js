import Vue from 'vue'
import $ from 'jquery'
// eslint-disable-next-line
import slick from 'slick-carousel'

const SliderAboutUsOffice = Vue.directive('slider-about-us-office-directive', {
  bind (el) {
    $(document).ready(function () {
      const slider = $(el)
      slider.slick({
        arrows: true,
        autoplay: false,
        speed: 500,
        fade: true,
        dots: true,
        infinite: true
      })
    })
  }
})

export default SliderAboutUsOffice
