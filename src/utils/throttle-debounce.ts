export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

export const throttle = (fn: Function, ms = 300) => {
  let inThrottle: boolean, lastFn: ReturnType<typeof setTimeout>, lastTime: number
  return function (this: any, ...args: any[]) {
    const context = this
    if (!inThrottle) {
      fn.apply(context, args)
      lastTime = Date.now()
      inThrottle = true
    } else {
      clearTimeout(lastFn)
      lastFn = setTimeout(() => {
        if (Date.now() - lastTime >= ms) {
          fn.apply(context, args)
          lastTime = Date.now()
        }
      }, Math.max(ms - (Date.now() - lastTime), 0))
    }
  }
}

export const throttleDebounce = (fn: Function, ms = 300) => {
  const debounced = debounce(fn, ms)
  const throttled = throttle(fn, ms)
  return function (this: any, ...args: any[]) {
    debounced.apply(this, args)
    throttled.apply(this, args)
  }
}
