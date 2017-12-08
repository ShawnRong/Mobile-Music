class Slider {
  constructor(el, options){
    typeof el === 'string' ? this.el = document.getElementById(el): el
    this.slides = options.slides
    this.index = 0
    this.interval = options.interval || 3000
    this.render()
    this.play()
  }

  render(){
    this.el.innerHTML = `<div class="ui-slider-group"></div>`
    let group = this.el.firstElementChild
    //获取group
    group.style.width = `${this.slides.length * 100}%`
    group.innerHTML = this.slides.map(slide =>
      `
        <div class="ui-slider-item">
          <a href="${slide.link}">
            <img src="${slide.image}" alt="slide-img">
          </a>
        </div>
      `
    ).join('')

    let dotsHTML =
    `
      <p class="ui-slider-dots">
        ${this.slides.map((dot, index)=>{
          return index === 0 ? `<b class="ui-state-active"></b>` : `<b class=""></b>`
        }).join('')}
      </p>
    `
    this.el.innerHTML += dotsHTML
  }

  play(){
    setInterval(this.next.bind(this), this.interval)
  }

  next(){
    //FIXME: 最后一张平顺的过度到第一张
    let group =  this.el.firstElementChild
    this.index += 1
    //最后一张回原位
    if(this.index === this.slides.length){
      group.style.transform = `translate(0)`
      this.index = 0
      this.dotClass()
      return
    }
    let position = `-${this.index / this.slides.length * 100}%`
    group.style.transform = `translate(${position})`

    this.dotClass()
  }

  dotClass(){
    let dots = this.el.lastElementChild

    let children = this.el.lastElementChild.children
    Array.prototype.map.call(children, child=>child.classList.remove(`ui-state-active`))

    this.el.lastElementChild.children[this.index].className = `ui-state-active`
  }
}

export default Slider
// module.exports = Slider