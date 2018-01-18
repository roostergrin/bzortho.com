<template lang='pug' src='./slider.pug'></template>

<script>
  import { throttle, debounce } from './utils'

  export default {
    content: ['content'],
    data () {
      return {
        children: [],
        nowItemIndex: 0,
        timer: 0
      }
    },
    props: {
      width: {
        type: String,
        default: 'false'
      },
      height: {
        type: String,
        default: 'false'
      },
      interval: {
        type: Number,
        default: 3000
      },
      speed: {
        type: Number,
        default: 500
      },
      auto: {
        type: Boolean,
        default: false
      },
      indicators: {
        default: 'center'
      },
      controlBtn: {
        type: Boolean,
        default: true
      },
      animation: {
        type: String,
        default: 'fade'
      },
      initIndex: {
        type: Number,
        default: 0
      }
    },
    computed: {
      childrenLength () {
        return this.children.length
      }
    },
    methods: {
      updateItems () {
        this.children = this.$children.filter(child => {
          return child.$options.name === 'easy-slider-item'
        })
        this.nowItemIndex = this.initIndex
        const nowItem = this.children[this.nowItemIndex]
        nowItem && nowItem.initItem()
        this.$nextTick(() => {
          if (nowItem) {
            this.handleSetTopItem(nowItem)
            this.autoplay()
          }
        })
      },
      handleSetTopItem (nextItem, prevItem) {
        if (nextItem && nextItem.$el) nextItem.$el.style.zIndex = 99
        if (prevItem && prevItem.$el) prevItem.$el.style.zIndex = 98
      },
      autoplay () {
        if (!this.auto || this.childrenLength < 2) return
        const self = this
        function setTimer () {
          return setInterval(() => {
            const nextIndex = (self.nowItemIndex + 1) % self.childrenLength
            self.jump(nextIndex)
          }, self.interval)
        }
        if (this.timer) clearInterval(this.timer)
        this.timer = setTimer()
      },
      jump (i) {
        const nowItem = this.children[this.nowItemIndex]
        const nextItem = this.children[i]
        const indexGap = i - this.nowItemIndex
        let direction = indexGap > 0
        if (indexGap === -(this.childrenLength - 1)) direction = true
        if (indexGap === this.childrenLength - 1) direction = false
        if (nowItem && nextItem) {
          nowItem.hideHandle(direction)
          nextItem.showHandle(direction)
          this.nowItemIndex = i
          this.$emit('changeSlide', { index: i })
        }
      },
      prev (i) {
        if (this.childrenLength < 2) return
        const nextIndex = this.nowItemIndex - 1 === -1 ? this.childrenLength - 1 : this.nowItemIndex - 1
        this.$emit('previous', { original: this.nowItemIndex, next: nextIndex })
        this.jump(nextIndex)
        this.autoplay()
        this.$store.dispatch('VIEW_TYPES', nextIndex)
      },
      next (i) {
        if (this.childrenLength < 2) return
        const nextIndex = (this.nowItemIndex + 1) % this.childrenLength
        this.$emit('next', { original: this.nowItemIndex, next: nextIndex })
        this.jump(nextIndex)
        this.autoplay()
        this.$store.dispatch('VIEW_TYPES', nextIndex)
        this.$parent.types = i
      },
      indicatorHandle (i) {
        if (this.childrenLength < 2) return
        if (i === this.nowItemIndex) return
        this.jump(i)
        this.autoplay()
        this.$store.dispatch('VIEW_TYPES', i)
      }
    },
    created () {
      this.handleItemChange = throttle(this.updateItems, 100)
      this.jump = debounce(this.jump, this.speed + 100)
      this.children = this.$parent.props
      console.log(this.content)
    },
    beforeMount () {
      this.handleItemChange()
    },
    activated () {
      this.handleItemChange()
    },
    beforeDestroy () {
      this.timer && clearTimeout(this.timer)
    },
    deactivated () {
      this.timer && clearTimeout(this.timer)
    }
  }
</script>
