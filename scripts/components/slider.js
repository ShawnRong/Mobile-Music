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
    //获取group
    this.group =  this.el.firstElementChild
    this.group.style.width = `${this.slides.length * 100}%`
    this.group.innerHTML = this.slides.map(slide =>
      `
        <div class="ui-slider-item">
          <a href="${slide.link}">
            <img src="${slide.image}" alt="slide-img">
          </a>
        </div>
      `
    ).join('')

    // this.el.innerHTML += `<div></div>`
    // this.el.innerHTML +=
    // `
    //   <p class="ui-slider-dots">
    //     <b class="ui-state-active"></b>
    //     <b class=""></b>
    //     <b class=""></b>
    //     <b class=""></b>
    //     <b class=""></b>
    //   </p>
    // `
  }

  play(){
    setInterval(this.next.bind(this), this.interval)
  }

  next(){
    this.index += 1;
    //最后一张回原位
    if(this.index === this.slides.length){
      this.group.style.transform = `translate(0)`
      this.index = 0
      return
    }
    let position = `-${this.index / this.slides.length * 100}%`
    this.group.style.transform = `translate(${position})`
  }
}

export default Slider
// module.exports = Slider