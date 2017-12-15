import('../sass/app.scss')
//ES6 import
import Slider from './components/slider'
import NavBar from './components/navbar'
import lazyload from './components/lazyload'
//CommonJS
// const Slider = require('./components/slider')


(function(){

  //get Data
  // fetch('https://music-api-oiwxkoneso.now.sh')
  fetch('../json/recom.json')
    .then(response => response.json())
    .then(render)

  //get TopList
  fetch('../json/rank.json')
    .then(response => response.json())
    .then(rankList)

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

  function rankList(json){
    renderRankList(json.data.topList)
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
            <div class="list-info"><h3>${songlist.songListDesc}</h3></div>
          </a>
        </li>
      `
    }).join('')

  }

  function renderRankList(topLists){
    document.getElementById('rank-list').innerHTML = topLists.map(topList => {
      return `
        <li class="topic_item" data-id="4" data-type="0">
        <div class="topic_main">
          <a href="#" class="topic_media">
              <img class="lazyload" data-src="${topList.picUrl}" src="../imgs/default_pic.jpg">
              <span class="listen_count"><i class="icon icon_listen"></i>${(topList.listenCount / 10000).toFixed(1)}万</span>
          </a>
          <div class="topic_info">
              <div class="topic_cont">
                  <h3 class="topic_tit">${topList.topTitle}</h3>
                  ${topList.songList.map((list, idx) => {
                    return `<p>${idx+1}<span class="text_name">${list.songname}</span>-${list.singername}</p>`
                  }).join('')}
              </div>
              <i class="topic_arrow"></i>
          </div>
        </div>
      </li>
        `
    }).join('')
  }


})()