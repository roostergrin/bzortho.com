import Vue from 'vue'
import $ from 'jquery'
// eslint-disable-next-line
import slick from 'slick-carousel'

const SliderAboutUsTeam = Vue.directive('slider-about-us-team-directive', {
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
      const allSlides = $('.slider-about-us-team__card').length

      slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        const num = allSlides - 1

        if (currentSlide === num) {
          zero(event, slick, currentSlide, nextSlide)
        }
        if (nextSlide > currentSlide) {
          forward(event, slick, currentSlide, nextSlide)
        }
        if (nextSlide === num) {
          $('.zero').addClass('slider-about-us-team__slide-content--active')
          $('#card-0').addClass('slider-about-us-team__card--active')
          $('#slide-1').removeClass('slider-about-us-team__slide-content--active')
          // TODO: Add set time out
        }
        if (nextSlide < currentSlide && nextSlide !== num) {
          backward(event, slick, currentSlide, nextSlide)
        }
      })

      function zero (event, slick, currentSlide, nextSlide) {
        $('#slide-0').removeClass('slider-about-us-team__slide-content--active')
        $('#card-0').removeClass('slider-about-us-team__card--active')
      }
      function forward (event, slick, currentSlide, nextSlide) {
        const num = allSlides - 1
        if (currentSlide !== num) {
          $('.zero').removeClass('slider-about-us-team__slide-content--active')
          $('#card-0').removeClass('slider-about-us-team__card--active')
        }
        var trueCurrent = nextSlide + 1
        var lastSlide = currentSlide + 1
        $('#slide-' + trueCurrent).addClass('slider-about-us-team__slide-content--active')
        $('#slide-' + lastSlide).removeClass('slider-about-us-team__slide-content--active')
        $('#card-' + lastSlide).removeClass('slider-about-us-team__card--active')
        $('#card-' + trueCurrent).addClass('slider-about-us-team__card--active')
      }
      function backward (event, slick, currentSlide, nextSlide) {
        var lastSlide = currentSlide + 1
        var backSlide = nextSlide + 1
        $('.zero').removeClass('slider-about-us-team__slide-content--active')
        $('#card-0').removeClass('slider-about-us-team__card--active')
        $('#slide-' + backSlide).addClass('slider-about-us-team__slide-content--active')
        $('#slide-' + lastSlide).removeClass('slider-about-us-team__slide-content--active')
        $('#card-' + lastSlide).removeClass('slider-about-us-team__card--active')
        $('#card-' + backSlide).addClass('slider-about-us-team__card--active')
      }
    })
  }
})

export default SliderAboutUsTeam
