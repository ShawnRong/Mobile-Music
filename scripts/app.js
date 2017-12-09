import('../sass/app.scss')
//ES6 import
import Slider from './components/slider'
import NavBar from './components/navbar'
//CommonJS
// const Slider = require('./components/slider')


(function(){
  const slider = new Slider(
    'slider',
    {
      slides: [
        {link: '#' ,image: './imgs/halin.jpg'},
        {link: '#' ,image: './imgs/hunya.jpg'},
        {link: '#' ,image: './imgs/liyuchun.jpg'},
        {link: '#' ,image: './imgs/liyugang.jpg'},
        {link: '#' ,image: './imgs/sunyanzi.jpg'},
      ]
    }
  )
  NavBar()
})()