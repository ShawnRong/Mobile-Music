import Slider from './slider'
import lazyLoad from './lazyload'
import { RECOMMEND_URL } from './constants'

class Recommend {
  constructor(el) {
    this.el = el
  }

  launch() {
    fetch(RECOMMEND_URL)
      .then(res => res.json())
      .then(json => this.json = json)
      .then(() => this.render())

    return this
  }

  render() {
    this.renderSlider(this.json.data.slider)
    this.renderRadios(this.json.data.radioList)
    this.renderPlayLists(this.json.data.songList)

    //TODO: LazyLoad
    lazyLoad(document.querySelectorAll('.lazyload'))
  }

  renderSlider(slides) {
    this.slider = new Slider(
      'slider',
      slides
    )
  }

  renderRadios(radios) {
    document.getElementById('radios-group').innerHTML = radios.map(radio => {
      return `
        <li class="list-item">
          <a href="#" class="list-main">
            <div class="list-media">
            <img class="lazyload" src="../imgs/default_pic.jpg" data-src="${radio.picUrl}" alt="#">
            <span class="icon icon-play"></span>
            </div>
            <div class="list-info"><h3>${radio.Ftitle}</h3></div>
          </a>
        </li>
      `
    }).join('')
  }

  renderPlayLists(playLists) {
    document.getElementById('songlists-group').innerHTML = playLists.map(songlist => {
      return `
        <li class="list-item">
          <a href="#" class="list-main">
            <div class="list-media">
            <img class="lazyload" src="../imgs/default_pic.jpg" data-src="${songlist.picUrl}" alt="#">
            <span class="icon icon-play"></span>
            </div>
            <div class="list-info"><h3>${songlist.songListDesc}</h3></div>
          </a>
        </li>
      `
    }).join('')
  }
}

export default Recommend