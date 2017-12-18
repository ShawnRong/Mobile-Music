import lazyLoad from './lazyload'
import { TOPLIST_URL } from './constants'

class TopList {
  constructor(el) {
    this.el = el
  }

  launch() {
    fetch(TOPLIST_URL)
      .then(res => res.json())
      .then(json => this.list = json.data.topList)
      .then(() => this.render())

    return this
  }

  render() {
    document.getElementById('rank-list').innerHTML = this.list.map(topList => {
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
    lazyLoad(document.querySelectorAll('.lazyload'))
  }
}

export default TopList