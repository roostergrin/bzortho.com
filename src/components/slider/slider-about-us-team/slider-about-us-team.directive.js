import Vue from 'vue'
import $ from 'jquery'
// eslint-disable-next-line
import slick from 'slick-carousel'

const SliderAboutUsTeam = Vue.directive('slider-about-us-team-directive', {
  bind (el) {
    // console.log(el)
    $(document).ready(function () {
      const slider = $(el)
      slider.slick({
        arrows: true,
        autoplay: false,
        speed: 2000,
        draggable: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      })
      $('#slide-1').addClass('slider-about-us-team__slide-content--active')
      slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var trueCurrent = nextSlide + 1
        $('#slide-' + trueCurrent).addClass('slider-about-us-team__slide-content--active')
        $('#slide-' + nextSlide).removeClass('slider-about-us-team__slide-content--active')
      })
      // slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
      //   $('#slide-' + currentSlide).removeClass('slider-about-us-team__slide-content--active')
      // })
    })
  }
})

export default SliderAboutUsTeam
