export function throttle (fn, delay, mustRunDelay) {
  let timer = null
  let tStart
  return function () {
    let context = this
    let args = arguments
    let tCurr = +new Date()
    clearTimeout(timer)
    if (!tStart) {
      tStart = tCurr
    }
    if (tCurr - tStart >= mustRunDelay) {
      fn.apply(context, args)
      tStart = tCurr
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args)
      }, delay)
    }
  }
}

export function debounce (fn, blockTime) {
  let debounce = false

  return function () {
    if (debounce) return
    debounce = true
    fn.apply(this, arguments)
    setTimeout(() => { debounce = false }, blockTime)
  }
}
