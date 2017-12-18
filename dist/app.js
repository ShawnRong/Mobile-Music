/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timers = __webpack_require__(5);

//recommend page list img lazyload
function lazyLoad(imgs) {
  imgs = Array.from(imgs);

  //使用IntersectionObserver实现懒加载
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0) {
          loadImage(entry.target, function () {
            observer.unobserve(entry.target);
          });
        }
      });
    }, { threshold: 0.01 });

    imgs.forEach(function (img) {
      return observer.observe(img);
    });
  } else {
    var onscroll = throttle(function () {
      if (imgs.length === 0) return window.removeEventListener('scroll', onscroll);
      imgs.filter(function (img) {
        return img.classList.contains('lazyload');
      });
      imgs.forEach(function (img) {
        return inViewPort(img) && loadImage(img);
      });
    }, 300);

    window.addEventListener('scroll', onscroll);
    //第一次加载
    window.dispatchEvent(new Event('scroll'));
  }

  function inViewPort(img) {
    var _img$getBoundingClien = img.getBoundingClientRect(),
        top = _img$getBoundingClien.top,
        left = _img$getBoundingClien.left,
        right = _img$getBoundingClien.right,
        bottom = _img$getBoundingClien.bottom;

    var viewPortHeight = document.documentElement.clientHeight;
    var viewPortWidth = document.documentElement.clientWidth;

    return (top > 0 && top < viewPortHeight || bottom > 0 && bottom < viewPortHeight) && (left > 0 && left < viewPortWidth || right > 0 && right < viewPortWidth);
  }

  function loadImage(img, callback) {
    var image = new Image();
    image.src = img.dataset.src;
    image.onload = function () {
      img.src = image.src;
      img.classList.remove('lazyload');
    };
    if (typeof callback === 'function') callback();
  }

  //优化滚动事件监听
  function throttle(func, wait) {
    var prev = void 0,
        timer = void 0;
    return function fn() {
      var curr = Date.now();
      var diff = curr - prev;
      if (!prev || diff >= wait) {
        func();
        prev = curr;
      } else if (diff < wait) {
        (0, _timers.clearTimeout)(timer);
        timer = (0, _timers.setTimeout)(fn, wait - diff);
      }
    };
  }
}

exports.default = lazyLoad;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var RECOMMEND_URL = exports.RECOMMEND_URL = 'https://music-api-huuevyrmmi.now.sh';
var TOPLIST_URL = exports.TOPLIST_URL = 'https://music-api-huuevyrmmi.now.sh/top';
var SEARCH_URL = exports.SEARCH_URL = 'https://music-api-huuevyrmmi.now.sh/search';
var LYRICS_URL = exports.LYRICS_URL = 'https://music-api-huuevyrmmi.now.sh/lyrics';

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
  function Slider(el, slides) {
    var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;

    _classCallCheck(this, Slider);

    typeof el === 'string' ? this.el = document.getElementById(el) : el;
    this.slides = slides;
    this.index = 0;
    this.interval = interval;
    this.render();
    this.play();
  }

  _createClass(Slider, [{
    key: 'render',
    value: function render() {
      this.el.innerHTML = '<div class="ui-slider-group"></div>';
      var group = this.el.firstElementChild;
      //获取group
      group.style.width = this.slides.length * 100 + '%';
      group.innerHTML = this.slides.map(function (slide) {
        return '\n        <div class="ui-slider-item">\n          <a href="' + slide.linkUrl + '">\n            <img src="' + slide.picUrl + '" alt="slide-img">\n          </a>\n        </div>\n      ';
      }).join('');

      var dotsHTML = '\n      <p class="ui-slider-dots">\n        ' + this.slides.map(function (dot, index) {
        return index === 0 ? '<b class="ui-state-active"></b>' : '<b class=""></b>';
      }).join('') + '\n      </p>\n    ';
      this.el.innerHTML += dotsHTML;
    }
  }, {
    key: 'play',
    value: function play() {
      setInterval(this.next.bind(this), this.interval);
    }
  }, {
    key: 'next',
    value: function next() {
      //FIXME: 最后一张平顺的过度到第一张
      var group = this.el.firstElementChild;
      this.index += 1;
      //最后一张回原位
      if (this.index === this.slides.length) {
        group.style.transform = 'translate(0)';
        this.index = 0;
        this.dotClass();
        return;
      }
      var position = '-' + this.index / this.slides.length * 100 + '%';
      group.style.transform = 'translate(' + position + ')';

      this.dotClass();
    }
  }, {
    key: 'dotClass',
    value: function dotClass() {
      var dots = this.el.lastElementChild;

      var children = this.el.lastElementChild.children;
      Array.prototype.map.call(children, function (child) {
        return child.classList.remove('ui-state-active');
      });

      this.el.lastElementChild.children[this.index].className = 'ui-state-active';
    }
  }]);

  return Slider;
}();

exports.default = Slider;
// module.exports = Slider

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _recommend = __webpack_require__(4);

var _recommend2 = _interopRequireDefault(_recommend);

var _toplist = __webpack_require__(9);

var _toplist2 = _interopRequireDefault(_toplist);

var _slider = __webpack_require__(2);

var _slider2 = _interopRequireDefault(_slider);

var _navbar = __webpack_require__(10);

var _navbar2 = _interopRequireDefault(_navbar);

var _lazyload = __webpack_require__(0);

var _lazyload2 = _interopRequireDefault(_lazyload);

var _search = __webpack_require__(11);

var _search2 = _interopRequireDefault(_search);

var _music_player = __webpack_require__(12);

var _music_player2 = _interopRequireDefault(_music_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 16));
//ES6 import

//CommonJS
// const Slider = require('./components/slider')

(0, _navbar2.default)();
var recommend = new _recommend2.default(document.getElementById('recom-view')).launch();
var toplist = new _toplist2.default(document.getElementById('rank-view')).launch();

//Search 组件
var search = new _search2.default(document.getElementById('search-view'));

//音乐播放器
var player = new _music_player2.default(document.getElementById('player'));
document.querySelector('.show-player').addEventListener('click', function () {
  player.show();
});

onHashChange();
addEventListener('hashchange', onHashChange);
function onHashChange() {
  var hash = location.hash;
  if (/^#player\?.+/.test(hash)) {
    var matches = hash.slice(hash.indexOf('?') + 1).match(/(\w+)=([^&]+)/g);
    var options = matches && matches.reduce(function (res, cur) {
      var arr = cur.split('=');
      res[arr[0]] = decodeURIComponent(arr[1]);
      return res;
    }, {});
    player.play(options);
  } else {
    player.hide();
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slider = __webpack_require__(2);

var _slider2 = _interopRequireDefault(_slider);

var _lazyload = __webpack_require__(0);

var _lazyload2 = _interopRequireDefault(_lazyload);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Recommend = function () {
  function Recommend(el) {
    _classCallCheck(this, Recommend);

    this.el = el;
  }

  _createClass(Recommend, [{
    key: 'launch',
    value: function launch() {
      var _this = this;

      fetch(_constants.RECOMMEND_URL).then(function (res) {
        return res.json();
      }).then(function (json) {
        return _this.json = json;
      }).then(function () {
        return _this.render();
      });

      return this;
    }
  }, {
    key: 'render',
    value: function render() {
      this.renderSlider(this.json.data.slider);
      this.renderRadios(this.json.data.radioList);
      this.renderPlayLists(this.json.data.songList);

      //TODO: LazyLoad
      (0, _lazyload2.default)(document.querySelectorAll('.lazyload'));
    }
  }, {
    key: 'renderSlider',
    value: function renderSlider(slides) {
      this.slider = new _slider2.default('slider', slides);
    }
  }, {
    key: 'renderRadios',
    value: function renderRadios(radios) {
      document.getElementById('radios-group').innerHTML = radios.map(function (radio) {
        return '\n        <li class="list-item">\n          <a href="#" class="list-main">\n            <div class="list-media">\n            <img class="lazyload" src="../imgs/default_pic.jpg" data-src="' + radio.picUrl + '" alt="#">\n            <span class="icon icon-play"></span>\n            </div>\n            <div class="list-info"><h3>' + radio.Ftitle + '</h3></div>\n          </a>\n        </li>\n      ';
      }).join('');
    }
  }, {
    key: 'renderPlayLists',
    value: function renderPlayLists(playLists) {
      document.getElementById('songlists-group').innerHTML = playLists.map(function (songlist) {
        return '\n        <li class="list-item">\n          <a href="#" class="list-main">\n            <div class="list-media">\n            <img class="lazyload" src="../imgs/default_pic.jpg" data-src="' + songlist.picUrl + '" alt="#">\n            <span class="icon icon-play"></span>\n            </div>\n            <div class="list-info"><h3>' + songlist.songListDesc + '</h3></div>\n          </a>\n        </li>\n      ';
      }).join('');
    }
  }]);

  return Recommend;
}();

exports.default = Recommend;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(6);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7), __webpack_require__(8)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lazyload = __webpack_require__(0);

var _lazyload2 = _interopRequireDefault(_lazyload);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TopList = function () {
  function TopList(el) {
    _classCallCheck(this, TopList);

    this.el = el;
  }

  _createClass(TopList, [{
    key: 'launch',
    value: function launch() {
      var _this = this;

      fetch(_constants.TOPLIST_URL).then(function (res) {
        return res.json();
      }).then(function (json) {
        return _this.list = json.data.topList;
      }).then(function () {
        return _this.render();
      });

      return this;
    }
  }, {
    key: 'render',
    value: function render() {
      document.getElementById('rank-list').innerHTML = this.list.map(function (topList) {
        return '\n        <li class="topic_item" data-id="4" data-type="0">\n        <div class="topic_main">\n          <a href="#" class="topic_media">\n              <img class="lazyload" data-src="' + topList.picUrl + '" src="../imgs/default_pic.jpg">\n              <span class="listen_count"><i class="icon icon_listen"></i>' + (topList.listenCount / 10000).toFixed(1) + '\u4E07</span>\n          </a>\n          <div class="topic_info">\n              <div class="topic_cont">\n                  <h3 class="topic_tit">' + topList.topTitle + '</h3>\n                  ' + topList.songList.map(function (list, idx) {
          return '<p>' + (idx + 1) + '<span class="text_name">' + list.songname + '</span>-' + list.singername + '</p>';
        }).join('') + '\n              </div>\n              <i class="topic_arrow"></i>\n          </div>\n        </div>\n      </li>\n        ';
      }).join('');
      (0, _lazyload2.default)(document.querySelectorAll('.lazyload'));
    }
  }]);

  return TopList;
}();

exports.default = TopList;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var navbar_click = function navbar_click() {
  document.addEventListener('click', function (event) {
    var target = event.target;

    if (target.dataset.role !== 'tab') return;

    [].forEach.call(target.parentElement.children, function (tab) {
      tab.classList.remove('active');
    });

    target.classList.add('active');

    var content = document.querySelector(target.dataset.view);

    if (content) {
      [].forEach.call(content.parentElement.children, function (child) {
        child.style.display = 'none';
      });
      content.style.display = 'block';
    }
  });
};

exports.default = navbar_click;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Search = function () {
  function Search(el) {
    _classCallCheck(this, Search);

    this.el = el;
    this.input = this.el.querySelector('#search-input');
    this.input.addEventListener('keyup', this.onKeyUp.bind(this));
    this.songs = this.el.querySelector('.search-content');
    this.page = 1;
    this.keyword = '';
    this.perpage = 20;
    this.nomore = false;
    this.fetching = false;
    this.onscroll = this.onScroll.bind(this);
    window.addEventListener('scroll', this.onscroll);
    //clear btn
    this.clear = this.el.querySelector('.icon-cancelcircled');
    this.clear.style.display = 'none';
    this.input.addEventListener('input', this.showClearInput.bind(this));
    this.clear.addEventListener('click', this.clearInput.bind(this));
    this.recordElement = this.el.querySelector('#record-keys');
    this.renderRecords();
    this.recordElement.querySelector('#record-clear-btn').addEventListener('click', this.clearRecord.bind(this));
  }

  _createClass(Search, [{
    key: 'onKeyUp',
    value: function onKeyUp(event) {
      var keyword = event.target.value.trim();
      if (!keyword) return this.reset();
      if (event.key !== 'Enter') return;
      this.recordElement.style.display = 'none';
      this.search(keyword);
      this.record(keyword);
    }
  }, {
    key: 'onScroll',
    value: function onScroll(event) {
      if (this.nomore) return window.removeEventListener('scroll', this.onscroll);
      if (pageYOffset + document.documentElement.clientHeight > document.body.scrollHeight - 50) {
        this.search(this.keyword, this.page + 1);
      }
    }
  }, {
    key: 'search',
    value: function search(keyword, page) {
      var _this = this;

      if (!this.page && this.keyword === keyword) return;
      if (this.nomore || this.fetching) return;
      if (this.keyword !== keyword) this.reset();
      this.keyword = keyword;
      this.loading();
      fetch('https://music-api-oiwxkoneso.now.sh/search?keyword=' + this.keyword + '&page=' + (page || this.page)).then(function (res) {
        return res.json();
      }).then(function (json) {
        _this.page = json.data.song.curpage;
        _this.nomore = json.message === 'no results';
        return json.data.song.list;
      }).then(function (songs) {
        return _this.append(songs);
      }).then(function () {
        return _this.done();
      }).catch(function () {
        return _this.done();
      });
    }
  }, {
    key: 'append',
    value: function append(songs) {
      var html = songs.map(function (song) {
        var artist = song.singer.map(function (s) {
          return s.name;
        }).join(' ');
        return '\n      <li>\n        <a class="song-item"\n        href="#player?artist=' + artist + '&songid=' + song.songid + '&songname=' + song.songname + '&albummid=' + song.albummid + '&duration=' + song.interval + '">\n          <i class="icon icon-music"></i>\n          <h6 class="main-tit">' + song.songname + '</h6>\n          <p class="sub-tit">' + artist + '</p>\n        </a>\n      </li>\n      ';
      }).join('');
      this.songs.insertAdjacentHTML('beforeend', html);
      this.songs.style.display = 'block';
    }
  }, {
    key: 'loading',
    value: function loading() {
      this.fetching = true;
      this.el.querySelector('.search-loading').classList.add('show');
    }
  }, {
    key: 'done',
    value: function done() {
      this.fetching = false;
      if (this.more) {
        this.el.querySelectorAll('.loading-icon, .loading-text').forEach(function (el) {
          return el.style.display = 'none';
        });
        this.el.querySelector('.loading-done').style.display = 'block';
        this.el.querySelector('.search-loading').classList.add('show');
      } else {
        this.el.querySelector('.search-loading').classList.remove('show');
      }
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.page = 1;
      this.keyword = '';
      this.nomore = false;
      this.fetching = false;
      this.songs.innerHTML = '';
    }
  }, {
    key: 'showClearInput',
    value: function showClearInput() {
      this.clear.style.display = 'block';
    }
  }, {
    key: 'clearInput',
    value: function clearInput() {
      this.input.value = '';
      this.songs.style.display = 'none';
      this.renderRecords();
    }
  }, {
    key: 'renderRecords',
    value: function renderRecords() {
      var keywords = localStorage.getItem('search_history');
      if (keywords) {
        var html = keywords.split(',').map(function (keyword) {
          return '\n        <li>\n          <a href="#">\n            <span class="iconfont icon-shijian"></span>\n            <span class="keyword">' + keyword + '</span>\n          </a>\n        </li>\n        ';
        }).join('');
        this.recordElement.style.display = 'block';
        this.recordElement.querySelector('ul').innerHTML = html;
      } else {
        this.recordElement.style.display = 'none';
      }
    }
  }, {
    key: 'record',
    value: function record(keyword) {
      var keywords = localStorage.getItem('search_history');
      if (keywords) {
        if (keywords.search(keyword) > 0) {
          var pattern = keyword + ',?';
          var regex = new RegExp(pattern);
          console.log(regex);
          keywords = keywords.replace(regex, '');
          keywords = keyword + ',' + keywords;
          keywords = keywords.replace(/,\s*$/, '');
          localStorage.setItem('search_history', keywords);
        } else {
          keywords = keyword + ',' + keywords;
          localStorage.setItem('search_history', keywords);
        }
      } else {
        localStorage.setItem('search_history', keyword);
      }
    }
  }, {
    key: 'clearRecord',
    value: function clearRecord() {
      localStorage.removeItem('search_history');
      this.renderRecords();
    }
  }]);

  return Search;
}();

exports.default = Search;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _progress_bar = __webpack_require__(13);

var _progress_bar2 = _interopRequireDefault(_progress_bar);

var _lyrics_player = __webpack_require__(14);

var _lyrics_player2 = _interopRequireDefault(_lyrics_player);

var _helpers = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MusicPlayer = function () {
  function MusicPlayer(el) {
    _classCallCheck(this, MusicPlayer);

    this.el = el;
    this.el.addEventListener('click', this);
    this.audio = this.createAudio();
    this.lyrics = new _lyrics_player2.default(this.el.querySelector('.player-lyrics'), this.audio);
    this.progress = new _progress_bar2.default(this.el.querySelector('.progress'));
    this.fetching = false;
  }

  _createClass(MusicPlayer, [{
    key: 'createAudio',
    value: function createAudio() {
      var _this = this;

      var audio = document.createElement('audio');
      audio.id = 'player-' + Math.floor(Math.random() * 100) + '-' + +new Date();
      audio.addEventListener('ended', function () {
        _this.audio.play();
        _this.lyrics.restart();
        _this.progress.restart();
      });
      document.body.appendChild(audio);
      return audio;
    }
  }, {
    key: 'handleEvent',
    value: function handleEvent(event) {
      var target = event.target;
      switch (true) {
        case target.matches('.icon-play'):
          this.onPlay(event);
          break;
        case target.matches('.icon-pause'):
          this.onPause(event);
          break;
        case target.matches('.icon-list'):
          this.hide();
          break;
      }
    }
  }, {
    key: 'onPlay',
    value: function onPlay(event) {
      if (this.fetching) return;
      this.audio.play();
      this.lyrics.start();
      this.progress.start();
      event.target.classList.add('icon-pause');
      event.target.classList.remove('icon-play');
    }
  }, {
    key: 'onPause',
    value: function onPause(event) {
      this.audio.pause();
      this.lyrics.pause();
      this.progress.pause();
      event.target.classList.add('icon-play');
      event.target.classList.remove('icon-pause');
    }
  }, {
    key: 'play',
    value: function play() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!options) return;

      this.el.querySelector('.song-name').innerText = options.songname;
      this.el.querySelector('.song-artist').innerText = options.artist;
      this.progress.reset(options.duration);

      var coverUrl = (0, _helpers.albumCoverUrl)(options.albummid);
      this.el.querySelector('.album-cover').src = coverUrl;
      this.el.querySelector('.player-background').style.backgroundImage = 'url(' + coverUrl + ')';

      if (options.songid) {
        if (this.songid !== options.songid) {
          this.el.querySelector('.icon-action').className = 'icon-action icon-play';
        }

        this.songid = options.songid;
        this.audio.src = (0, _helpers.songUrl)(this.songid);
        this.fetching = true;
        fetch((0, _helpers.lyricsUrl)(this.songid)).then(function (res) {
          return res.json();
        }).then(function (json) {
          return json.lyric;
        }).then(function (text) {
          return _this2.lyrics.reset(text);
        }).catch(function () {}).then(function () {
          return _this2.fetching = false;
        });
      }

      this.show();
    }
  }, {
    key: 'show',
    value: function show() {
      this.el.classList.add('show');
      document.body.classList.add('noscroll');
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.el.classList.remove('show');
      document.body.classList.remove('noscroll');
    }
  }]);

  return MusicPlayer;
}();

exports.default = MusicPlayer;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProgressBar = function () {
  function ProgressBar(el, duration, start) {
    _classCallCheck(this, ProgressBar);

    this.el = el;
    this.elapsed = 0;
    this.duration = duration || 0;
    this.progress = 0;
    this.render();
    this.progressElement = this.el.querySelector('.progress-bar-progress');
    this.elapsedElement = this.el.querySelector('.progress-elapsed');
    this.durationElement = this.el.querySelector('.progress-duration');
    this.elapsedElement.innerText = this.formatTime(this.elapsed);
    this.durationElement.innerText = this.formatTime(this.elapsed);
    if (start) this.start();
  }

  _createClass(ProgressBar, [{
    key: 'start',
    value: function start() {
      this.pause();
      this.intervalId = setInterval(this.update.bind(this), 50);
    }
  }, {
    key: 'pause',
    value: function pause() {
      clearInterval(this.intervalId);
    }
  }, {
    key: 'update',
    value: function update() {
      this.elapsed += 0.05;
      if (this.elapsed >= this.duration) this.reset();
      this.progress = this.elapsed / this.duration;
      this.progressElement.style.transform = 'translate(' + (this.progress * 100 - 100) + '%)';
      this.elapsedElement.innerText = this.formatTime(this.elapsed);
    }
  }, {
    key: 'reset',
    value: function reset(duration) {
      this.pause();
      this.elapsed = 0;
      this.progress = 0;
      this.progressElement.style.transform = 'translate(-100%)';
      this.elapsedElement.innerText = this.formatTime(this.elapsed);
      if (duration) {
        this.duration = +duration;
        this.durationElement.innerText = this.formatTime(this.duration);
      }
    }
  }, {
    key: 'restart',
    value: function restart() {
      this.reset();
      this.start();
    }
  }, {
    key: 'render',
    value: function render() {
      this.el.innerHTML = '\n      <div class="progress-time progress-elapsed"></div>\n        <div class="progress-bar">\n          <div class="progress-bar-progress"></div>\n        </div>\n      <div class="progress-time progress-duration"></div>\n    ';
    }
  }, {
    key: 'formatTime',
    value: function formatTime(seconds) {
      var mins = Math.floor(seconds / 60);
      var secs = Math.floor(seconds % 60);
      if (mins < 10) mins = '0' + mins;
      if (secs < 10) secs = '0' + secs;
      return mins + ':' + secs;
    }
  }]);

  return ProgressBar;
}();

exports.default = ProgressBar;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LyricsPlayer = function () {
  function LyricsPlayer(el, audio) {
    _classCallCheck(this, LyricsPlayer);

    this.el = el;
    this.el.innerHTML = '<div class="player-lyrics-lines"></div>';
    this.lines = this.el.querySelector('.player-lyrics-lines');
    this.audio = audio;
    this.text = '';
    this.index = 0;
    this.lyrics = [];
    this.elapsed = 0;
    this.reset(this.text);
  }

  _createClass(LyricsPlayer, [{
    key: 'start',
    value: function start() {
      this.pause();
      this.intervalId = setInterval(this.update.bind(this), 1000);
    }
  }, {
    key: 'pause',
    value: function pause() {
      clearInterval(this.intervalId);
    }
  }, {
    key: 'update',
    value: function update() {
      this.elapsed = Math.round(this.audio ? this.audio.currentTime : this.elapsed + 1);
      if (this.index === this.lyrics.length - 1) return;
      for (var i = this.index + 1; i < this.lyrics.length; i++) {
        var seconds = this.getSeconds(this.lyrics[i]);
        if (this.elapsed === seconds && (!this.lyrics[i + 1] || this.elapsed < this.getSeconds(this.lyrics[i + 1]))) {
          this.lines.children[this.index].classList.remove('active');
          this.lines.children[i].classList.add('active');
          this.index = 1;
          break;
        }
      }
      if (this.index > 2) {
        var y = -(this.index - 2) * this.LINE_HEIGHT;
        this.$lines.style.transform = 'translateY(' + y + 'px)';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var html = this.lyrics.map(function (line) {
        return '\n      <div class="player-lyrics-line">' + line.slice(10) + '</div>\n    ';
      }).join('');
      this.lines.innerHTML = html;
    }
  }, {
    key: 'reset',
    value: function reset(text) {
      this.pause();
      this.index = 0;
      this.elapsed = 0;

      this.lines.style.transform = 'translateY(0)';
      var active = this.lines.querySelector('.active');
      if (active) {
        active.classList.remove('active');
      }

      if (text) {
        this.text = this.formatText(text) || '';
        this.lyrics = this.text.match(/^\[\d{2}:\d{2}.\d{2}\](.+)/gm) || [];
        if (this.lyrics.length) this.render();
      }

      if (this.lyrics.length) {
        this.lines.children[this.index].classList.add('active');
      }
    }
  }, {
    key: 'restart',
    value: function restart() {
      this.reset();
      this.start();
    }
  }, {
    key: 'getSeconds',
    value: function getSeconds(line) {
      return +line.replace(/^\[(\d{2}):(\d{2}).*/, function (match, p1, p2) {
        return 60 * +p1 + +p2;
      });
    }
  }, {
    key: 'formatText',
    value: function formatText(text) {
      var div = document.createElement('div');
      div.innerHTML = text;
      return div.innerHTML;
    }
  }]);

  return LyricsPlayer;
}();

LyricsPlayer.prototype.LINE_HEIGHT = 42;

exports.default = LyricsPlayer;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.songUrl = songUrl;
exports.lyricsUrl = lyricsUrl;
exports.albumCoverUrl = albumCoverUrl;
exports.searchUrl = searchUrl;

var _constants = __webpack_require__(1);

function songUrl(id) {
  return 'http://ws.stream.qqmusic.qq.com/' + id + '.m4a?fromtag=46';
}

function lyricsUrl(songid) {
  return _constants.LYRICS_URL + '?id=' + songid;
}

function albumCoverUrl(id) {
  return 'https://y.gtimg.cn/music/photo_new/T002R150x150M000' + id + '.jpg';
}

function searchUrl(keyword) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return _constants.SEARCH_URL + '?keyword=' + keyword + '&page=' + page;
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDc1ZjlmNzVhY2ZhYTdmMzZhMTAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXp5bG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWNvbW1lbmQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90b3BsaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXVzaWNfcGxheWVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZ3Jlc3NfYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbHlyaWNzX3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlbHBlcnMuanMiXSwibmFtZXMiOlsibGF6eUxvYWQiLCJpbWdzIiwiQXJyYXkiLCJmcm9tIiwid2luZG93Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpbnRlcnNlY3Rpb25SYXRpbyIsImxvYWRJbWFnZSIsInRhcmdldCIsInVub2JzZXJ2ZSIsInRocmVzaG9sZCIsIm9ic2VydmUiLCJpbWciLCJvbnNjcm9sbCIsInRocm90dGxlIiwibGVuZ3RoIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZpbHRlciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiaW5WaWV3UG9ydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ2aWV3UG9ydEhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwidmlld1BvcnRXaWR0aCIsImNsaWVudFdpZHRoIiwiY2FsbGJhY2siLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiZGF0YXNldCIsIm9ubG9hZCIsInJlbW92ZSIsImZ1bmMiLCJ3YWl0IiwicHJldiIsInRpbWVyIiwiZm4iLCJjdXJyIiwiRGF0ZSIsIm5vdyIsImRpZmYiLCJSRUNPTU1FTkRfVVJMIiwiVE9QTElTVF9VUkwiLCJTRUFSQ0hfVVJMIiwiTFlSSUNTX1VSTCIsIlNsaWRlciIsImVsIiwic2xpZGVzIiwiaW50ZXJ2YWwiLCJnZXRFbGVtZW50QnlJZCIsImluZGV4IiwicmVuZGVyIiwicGxheSIsImlubmVySFRNTCIsImdyb3VwIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJzdHlsZSIsIndpZHRoIiwibWFwIiwic2xpZGUiLCJsaW5rVXJsIiwicGljVXJsIiwiam9pbiIsImRvdHNIVE1MIiwiZG90Iiwic2V0SW50ZXJ2YWwiLCJuZXh0IiwiYmluZCIsInRyYW5zZm9ybSIsImRvdENsYXNzIiwicG9zaXRpb24iLCJkb3RzIiwibGFzdEVsZW1lbnRDaGlsZCIsImNoaWxkcmVuIiwicHJvdG90eXBlIiwiY2FsbCIsImNoaWxkIiwiY2xhc3NOYW1lIiwicmVjb21tZW5kIiwibGF1bmNoIiwidG9wbGlzdCIsInNlYXJjaCIsInBsYXllciIsInF1ZXJ5U2VsZWN0b3IiLCJzaG93Iiwib25IYXNoQ2hhbmdlIiwiaGFzaCIsImxvY2F0aW9uIiwidGVzdCIsIm1hdGNoZXMiLCJzbGljZSIsImluZGV4T2YiLCJtYXRjaCIsIm9wdGlvbnMiLCJyZWR1Y2UiLCJyZXMiLCJjdXIiLCJhcnIiLCJzcGxpdCIsImRlY29kZVVSSUNvbXBvbmVudCIsImhpZGUiLCJSZWNvbW1lbmQiLCJmZXRjaCIsInRoZW4iLCJqc29uIiwicmVuZGVyU2xpZGVyIiwiZGF0YSIsInNsaWRlciIsInJlbmRlclJhZGlvcyIsInJhZGlvTGlzdCIsInJlbmRlclBsYXlMaXN0cyIsInNvbmdMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsInJhZGlvcyIsInJhZGlvIiwiRnRpdGxlIiwicGxheUxpc3RzIiwic29uZ2xpc3QiLCJzb25nTGlzdERlc2MiLCJUb3BMaXN0IiwibGlzdCIsInRvcExpc3QiLCJsaXN0ZW5Db3VudCIsInRvRml4ZWQiLCJ0b3BUaXRsZSIsImlkeCIsInNvbmduYW1lIiwic2luZ2VybmFtZSIsIm5hdmJhcl9jbGljayIsImV2ZW50Iiwicm9sZSIsInBhcmVudEVsZW1lbnQiLCJ0YWIiLCJhZGQiLCJjb250ZW50IiwidmlldyIsImRpc3BsYXkiLCJTZWFyY2giLCJpbnB1dCIsIm9uS2V5VXAiLCJzb25ncyIsInBhZ2UiLCJrZXl3b3JkIiwicGVycGFnZSIsIm5vbW9yZSIsImZldGNoaW5nIiwib25TY3JvbGwiLCJjbGVhciIsInNob3dDbGVhcklucHV0IiwiY2xlYXJJbnB1dCIsInJlY29yZEVsZW1lbnQiLCJyZW5kZXJSZWNvcmRzIiwiY2xlYXJSZWNvcmQiLCJ2YWx1ZSIsInRyaW0iLCJyZXNldCIsImtleSIsInJlY29yZCIsInBhZ2VZT2Zmc2V0IiwiYm9keSIsInNjcm9sbEhlaWdodCIsImxvYWRpbmciLCJzb25nIiwiY3VycGFnZSIsIm1lc3NhZ2UiLCJhcHBlbmQiLCJkb25lIiwiY2F0Y2giLCJodG1sIiwiYXJ0aXN0Iiwic2luZ2VyIiwicyIsIm5hbWUiLCJzb25naWQiLCJhbGJ1bW1pZCIsImluc2VydEFkamFjZW50SFRNTCIsIm1vcmUiLCJrZXl3b3JkcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXR0ZXJuIiwicmVnZXgiLCJSZWdFeHAiLCJjb25zb2xlIiwibG9nIiwicmVwbGFjZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiTXVzaWNQbGF5ZXIiLCJhdWRpbyIsImNyZWF0ZUF1ZGlvIiwibHlyaWNzIiwicHJvZ3Jlc3MiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyZXN0YXJ0IiwiYXBwZW5kQ2hpbGQiLCJvblBsYXkiLCJvblBhdXNlIiwic3RhcnQiLCJwYXVzZSIsImlubmVyVGV4dCIsImR1cmF0aW9uIiwiY292ZXJVcmwiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJseXJpYyIsInRleHQiLCJQcm9ncmVzc0JhciIsImVsYXBzZWQiLCJwcm9ncmVzc0VsZW1lbnQiLCJlbGFwc2VkRWxlbWVudCIsImR1cmF0aW9uRWxlbWVudCIsImZvcm1hdFRpbWUiLCJpbnRlcnZhbElkIiwidXBkYXRlIiwiY2xlYXJJbnRlcnZhbCIsInNlY29uZHMiLCJtaW5zIiwic2VjcyIsIkx5cmljc1BsYXllciIsImxpbmVzIiwicm91bmQiLCJjdXJyZW50VGltZSIsImkiLCJnZXRTZWNvbmRzIiwieSIsIkxJTkVfSEVJR0hUIiwiJGxpbmVzIiwibGluZSIsImFjdGl2ZSIsImZvcm1hdFRleHQiLCJwMSIsInAyIiwiZGl2Iiwic29uZ1VybCIsImx5cmljc1VybCIsImFsYnVtQ292ZXJVcmwiLCJzZWFyY2hVcmwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcERBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQyxzQkFBc0IsRUFBRTtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUN6TEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7QUNwQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtB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QTlDO0FBQ0Q7QUFDRjs7OzhCQUVTO0FBQ1IsV0FBS3NCLEtBQUw7QUFDQSxXQUFLK0MsS0FBTDtBQUNEOzs7K0JBRVU2QixJLEVBQU07QUFDZixhQUFPLENBQUNBLEtBQUs5QyxPQUFMLENBQWEsc0JBQWIsRUFBcUMsVUFBQzdGLEtBQUQsRUFBUThJLEVBQVIsRUFBWUMsRUFBWjtBQUFBLGVBQW1CLEtBQU0sQ0FBQ0QsRUFBUCxHQUFjLENBQUNDLEVBQWxDO0FBQUEsT0FBckMsQ0FBUjtBQUNEOzs7K0JBRVUxQixJLEVBQU07QUFDZixVQUFJMkIsTUFBTXhOLFNBQVM2SyxhQUFULENBQXVCLEtBQXZCLENBQVY7QUFDQTJDLFVBQUl2TCxTQUFKLEdBQWdCNEosSUFBaEI7QUFDQSxhQUFPMkIsSUFBSXZMLFNBQVg7QUFDRDs7Ozs7O0FBR0h5SyxhQUFhcEosU0FBYixDQUF1QjJKLFdBQXZCLEdBQXFDLEVBQXJDOztrQkFFZVAsWTs7Ozs7Ozs7Ozs7O1FDeEZDZSxPLEdBQUFBLE87UUFJQUMsUyxHQUFBQSxTO1FBSUFDLGEsR0FBQUEsYTtRQUlBQyxTLEdBQUFBLFM7O0FBZGhCOztBQUVPLFNBQVNILE9BQVQsQ0FBaUIzQyxFQUFqQixFQUFxQjtBQUMxQiw4Q0FBMENBLEVBQTFDO0FBQ0Q7O0FBRU0sU0FBUzRDLFNBQVQsQ0FBbUJqRSxNQUFuQixFQUEyQjtBQUNoQywwQ0FBMkJBLE1BQTNCO0FBQ0Q7O0FBRU0sU0FBU2tFLGFBQVQsQ0FBdUI3QyxFQUF2QixFQUEyQjtBQUNoQyxpRUFBNkRBLEVBQTdEO0FBQ0Q7O0FBRU0sU0FBUzhDLFNBQVQsQ0FBbUJsRyxPQUFuQixFQUFzQztBQUFBLE1BQVZELElBQVUsdUVBQUgsQ0FBRzs7QUFDM0MsK0NBQWdDQyxPQUFoQyxjQUFnREQsSUFBaEQ7QUFDRCxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSBmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhjaHVua0lkcywgbW9yZU1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKSB7XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXSwgcmVzdWx0O1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3RzIHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDE6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhID09PSAwKSB7XG4gXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHsgcmVzb2x2ZSgpOyB9KTtcbiBcdFx0fVxuXG4gXHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRDaHVua0RhdGFbMl07XG4gXHRcdH1cblxuIFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdH0pO1xuIFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlO1xuXG4gXHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiBcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjAwMDA7XG5cbiBcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdH1cbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuanNcIjtcbiBcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUsIDEyMDAwMCk7XG4gXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdGZ1bmN0aW9uIG9uU2NyaXB0Q29tcGxldGUoKSB7XG4gXHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0Y2h1bmtbMV0obmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuJykpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gXHRcdHJldHVybiBwcm9taXNlO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdFwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwNzVmOWY3NWFjZmFhN2YzNmExMCIsImltcG9ydCB7IGNsZWFyVGltZW91dCwgc2V0VGltZW91dCB9IGZyb20gXCJ0aW1lcnNcIjtcblxuLy9yZWNvbW1lbmQgcGFnZSBsaXN0IGltZyBsYXp5bG9hZFxuZnVuY3Rpb24gbGF6eUxvYWQoaW1ncyl7XG4gIGltZ3MgPSBBcnJheS5mcm9tKGltZ3MpXG5cbiAgLy/kvb/nlKhJbnRlcnNlY3Rpb25PYnNlcnZlcuWunueOsOaHkuWKoOi9vVxuICBpZiAoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpIHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgaWYgKGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGxvYWRJbWFnZShlbnRyeS50YXJnZXQsICgpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LCB7dGhyZXNob2xkOiAwLjAxfSlcblxuICAgIGltZ3MuZm9yRWFjaChpbWcgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShpbWcpKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IG9uc2Nyb2xsID0gdGhyb3R0bGUoKCkgPT4ge1xuICAgICAgaWYgKGltZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uc2Nyb2xsKVxuICAgICAgaW1ncy5maWx0ZXIoaW1nID0+IGltZy5jbGFzc0xpc3QuY29udGFpbnMoJ2xhenlsb2FkJykpXG4gICAgICBpbWdzLmZvckVhY2goaW1nID0+IGluVmlld1BvcnQoaW1nKSYmbG9hZEltYWdlKGltZykpXG4gICAgfSwgMzAwKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uc2Nyb2xsKVxuICAgIC8v56ys5LiA5qyh5Yqg6L29XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdzY3JvbGwnKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGluVmlld1BvcnQoaW1nKXtcbiAgICBjb25zdCB7dG9wLCBsZWZ0LCByaWdodCwgYm90dG9tfSA9IGltZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IHZpZXdQb3J0SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIGNvbnN0IHZpZXdQb3J0V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcblxuICAgIHJldHVybiAoXG4gICAgICAodG9wID4gMCAmJiB0b3AgPCB2aWV3UG9ydEhlaWdodCB8fCBib3R0b20gPiAwICYmIGJvdHRvbSA8IHZpZXdQb3J0SGVpZ2h0KSAmJlxuICAgICAgKGxlZnQgPiAwICYmIGxlZnQgPCB2aWV3UG9ydFdpZHRoIHx8IHJpZ2h0ID4gMCAmJiByaWdodCA8IHZpZXdQb3J0V2lkdGgpXG4gICAgKVxuICB9XG5cbiAgZnVuY3Rpb24gbG9hZEltYWdlKGltZywgY2FsbGJhY2spe1xuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgaW1hZ2Uuc3JjID0gaW1nLmRhdGFzZXQuc3JjXG4gICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICAgIGltZy5zcmMgPSBpbWFnZS5zcmNcbiAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKCdsYXp5bG9hZCcpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKClcbiAgfVxuXG4gIC8v5LyY5YyW5rua5Yqo5LqL5Lu255uR5ZCsXG4gIGZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQpe1xuICAgIGxldCBwcmV2LCB0aW1lclxuICAgIHJldHVybiBmdW5jdGlvbiBmbigpe1xuICAgICAgbGV0IGN1cnIgID0gRGF0ZS5ub3coKVxuICAgICAgbGV0IGRpZmYgPSBjdXJyIC0gcHJldlxuICAgICAgaWYoIXByZXYgfHwgZGlmZiA+PSB3YWl0KSB7XG4gICAgICAgIGZ1bmMoKVxuICAgICAgICBwcmV2ID0gY3VyclxuICAgICAgfSBlbHNlIGlmIChkaWZmIDwgd2FpdCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmbiwgd2FpdCAtIGRpZmYpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxhenlMb2FkXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXp5bG9hZC5qcyIsImV4cG9ydCBjb25zdCBSRUNPTU1FTkRfVVJMID0gJ2h0dHBzOi8vbXVzaWMtYXBpLWh1dWV2eXJtbWkubm93LnNoJ1xuZXhwb3J0IGNvbnN0IFRPUExJU1RfVVJMID0gJ2h0dHBzOi8vbXVzaWMtYXBpLWh1dWV2eXJtbWkubm93LnNoL3RvcCdcbmV4cG9ydCBjb25zdCBTRUFSQ0hfVVJMID0gJ2h0dHBzOi8vbXVzaWMtYXBpLWh1dWV2eXJtbWkubm93LnNoL3NlYXJjaCdcbmV4cG9ydCBjb25zdCBMWVJJQ1NfVVJMID0gJ2h0dHBzOi8vbXVzaWMtYXBpLWh1dWV2eXJtbWkubm93LnNoL2x5cmljcydcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2NvbnN0YW50cy5qcyIsImNsYXNzIFNsaWRlciB7XG4gIGNvbnN0cnVjdG9yKGVsLCBzbGlkZXMsIGludGVydmFsPTMwMDApe1xuICAgIHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgPyB0aGlzLmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwpOiBlbFxuICAgIHRoaXMuc2xpZGVzID0gc2xpZGVzXG4gICAgdGhpcy5pbmRleCA9IDBcbiAgICB0aGlzLmludGVydmFsID0gaW50ZXJ2YWxcbiAgICB0aGlzLnJlbmRlcigpXG4gICAgdGhpcy5wbGF5KClcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJ1aS1zbGlkZXItZ3JvdXBcIj48L2Rpdj5gXG4gICAgbGV0IGdyb3VwID0gdGhpcy5lbC5maXJzdEVsZW1lbnRDaGlsZFxuICAgIC8v6I635Y+WZ3JvdXBcbiAgICBncm91cC5zdHlsZS53aWR0aCA9IGAke3RoaXMuc2xpZGVzLmxlbmd0aCAqIDEwMH0lYFxuICAgIGdyb3VwLmlubmVySFRNTCA9IHRoaXMuc2xpZGVzLm1hcChzbGlkZSA9PlxuICAgICAgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidWktc2xpZGVyLWl0ZW1cIj5cbiAgICAgICAgICA8YSBocmVmPVwiJHtzbGlkZS5saW5rVXJsfVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3NsaWRlLnBpY1VybH1cIiBhbHQ9XCJzbGlkZS1pbWdcIj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYFxuICAgICkuam9pbignJylcblxuICAgIGxldCBkb3RzSFRNTCA9XG4gICAgYFxuICAgICAgPHAgY2xhc3M9XCJ1aS1zbGlkZXItZG90c1wiPlxuICAgICAgICAke3RoaXMuc2xpZGVzLm1hcCgoZG90LCBpbmRleCk9PntcbiAgICAgICAgICByZXR1cm4gaW5kZXggPT09IDAgPyBgPGIgY2xhc3M9XCJ1aS1zdGF0ZS1hY3RpdmVcIj48L2I+YCA6IGA8YiBjbGFzcz1cIlwiPjwvYj5gXG4gICAgICAgIH0pLmpvaW4oJycpfVxuICAgICAgPC9wPlxuICAgIGBcbiAgICB0aGlzLmVsLmlubmVySFRNTCArPSBkb3RzSFRNTFxuICB9XG5cbiAgcGxheSgpe1xuICAgIHNldEludGVydmFsKHRoaXMubmV4dC5iaW5kKHRoaXMpLCB0aGlzLmludGVydmFsKVxuICB9XG5cbiAgbmV4dCgpe1xuICAgIC8vRklYTUU6IOacgOWQjuS4gOW8oOW5s+mhuueahOi/h+W6puWIsOesrOS4gOW8oFxuICAgIGxldCBncm91cCA9ICB0aGlzLmVsLmZpcnN0RWxlbWVudENoaWxkXG4gICAgdGhpcy5pbmRleCArPSAxXG4gICAgLy/mnIDlkI7kuIDlvKDlm57ljp/kvY1cbiAgICBpZih0aGlzLmluZGV4ID09PSB0aGlzLnNsaWRlcy5sZW5ndGgpe1xuICAgICAgZ3JvdXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgwKWBcbiAgICAgIHRoaXMuaW5kZXggPSAwXG4gICAgICB0aGlzLmRvdENsYXNzKClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgcG9zaXRpb24gPSBgLSR7dGhpcy5pbmRleCAvIHRoaXMuc2xpZGVzLmxlbmd0aCAqIDEwMH0lYFxuICAgIGdyb3VwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtwb3NpdGlvbn0pYFxuXG4gICAgdGhpcy5kb3RDbGFzcygpXG4gIH1cblxuICBkb3RDbGFzcygpe1xuICAgIGxldCBkb3RzID0gdGhpcy5lbC5sYXN0RWxlbWVudENoaWxkXG5cbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmVsLmxhc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW5cbiAgICBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoY2hpbGRyZW4sIGNoaWxkPT5jaGlsZC5jbGFzc0xpc3QucmVtb3ZlKGB1aS1zdGF0ZS1hY3RpdmVgKSlcblxuICAgIHRoaXMuZWwubGFzdEVsZW1lbnRDaGlsZC5jaGlsZHJlblt0aGlzLmluZGV4XS5jbGFzc05hbWUgPSBgdWktc3RhdGUtYWN0aXZlYFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlclxuLy8gbW9kdWxlLmV4cG9ydHMgPSBTbGlkZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3NsaWRlci5qcyIsImltcG9ydCgnLi4vc2Fzcy9hcHAuc2NzcycpXG4vL0VTNiBpbXBvcnRcbmltcG9ydCBSZWNvbW1lbmQgZnJvbSAnLi9jb21wb25lbnRzL3JlY29tbWVuZCdcbmltcG9ydCBUb3BMaXN0IGZyb20gJy4vY29tcG9uZW50cy90b3BsaXN0J1xuaW1wb3J0IFNsaWRlciBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVyJ1xuaW1wb3J0IE5hdkJhciBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyJ1xuaW1wb3J0IGxhenlsb2FkIGZyb20gJy4vY29tcG9uZW50cy9sYXp5bG9hZCdcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaCdcbmltcG9ydCBNdXNpY1BsYXllciBmcm9tICcuL2NvbXBvbmVudHMvbXVzaWNfcGxheWVyJ1xuLy9Db21tb25KU1xuLy8gY29uc3QgU2xpZGVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3NsaWRlcicpXG5cbk5hdkJhcigpXG5jb25zdCByZWNvbW1lbmQgPSBuZXcgUmVjb21tZW5kKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNvbS12aWV3JykpLmxhdW5jaCgpXG5jb25zdCB0b3BsaXN0ID0gbmV3IFRvcExpc3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmstdmlldycpKS5sYXVuY2goKVxuXG4vL1NlYXJjaCDnu4Tku7ZcbmNvbnN0IHNlYXJjaCA9IG5ldyBTZWFyY2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC12aWV3JykpXG5cbi8v6Z+z5LmQ5pKt5pS+5ZmoXG5sZXQgcGxheWVyID0gbmV3IE11c2ljUGxheWVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXInKSlcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93LXBsYXllcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwbGF5ZXIuc2hvdygpXG59KVxuXG5vbkhhc2hDaGFuZ2UoKVxuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIG9uSGFzaENoYW5nZSlcbmZ1bmN0aW9uIG9uSGFzaENoYW5nZSgpIHtcbiAgbGV0IGhhc2ggPSBsb2NhdGlvbi5oYXNoXG4gIGlmKC9eI3BsYXllclxcPy4rLy50ZXN0KGhhc2gpKSB7XG4gICAgbGV0IG1hdGNoZXMgPSBoYXNoLnNsaWNlKGhhc2guaW5kZXhPZignPycpICsgMSkubWF0Y2goLyhcXHcrKT0oW14mXSspL2cpXG4gICAgbGV0IG9wdGlvbnMgPSBtYXRjaGVzICYmIG1hdGNoZXMucmVkdWNlKChyZXMsIGN1cikgPT4ge1xuICAgICAgbGV0IGFyciA9IGN1ci5zcGxpdCgnPScpXG4gICAgICByZXNbYXJyWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChhcnJbMV0pXG4gICAgICByZXR1cm4gcmVzXG4gICAgfSwge30pXG4gICAgcGxheWVyLnBsYXkob3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBwbGF5ZXIuaGlkZSgpXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAuanMiLCJpbXBvcnQgU2xpZGVyIGZyb20gJy4vc2xpZGVyJ1xuaW1wb3J0IGxhenlMb2FkIGZyb20gJy4vbGF6eWxvYWQnXG5pbXBvcnQgeyBSRUNPTU1FTkRfVVJMIH0gZnJvbSAnLi9jb25zdGFudHMnXG5cbmNsYXNzIFJlY29tbWVuZCB7XG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgdGhpcy5lbCA9IGVsXG4gIH1cblxuICBsYXVuY2goKSB7XG4gICAgZmV0Y2goUkVDT01NRU5EX1VSTClcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB0aGlzLmpzb24gPSBqc29uKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5yZW5kZXIoKSlcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5yZW5kZXJTbGlkZXIodGhpcy5qc29uLmRhdGEuc2xpZGVyKVxuICAgIHRoaXMucmVuZGVyUmFkaW9zKHRoaXMuanNvbi5kYXRhLnJhZGlvTGlzdClcbiAgICB0aGlzLnJlbmRlclBsYXlMaXN0cyh0aGlzLmpzb24uZGF0YS5zb25nTGlzdClcblxuICAgIC8vVE9ETzogTGF6eUxvYWRcbiAgICBsYXp5TG9hZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGF6eWxvYWQnKSlcbiAgfVxuXG4gIHJlbmRlclNsaWRlcihzbGlkZXMpIHtcbiAgICB0aGlzLnNsaWRlciA9IG5ldyBTbGlkZXIoXG4gICAgICAnc2xpZGVyJyxcbiAgICAgIHNsaWRlc1xuICAgIClcbiAgfVxuXG4gIHJlbmRlclJhZGlvcyhyYWRpb3MpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFkaW9zLWdyb3VwJykuaW5uZXJIVE1MID0gcmFkaW9zLm1hcChyYWRpbyA9PiB7XG4gICAgICByZXR1cm4gYFxuICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibGlzdC1tYWluXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1tZWRpYVwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImxhenlsb2FkXCIgc3JjPVwiLi4vaW1ncy9kZWZhdWx0X3BpYy5qcGdcIiBkYXRhLXNyYz1cIiR7cmFkaW8ucGljVXJsfVwiIGFsdD1cIiNcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpY29uLXBsYXlcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LWluZm9cIj48aDM+JHtyYWRpby5GdGl0bGV9PC9oMz48L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICBgXG4gICAgfSkuam9pbignJylcbiAgfVxuXG4gIHJlbmRlclBsYXlMaXN0cyhwbGF5TGlzdHMpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29uZ2xpc3RzLWdyb3VwJykuaW5uZXJIVE1MID0gcGxheUxpc3RzLm1hcChzb25nbGlzdCA9PiB7XG4gICAgICByZXR1cm4gYFxuICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibGlzdC1tYWluXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1tZWRpYVwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImxhenlsb2FkXCIgc3JjPVwiLi4vaW1ncy9kZWZhdWx0X3BpYy5qcGdcIiBkYXRhLXNyYz1cIiR7c29uZ2xpc3QucGljVXJsfVwiIGFsdD1cIiNcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpY29uLXBsYXlcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LWluZm9cIj48aDM+JHtzb25nbGlzdC5zb25nTGlzdERlc2N9PC9oMz48L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICBgXG4gICAgfSkuam9pbignJylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNvbW1lbmRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3JlY29tbWVuZC5qcyIsInZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwod2luZG93LCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IGxhenlMb2FkIGZyb20gJy4vbGF6eWxvYWQnXG5pbXBvcnQgeyBUT1BMSVNUX1VSTCB9IGZyb20gJy4vY29uc3RhbnRzJ1xuXG5jbGFzcyBUb3BMaXN0IHtcbiAgY29uc3RydWN0b3IoZWwpIHtcbiAgICB0aGlzLmVsID0gZWxcbiAgfVxuXG4gIGxhdW5jaCgpIHtcbiAgICBmZXRjaChUT1BMSVNUX1VSTClcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB0aGlzLmxpc3QgPSBqc29uLmRhdGEudG9wTGlzdClcbiAgICAgIC50aGVuKCgpID0+IHRoaXMucmVuZGVyKCkpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5rLWxpc3QnKS5pbm5lckhUTUwgPSB0aGlzLmxpc3QubWFwKHRvcExpc3QgPT4ge1xuICAgICAgcmV0dXJuIGBcbiAgICAgICAgPGxpIGNsYXNzPVwidG9waWNfaXRlbVwiIGRhdGEtaWQ9XCI0XCIgZGF0YS10eXBlPVwiMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9waWNfbWFpblwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0b3BpY19tZWRpYVwiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibGF6eWxvYWRcIiBkYXRhLXNyYz1cIiR7dG9wTGlzdC5waWNVcmx9XCIgc3JjPVwiLi4vaW1ncy9kZWZhdWx0X3BpYy5qcGdcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0ZW5fY291bnRcIj48aSBjbGFzcz1cImljb24gaWNvbl9saXN0ZW5cIj48L2k+JHsodG9wTGlzdC5saXN0ZW5Db3VudCAvIDEwMDAwKS50b0ZpeGVkKDEpfeS4hzwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvcGljX2luZm9cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcGljX2NvbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRvcGljX3RpdFwiPiR7dG9wTGlzdC50b3BUaXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgJHt0b3BMaXN0LnNvbmdMaXN0Lm1hcCgobGlzdCwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPHA+JHtpZHgrMX08c3BhbiBjbGFzcz1cInRleHRfbmFtZVwiPiR7bGlzdC5zb25nbmFtZX08L3NwYW4+LSR7bGlzdC5zaW5nZXJuYW1lfTwvcD5gXG4gICAgICAgICAgICAgICAgICB9KS5qb2luKCcnKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwidG9waWNfYXJyb3dcIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICAgICAgYFxuICAgIH0pLmpvaW4oJycpXG4gICAgbGF6eUxvYWQoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhenlsb2FkJykpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9wTGlzdFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdG9wbGlzdC5qcyIsIlxuY29uc3QgbmF2YmFyX2NsaWNrID0gKCkgPT4ge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxuXG4gICAgaWYgKHRhcmdldC5kYXRhc2V0LnJvbGUgIT09ICd0YWInKSByZXR1cm5cblxuICAgIFtdLmZvckVhY2guY2FsbCh0YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlbiwgdGFiID0+IHtcbiAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIH0pXG5cbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQuZGF0YXNldC52aWV3KVxuXG4gICAgaWYoY29udGVudCkge1xuICAgICAgW10uZm9yRWFjaC5jYWxsKGNvbnRlbnQucGFyZW50RWxlbWVudC5jaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgICBjaGlsZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICB9KVxuICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBuYXZiYXJfY2xpY2tcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL25hdmJhci5qcyIsImNsYXNzIFNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgdGhpcy5lbCA9IGVsXG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignI3NlYXJjaC1pbnB1dCcpXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMub25LZXlVcC5iaW5kKHRoaXMpKVxuICAgIHRoaXMuc29uZ3MgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtY29udGVudCcpXG4gICAgdGhpcy5wYWdlID0gMVxuICAgIHRoaXMua2V5d29yZCA9ICcnXG4gICAgdGhpcy5wZXJwYWdlID0gMjBcbiAgICB0aGlzLm5vbW9yZSA9IGZhbHNlXG4gICAgdGhpcy5mZXRjaGluZyA9IGZhbHNlXG4gICAgdGhpcy5vbnNjcm9sbCA9IHRoaXMub25TY3JvbGwuYmluZCh0aGlzKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uc2Nyb2xsKVxuICAgIC8vY2xlYXIgYnRuXG4gICAgdGhpcy5jbGVhciA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLmljb24tY2FuY2VsY2lyY2xlZCcpXG4gICAgdGhpcy5jbGVhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnNob3dDbGVhcklucHV0LmJpbmQodGhpcykpXG4gICAgdGhpcy5jbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xlYXJJbnB1dC5iaW5kKHRoaXMpKVxuICAgIHRoaXMucmVjb3JkRWxlbWVudCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignI3JlY29yZC1rZXlzJylcbiAgICB0aGlzLnJlbmRlclJlY29yZHMoKVxuICAgIHRoaXMucmVjb3JkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjcmVjb3JkLWNsZWFyLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGVhclJlY29yZC5iaW5kKHRoaXMpKVxuICB9XG5cbiAgb25LZXlVcChldmVudCkge1xuICAgIGxldCBrZXl3b3JkID1ldmVudC50YXJnZXQudmFsdWUudHJpbSgpXG4gICAgaWYgKCFrZXl3b3JkKSByZXR1cm4gdGhpcy5yZXNldCgpXG4gICAgaWYgKGV2ZW50LmtleSAhPT0gJ0VudGVyJykgcmV0dXJuXG4gICAgdGhpcy5yZWNvcmRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB0aGlzLnNlYXJjaChrZXl3b3JkKVxuICAgIHRoaXMucmVjb3JkKGtleXdvcmQpXG4gIH1cblxuICBvblNjcm9sbChldmVudCkge1xuICAgIGlmKHRoaXMubm9tb3JlKSByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25zY3JvbGwpXG4gICAgaWYocGFnZVlPZmZzZXQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgLSA1MCkge1xuICAgICAgdGhpcy5zZWFyY2godGhpcy5rZXl3b3JkLCB0aGlzLnBhZ2UgKyAxKVxuICAgIH1cbiAgfVxuXG4gIHNlYXJjaChrZXl3b3JkLCBwYWdlKSB7XG4gICAgaWYgKCF0aGlzLnBhZ2UgJiYgdGhpcy5rZXl3b3JkID09PSBrZXl3b3JkKSByZXR1cm5cbiAgICBpZiAodGhpcy5ub21vcmUgfHwgdGhpcy5mZXRjaGluZykgcmV0dXJuXG4gICAgaWYgKHRoaXMua2V5d29yZCAhPT0ga2V5d29yZCkgdGhpcy5yZXNldCgpXG4gICAgdGhpcy5rZXl3b3JkID0ga2V5d29yZFxuICAgIHRoaXMubG9hZGluZygpXG4gICAgZmV0Y2goYGh0dHBzOi8vbXVzaWMtYXBpLW9pd3hrb25lc28ubm93LnNoL3NlYXJjaD9rZXl3b3JkPSR7dGhpcy5rZXl3b3JkfSZwYWdlPSR7cGFnZXx8dGhpcy5wYWdlfWApXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICB0aGlzLnBhZ2UgPSBqc29uLmRhdGEuc29uZy5jdXJwYWdlXG4gICAgICAgIHRoaXMubm9tb3JlID0ganNvbi5tZXNzYWdlID09PSAnbm8gcmVzdWx0cydcbiAgICAgICAgcmV0dXJuIGpzb24uZGF0YS5zb25nLmxpc3RcbiAgICAgIH0pXG4gICAgICAudGhlbihzb25ncyA9PiB0aGlzLmFwcGVuZChzb25ncykpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmRvbmUoKSlcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLmRvbmUoKSlcbiAgfVxuXG4gIGFwcGVuZChzb25ncykge1xuICAgIGxldCBodG1sID0gc29uZ3MubWFwKHNvbmcgPT4ge1xuICAgICAgbGV0IGFydGlzdCA9IHNvbmcuc2luZ2VyLm1hcChzID0+IHMubmFtZSkuam9pbignICcpXG4gICAgICByZXR1cm4gYFxuICAgICAgPGxpPlxuICAgICAgICA8YSBjbGFzcz1cInNvbmctaXRlbVwiXG4gICAgICAgIGhyZWY9XCIjcGxheWVyP2FydGlzdD0ke2FydGlzdH0mc29uZ2lkPSR7c29uZy5zb25naWR9JnNvbmduYW1lPSR7c29uZy5zb25nbmFtZX0mYWxidW1taWQ9JHtzb25nLmFsYnVtbWlkfSZkdXJhdGlvbj0ke3NvbmcuaW50ZXJ2YWx9XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJpY29uIGljb24tbXVzaWNcIj48L2k+XG4gICAgICAgICAgPGg2IGNsYXNzPVwibWFpbi10aXRcIj4ke3Nvbmcuc29uZ25hbWV9PC9oNj5cbiAgICAgICAgICA8cCBjbGFzcz1cInN1Yi10aXRcIj4ke2FydGlzdH08L3A+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICBgXG4gICAgfSkuam9pbignJylcbiAgICB0aGlzLnNvbmdzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbClcbiAgICB0aGlzLnNvbmdzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gIH1cblxuICBsb2FkaW5nKCkge1xuICAgIHRoaXMuZmV0Y2hpbmcgPSB0cnVlXG4gICAgdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWxvYWRpbmcnKS5jbGFzc0xpc3QuYWRkKCdzaG93JylcbiAgfVxuXG4gIGRvbmUoKSB7XG4gICAgdGhpcy5mZXRjaGluZyA9IGZhbHNlXG4gICAgaWYgKHRoaXMubW9yZSkge1xuICAgICAgdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCcubG9hZGluZy1pY29uLCAubG9hZGluZy10ZXh0JykuZm9yRWFjaChlbCA9PiBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKVxuICAgICAgdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZy1kb25lJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgIHRoaXMuZWwucXVlcnlTZWxlY3RvcignLnNlYXJjaC1sb2FkaW5nJykuY2xhc3NMaXN0LmFkZCgnc2hvdycpXG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbG9hZGluZycpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxuICAgIH1cbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMucGFnZSA9MVxuICAgIHRoaXMua2V5d29yZCA9ICcnXG4gICAgdGhpcy5ub21vcmUgPSBmYWxzZVxuICAgIHRoaXMuZmV0Y2hpbmcgPWZhbHNlXG4gICAgdGhpcy5zb25ncy5pbm5lckhUTUwgPSAnJ1xuICB9XG5cbiAgc2hvd0NsZWFySW5wdXQoKXtcbiAgICB0aGlzLmNsZWFyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gIH1cbiAgY2xlYXJJbnB1dCgpe1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSAnJ1xuICAgIHRoaXMuc29uZ3Muc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHRoaXMucmVuZGVyUmVjb3JkcygpXG4gIH1cblxuXG4gIHJlbmRlclJlY29yZHMoKXtcbiAgICBsZXQga2V5d29yZHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VhcmNoX2hpc3RvcnknKTtcbiAgICBpZiAoa2V5d29yZHMpIHtcbiAgICAgIGxldCBodG1sID0ga2V5d29yZHMuc3BsaXQoJywnKS5tYXAoa2V5d29yZCA9PiBcbiAgICAgICAgYFxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1zaGlqaWFuXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+JHtrZXl3b3JkfTwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIGBcbiAgICAgICkuam9pbignJylcbiAgICAgIHRoaXMucmVjb3JkRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgdGhpcy5yZWNvcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykuaW5uZXJIVE1MID0gaHRtbFxuICAgIH1lbHNle1xuICAgICAgdGhpcy5yZWNvcmRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG4gIH1cblxuICByZWNvcmQoa2V5d29yZCl7XG4gICAgbGV0IGtleXdvcmRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlYXJjaF9oaXN0b3J5Jyk7XG4gICAgaWYgKGtleXdvcmRzKSB7XG4gICAgICBpZiAoa2V5d29yZHMuc2VhcmNoKGtleXdvcmQpID4gMCkge1xuICAgICAgICBsZXQgcGF0dGVybiA9IGAke2tleXdvcmR9LD9gXG4gICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgY29uc29sZS5sb2cocmVnZXgpXG4gICAgICAgIGtleXdvcmRzID0ga2V5d29yZHMucmVwbGFjZShyZWdleCwgJycpXG4gICAgICAgIGtleXdvcmRzID0ga2V5d29yZCArICcsJyArIGtleXdvcmRzXG4gICAgICAgIGtleXdvcmRzID0ga2V5d29yZHMucmVwbGFjZSgvLFxccyokLywgJycpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWFyY2hfaGlzdG9yeScsIGtleXdvcmRzKVxuICAgICAgfWVsc2V7XG4gICAgICAgIGtleXdvcmRzID0ga2V5d29yZCArICcsJyArIGtleXdvcmRzXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWFyY2hfaGlzdG9yeScsIGtleXdvcmRzKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VhcmNoX2hpc3RvcnknLCBrZXl3b3JkKVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyUmVjb3JkKCl7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3NlYXJjaF9oaXN0b3J5JylcbiAgICB0aGlzLnJlbmRlclJlY29yZHMoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VhcmNoLmpzIiwiaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vcHJvZ3Jlc3NfYmFyJ1xuaW1wb3J0IEx5cmljc1BsYXllciBmcm9tICcuL2x5cmljc19wbGF5ZXInXG5pbXBvcnQgeyBzb25nVXJsLCBseXJpY3NVcmwsIGFsYnVtQ292ZXJVcmwgfSBmcm9tICcuL2hlbHBlcnMnXG5cbmNsYXNzIE11c2ljUGxheWVyIHtcbiAgY29uc3RydWN0b3IoZWwpe1xuICAgIHRoaXMuZWwgPSBlbFxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzKVxuICAgIHRoaXMuYXVkaW8gPSB0aGlzLmNyZWF0ZUF1ZGlvKClcbiAgICB0aGlzLmx5cmljcyA9IG5ldyBMeXJpY3NQbGF5ZXIodGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWx5cmljcycpLCB0aGlzLmF1ZGlvKVxuICAgIHRoaXMucHJvZ3Jlc3MgPSBuZXcgUHJvZ3Jlc3NCYXIodGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MnKSlcbiAgICB0aGlzLmZldGNoaW5nID0gZmFsc2VcbiAgfVxuXG4gIGNyZWF0ZUF1ZGlvKCkge1xuICAgIGxldCBhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJylcbiAgICBhdWRpby5pZCA9IGBwbGF5ZXItJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApfS0keytuZXcgRGF0ZSgpfWBcbiAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcbiAgICAgIHRoaXMuYXVkaW8ucGxheSgpXG4gICAgICB0aGlzLmx5cmljcy5yZXN0YXJ0KClcbiAgICAgIHRoaXMucHJvZ3Jlc3MucmVzdGFydCgpXG4gICAgfSlcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGF1ZGlvKVxuICAgIHJldHVybiBhdWRpb1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0XG4gICAgc3dpdGNoKHRydWUpIHtcbiAgICAgIGNhc2UgdGFyZ2V0Lm1hdGNoZXMoJy5pY29uLXBsYXknKTpcbiAgICAgICAgdGhpcy5vblBsYXkoZXZlbnQpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIHRhcmdldC5tYXRjaGVzKCcuaWNvbi1wYXVzZScpOlxuICAgICAgICB0aGlzLm9uUGF1c2UoZXZlbnQpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIHRhcmdldC5tYXRjaGVzKCcuaWNvbi1saXN0Jyk6XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgb25QbGF5KGV2ZW50KSB7XG4gICAgaWYodGhpcy5mZXRjaGluZykgcmV0dXJuXG4gICAgdGhpcy5hdWRpby5wbGF5KClcbiAgICB0aGlzLmx5cmljcy5zdGFydCgpXG4gICAgdGhpcy5wcm9ncmVzcy5zdGFydCgpXG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2ljb24tcGF1c2UnKVxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdpY29uLXBsYXknKVxuICB9XG5cbiAgb25QYXVzZShldmVudCkge1xuICAgIHRoaXMuYXVkaW8ucGF1c2UoKVxuICAgIHRoaXMubHlyaWNzLnBhdXNlKClcbiAgICB0aGlzLnByb2dyZXNzLnBhdXNlKClcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaWNvbi1wbGF5JylcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaWNvbi1wYXVzZScpXG4gIH1cblxuICBwbGF5KG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghb3B0aW9ucykgcmV0dXJuXG5cbiAgICB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5zb25nLW5hbWUnKS5pbm5lclRleHQgPSBvcHRpb25zLnNvbmduYW1lXG4gICAgdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcuc29uZy1hcnRpc3QnKS5pbm5lclRleHQgPSBvcHRpb25zLmFydGlzdFxuICAgIHRoaXMucHJvZ3Jlc3MucmVzZXQob3B0aW9ucy5kdXJhdGlvbilcblxuICAgIGxldCBjb3ZlclVybCA9IGFsYnVtQ292ZXJVcmwob3B0aW9ucy5hbGJ1bW1pZClcbiAgICB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5hbGJ1bS1jb3ZlcicpLnNyYyA9IGNvdmVyVXJsXG4gICAgdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJhY2tncm91bmQnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Y292ZXJVcmx9KWBcblxuICAgIGlmKG9wdGlvbnMuc29uZ2lkKSB7XG4gICAgICBpZiAodGhpcy5zb25naWQgIT09IG9wdGlvbnMuc29uZ2lkKSB7XG4gICAgICAgIHRoaXMuZWwucXVlcnlTZWxlY3RvcignLmljb24tYWN0aW9uJykuY2xhc3NOYW1lID0gJ2ljb24tYWN0aW9uIGljb24tcGxheSdcbiAgICAgIH1cblxuICAgICAgdGhpcy5zb25naWQgPSBvcHRpb25zLnNvbmdpZFxuICAgICAgdGhpcy5hdWRpby5zcmMgPSBzb25nVXJsKHRoaXMuc29uZ2lkKVxuICAgICAgdGhpcy5mZXRjaGluZyA9IHRydWVcbiAgICAgIGZldGNoKGx5cmljc1VybCh0aGlzLnNvbmdpZCkpXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihqc29uID0+IGpzb24ubHlyaWMpXG4gICAgICAgIC50aGVuKHRleHQgPT4gdGhpcy5seXJpY3MucmVzZXQodGV4dCkpXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7fSlcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5mZXRjaGluZyA9IGZhbHNlKVxuICAgIH1cblxuICAgIHRoaXMuc2hvdygpXG4gIH1cblxuICBzaG93KCkge1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnc2hvdycpXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdub3Njcm9sbCcpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub3Njcm9sbCcpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVzaWNQbGF5ZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL211c2ljX3BsYXllci5qcyIsImNsYXNzIFByb2dyZXNzQmFyIHtcbiAgY29uc3RydWN0b3IoZWwsIGR1cmF0aW9uLCBzdGFydCl7XG4gICAgdGhpcy5lbCA9IGVsXG4gICAgdGhpcy5lbGFwc2VkID0gMFxuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbiB8fCAwXG4gICAgdGhpcy5wcm9ncmVzcyA9IDBcbiAgICB0aGlzLnJlbmRlcigpXG4gICAgdGhpcy5wcm9ncmVzc0VsZW1lbnQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcy1iYXItcHJvZ3Jlc3MnKVxuICAgIHRoaXMuZWxhcHNlZEVsZW1lbnQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcy1lbGFwc2VkJylcbiAgICB0aGlzLmR1cmF0aW9uRWxlbWVudCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWR1cmF0aW9uJylcbiAgICB0aGlzLmVsYXBzZWRFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuZm9ybWF0VGltZSh0aGlzLmVsYXBzZWQpXG4gICAgdGhpcy5kdXJhdGlvbkVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5mb3JtYXRUaW1lKHRoaXMuZWxhcHNlZClcbiAgICBpZihzdGFydCkgdGhpcy5zdGFydCgpXG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnBhdXNlKClcbiAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCA1MClcbiAgfVxuXG4gIHBhdXNlKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuZWxhcHNlZCArPSAwLjA1XG4gICAgaWYodGhpcy5lbGFwc2VkID49IHRoaXMuZHVyYXRpb24pIHRoaXMucmVzZXQoKVxuICAgIHRoaXMucHJvZ3Jlc3MgPSB0aGlzLmVsYXBzZWQgLyB0aGlzLmR1cmF0aW9uXG4gICAgdGhpcy5wcm9ncmVzc0VsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3RoaXMucHJvZ3Jlc3MgKiAxMDAgLSAxMDB9JSlgXG4gICAgdGhpcy5lbGFwc2VkRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLmZvcm1hdFRpbWUodGhpcy5lbGFwc2VkKVxuICB9XG5cbiAgcmVzZXQoZHVyYXRpb24pIHtcbiAgICB0aGlzLnBhdXNlKClcbiAgICB0aGlzLmVsYXBzZWQgPSAwXG4gICAgdGhpcy5wcm9ncmVzcyA9IDBcbiAgICB0aGlzLnByb2dyZXNzRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKC0xMDAlKWBcbiAgICB0aGlzLmVsYXBzZWRFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuZm9ybWF0VGltZSh0aGlzLmVsYXBzZWQpXG4gICAgaWYoZHVyYXRpb24pIHtcbiAgICAgIHRoaXMuZHVyYXRpb24gPSArZHVyYXRpb25cbiAgICAgIHRoaXMuZHVyYXRpb25FbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuZm9ybWF0VGltZSh0aGlzLmR1cmF0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHJlc3RhcnQoKSB7XG4gICAgdGhpcy5yZXNldCgpXG4gICAgdGhpcy5zdGFydCgpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtdGltZSBwcm9ncmVzcy1lbGFwc2VkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyLXByb2dyZXNzXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLXRpbWUgcHJvZ3Jlc3MtZHVyYXRpb25cIj48L2Rpdj5cbiAgICBgXG4gIH1cblxuICBmb3JtYXRUaW1lKHNlY29uZHMpIHtcbiAgICBsZXQgbWlucyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKVxuICAgIGxldCBzZWNzID0gTWF0aC5mbG9vcihzZWNvbmRzICUgNjApXG4gICAgaWYgKG1pbnMgPCAxMCkgbWlucyA9ICcwJyArIG1pbnNcbiAgICBpZiAoc2VjcyA8IDEwKSBzZWNzID0gJzAnICsgc2Vjc1xuICAgIHJldHVybiBgJHttaW5zfToke3NlY3N9YFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9wcm9ncmVzc19iYXIuanMiLCJjbGFzcyBMeXJpY3NQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihlbCwgYXVkaW8pIHtcbiAgICB0aGlzLmVsID0gZWxcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwicGxheWVyLWx5cmljcy1saW5lc1wiPjwvZGl2PmBcbiAgICB0aGlzLmxpbmVzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWx5cmljcy1saW5lcycpXG4gICAgdGhpcy5hdWRpbyA9IGF1ZGlvXG4gICAgdGhpcy50ZXh0ID0gJydcbiAgICB0aGlzLmluZGV4ID0gMFxuICAgIHRoaXMubHlyaWNzID0gW11cbiAgICB0aGlzLmVsYXBzZWQgPSAwXG4gICAgdGhpcy5yZXNldCh0aGlzLnRleHQpXG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnBhdXNlKClcbiAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAxMDAwKVxuICB9XG5cbiAgcGF1c2UoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5lbGFwc2VkID0gTWF0aC5yb3VuZCh0aGlzLmF1ZGlvID8gdGhpcy5hdWRpby5jdXJyZW50VGltZSA6IHRoaXMuZWxhcHNlZCArIDEpXG4gICAgaWYgKHRoaXMuaW5kZXggPT09IHRoaXMubHlyaWNzLmxlbmd0aCAtIDEpIHJldHVyblxuICAgIGZvciAobGV0IGkgPSB0aGlzLmluZGV4ICsgMTsgaSA8IHRoaXMubHlyaWNzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2Vjb25kcyA9IHRoaXMuZ2V0U2Vjb25kcyh0aGlzLmx5cmljc1tpXSlcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5lbGFwc2VkID09PSBzZWNvbmRzICYmXG4gICAgICAgICghdGhpcy5seXJpY3NbaSArIDFdIHx8IHRoaXMuZWxhcHNlZCA8IHRoaXMuZ2V0U2Vjb25kcyh0aGlzLmx5cmljc1tpICsgMV0pKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMubGluZXMuY2hpbGRyZW5bdGhpcy5pbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgdGhpcy5saW5lcy5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICB0aGlzLmluZGV4ID0gMVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5pbmRleCA+IDIpIHtcbiAgICAgIGxldCB5ID0gLSh0aGlzLmluZGV4IC0gMikgKiB0aGlzLkxJTkVfSEVJR0hUXG4gICAgICB0aGlzLiRsaW5lcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3l9cHgpYFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgaHRtbCA9IHRoaXMubHlyaWNzLm1hcChsaW5lID0+IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXItbHlyaWNzLWxpbmVcIj4ke2xpbmUuc2xpY2UoMTApfTwvZGl2PlxuICAgIGApLmpvaW4oJycpXG4gICAgdGhpcy5saW5lcy5pbm5lckhUTUwgPSBodG1sXG4gIH1cblxuICByZXNldCh0ZXh0KSB7XG4gICAgdGhpcy5wYXVzZSgpXG4gICAgdGhpcy5pbmRleCA9IDBcbiAgICB0aGlzLmVsYXBzZWQgPSAwXG5cbiAgICB0aGlzLmxpbmVzLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKDApYFxuICAgIGxldCBhY3RpdmUgPSB0aGlzLmxpbmVzLnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKVxuICAgIGlmKGFjdGl2ZSkge1xuICAgICAgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgaWYodGV4dCkge1xuICAgICAgdGhpcy50ZXh0ID0gdGhpcy5mb3JtYXRUZXh0KHRleHQpIHx8ICcnXG4gICAgICB0aGlzLmx5cmljcyA9IHRoaXMudGV4dC5tYXRjaCgvXlxcW1xcZHsyfTpcXGR7Mn0uXFxkezJ9XFxdKC4rKS9nbSkgfHwgW11cbiAgICAgIGlmICh0aGlzLmx5cmljcy5sZW5ndGgpIHRoaXMucmVuZGVyKClcbiAgICB9XG5cbiAgICBpZih0aGlzLmx5cmljcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGluZXMuY2hpbGRyZW5bdGhpcy5pbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG4gIH1cblxuICByZXN0YXJ0KCkge1xuICAgIHRoaXMucmVzZXQoKVxuICAgIHRoaXMuc3RhcnQoKVxuICB9XG5cbiAgZ2V0U2Vjb25kcyhsaW5lKSB7XG4gICAgcmV0dXJuICtsaW5lLnJlcGxhY2UoL15cXFsoXFxkezJ9KTooXFxkezJ9KS4qLywgKG1hdGNoLCBwMSwgcDIpID0+IDYwICogKCtwMSkgKyAoK3AyKSlcbiAgfVxuXG4gIGZvcm1hdFRleHQodGV4dCkge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdi5pbm5lckhUTUwgPSB0ZXh0XG4gICAgcmV0dXJuIGRpdi5pbm5lckhUTUxcbiAgfVxufVxuXG5MeXJpY3NQbGF5ZXIucHJvdG90eXBlLkxJTkVfSEVJR0hUID0gNDJcblxuZXhwb3J0IGRlZmF1bHQgTHlyaWNzUGxheWVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9seXJpY3NfcGxheWVyLmpzIiwiaW1wb3J0IHsgTFlSSUNTX1VSTCwgU0VBUkNIX1VSTCB9IGZyb20gJy4vY29uc3RhbnRzLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gc29uZ1VybChpZCkge1xuICByZXR1cm4gYGh0dHA6Ly93cy5zdHJlYW0ucXFtdXNpYy5xcS5jb20vJHtpZH0ubTRhP2Zyb210YWc9NDZgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBseXJpY3NVcmwoc29uZ2lkKSB7XG4gIHJldHVybiBgJHtMWVJJQ1NfVVJMfT9pZD0ke3NvbmdpZH1gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGJ1bUNvdmVyVXJsKGlkKSB7XG4gIHJldHVybiBgaHR0cHM6Ly95Lmd0aW1nLmNuL211c2ljL3Bob3RvX25ldy9UMDAyUjE1MHgxNTBNMDAwJHtpZH0uanBnYFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoVXJsKGtleXdvcmQsIHBhZ2UgPSAxKSB7XG4gIHJldHVybiBgJHtTRUFSQ0hfVVJMfT9rZXl3b3JkPSR7a2V5d29yZH0mcGFnZT0ke3BhZ2V9YFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVscGVycy5qcyJdLCJzb3VyY2VSb290IjoiIn0=