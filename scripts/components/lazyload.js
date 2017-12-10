import { clearTimeout, setTimeout } from "timers";

//recommend page list img lazyload
function lazyLoad(imgs){
  imgs = Array.from(imgs)

  //使用IntersectionObserver实现懒加载
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          loadImage(entry.target, () => {
            observer.unobserve(entry.target)
          })
        }
      })
    }, {threshold: 0.01})

    imgs.forEach(img => observer.observe(img))
  } else {
    const onscroll = throttle(() => {
      if (imgs.length === 0) return window.removeEventListener('scroll', onscroll)
      imgs.filter(img => img.classList.contains('lazyload'))
      imgs.forEach(img => inViewPort(img)&&loadImage(img))
    }, 300)

    window.addEventListener('scroll', onscroll)
    //第一次加载
    window.dispatchEvent(new Event('scroll'))
  }

  function inViewPort(img){
    const {top, left, right, bottom} = img.getBoundingClientRect()
    const viewPortHeight = document.documentElement.clientHeight
    const viewPortWidth = document.documentElement.clientWidth

    return (
      (top > 0 && top < viewPortHeight || bottom > 0 && bottom < viewPortHeight) &&
      (left > 0 && left < viewPortWidth || right > 0 && right < viewPortWidth)
    )
  }

  function loadImage(img, callback){
    let image = new Image()
    image.src = img.dataset.src
    image.onload = function(){
      img.src = image.src
      img.classList.remove('lazyload')
    }
    if (typeof callback === 'function') callback()
  }

  //优化滚动事件监听
  function throttle(func, wait){
    let prev, timer
    return function fn(){
      let curr  = Date.now()
      let diff = curr - prev
      if(!prev || diff >= wait) {
        func()
        prev = curr
      } else if (diff < wait) {
        clearTimeout(timer)
        timer = setTimeout(fn, wait - diff)
      }
    }
  }
}

export default lazyLoad