import('../sass/app.scss')
//ES6 import
import Recommend from './components/recommend'
import TopList from './components/toplist'
import Slider from './components/slider'
import NavBar from './components/navbar'
import lazyload from './components/lazyload'
import Search from './components/search'
import MusicPlayer from './components/music_player'
//CommonJS
// const Slider = require('./components/slider')

NavBar()
const recommend = new Recommend(document.getElementById('recom-view')).launch()
const toplist = new TopList(document.getElementById('rank-view')).launch()

//Search 组件
const search = new Search(document.getElementById('search-view'))

//音乐播放器
let player = new MusicPlayer(document.getElementById('player'))
document.querySelector('.show-player').addEventListener('click', () => {
  player.show()
})

onHashChange()
addEventListener('hashchange', onHashChange)
function onHashChange() {
  let hash = location.hash
  if(/^#player\?.+/.test(hash)) {
    let matches = hash.slice(hash.indexOf('?') + 1).match(/(\w+)=([^&]+)/g)
    let options = matches && matches.reduce((res, cur) => {
      let arr = cur.split('=')
      res[arr[0]] = decodeURIComponent(arr[1])
      return res
    }, {})
    player.play(options)
  } else {
    player.hide()
  }
}