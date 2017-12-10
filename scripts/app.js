import('../sass/app.scss')
//ES6 import
import Slider from './components/slider'
import NavBar from './components/navbar'
import lazyload from './components/lazyload'
//CommonJS
// const Slider = require('./components/slider')


(function(){

  //get Data
  fetch('../json/recom.json')
    .then(response => response.json())
    .then(render)

  function render(json){
    NavBar()
    let slides = json.data.slider.map(slide => {
      return {
        link : slide.linkUrl,
        image: slide.picUrl
      }
    })
    new Slider('slider', slides)
    renderRadios(json.data.radioList)
    renderSongLists(json.data.songList)
    lazyload(document.querySelectorAll('.lazyload'))
  }

  //radios
  function renderRadios(radios) {
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

  //songlists
  function renderSongLists(songlists){
    document.getElementById('songlists-group').innerHTML = songlists.map(songlist => {
      return `
        <li class="list-item">
          <a href="#" class="list-main">
            <div class="list-media">
            <img class="lazyload" src="../imgs/default_pic.jpg" data-src="${songlist.picUrl}" alt="#">
            <span class="icon icon-play"></span>
            </div>
            <div class="list-info"><h3>${songlist.Ftitle}</h3></div>
          </a>
        </li>
      `
    }).join('')

  }

})()