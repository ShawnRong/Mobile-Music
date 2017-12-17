class ProgressBar {
  constructor(el, duration, start){
    this.el = el
    this.elapsed = 0
    this.duration = duration || 0
    this.progress = 0
    this.render()
    this.progressElement = this.el.querySelector('.progress-bar-progress')
    this.elapsedElement = this.el.querySelector('.progress-elapsed')
    this.durationElement = this.el.querySelector('.progress-duration')
    this.elapsedElement.innerText = this.formatTime(this.elapsed)
    this.durationElement.innerText = this.formatTime(this.elapsed)
    if(start) this.start()
  }

  start() {
    this.pause()
    this.intervalId = setInterval(this.update.bind(this), 50)
  }

  pause() {
    clearInterval(this.intervalId)
  }

  update() {
    this.elapsed += 0.05
    if(this.elapsed >= this.duration) this.reset()
    this.progress = this.elapsed / this.duration
    this.progressElement.style.transform = `translate(${this.progress * 100 - 100}%)`
    this.elapsedElement.innerText = this.formatTime(this.elapsed)
  }

  reset(duration) {
    this.pause()
    this.elapsed = 0
    this.progress = 0
    this.progressElement.style.transform = `translate(-100%)`
    this.elapsedElement.innerText = this.formatTime(this.elapsed)
    if(duration) {
      this.duration = +duration
      this.durationElement.innerText = this.formatTime(this.duration)
    }
  }

  restart() {
    this.reset()
    this.start()
  }

  render() {
    this.el.innerHTML = `
      <div class="progress-time progress-elapsed"></div>
        <div class="progress-bar">
          <div class="progress-bar-progress"></div>
        </div>
      <div class="progress-time progress-duration"></div>
    `
  }

  formatTime(seconds) {
    let mins = Math.floor(seconds / 60)
    let secs = Math.floor(seconds % 60)
    if (mins < 10) mins = '0' + mins
    if (secs < 10) secs = '0' + secs
    return `${mins}:${secs}`
  }
}

export default ProgressBar