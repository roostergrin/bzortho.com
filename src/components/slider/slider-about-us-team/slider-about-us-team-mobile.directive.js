import Vue from 'vue'
import $ from 'jquery'
// eslint-disable-next-line
import slick from 'slick-carousel'

const SliderAboutUsTeamMobile = Vue.directive('slider-about-us-team-mobile-directive', {
  bind (el) {
    $(document).ready(function () {
      const slider = $(el)
      slider.slick({
        arrows: true,
        autoplay: false,
        speed: 2000,
        draggable: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      })
    })
  }
})

export default SliderAboutUsTeamMobile
