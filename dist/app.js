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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slider = __webpack_require__(1);

var _slider2 = _interopRequireDefault(_slider);

var _navbar = __webpack_require__(2);

var _navbar2 = _interopRequireDefault(_navbar);

var _lazyload = __webpack_require__(3);

var _lazyload2 = _interopRequireDefault(_lazyload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 8));
//ES6 import

//CommonJS
// const Slider = require('./components/slider')


(function () {

  //get Data
  fetch('https://music-api-oiwxkoneso.now.sh').then(function (response) {
    return response.json();
  }).then(render);

  //get TopList
  fetch('../json/rank.json').then(function (response) {
    return response.json();
  }).then(rankList);

  function render(json) {
    (0, _navbar2.default)();
    var slides = json.data.slider.map(function (slide) {
      return {
        link: slide.linkUrl,
        image: slide.picUrl
      };
    });
    new _slider2.default('slider', slides);
    renderRadios(json.data.radioList);
    renderSongLists(json.data.songList);
    (0, _lazyload2.default)(document.querySelectorAll('.lazyload'));
  }

  function rankList(json) {
    renderRankList(json.data.topList);
    (0, _lazyload2.default)(document.querySelectorAll('.lazyload'));
  }

  //radios
  function renderRadios(radios) {
    document.getElementById('radios-group').innerHTML = radios.map(function (radio) {
      return '\n        <li class="list-item">\n          <a href="#" class="list-main">\n            <div class="list-media">\n            <img class="lazyload" src="../imgs/default_pic.jpg" data-src="' + radio.picUrl + '" alt="#">\n            <span class="icon icon-play"></span>\n            </div>\n            <div class="list-info"><h3>' + radio.Ftitle + '</h3></div>\n          </a>\n        </li>\n      ';
    }).join('');
  }

  //songlists
  function renderSongLists(songlists) {
    document.getElementById('songlists-group').innerHTML = songlists.map(function (songlist) {
      return '\n        <li class="list-item">\n          <a href="#" class="list-main">\n            <div class="list-media">\n            <img class="lazyload" src="../imgs/default_pic.jpg" data-src="' + songlist.picUrl + '" alt="#">\n            <span class="icon icon-play"></span>\n            </div>\n            <div class="list-info"><h3>' + songlist.Ftitle + '</h3></div>\n          </a>\n        </li>\n      ';
    }).join('');
  }

  function renderRankList(topLists) {
    document.getElementById('rank-list').innerHTML = topLists.map(function (topList) {
      return '\n        <li class="topic_item" data-id="4" data-type="0">\n        <div class="topic_main">\n          <a href="#" class="topic_media">\n              <img class="lazyload" data-src="' + topList.picUrl + '" src="../imgs/default_pic.jpg">\n              <span class="listen_count"><i class="icon icon_listen"></i>' + (topList.listenCount / 10000).toFixed(1) + '\u4E07</span>\n          </a>\n          <div class="topic_info">\n              <div class="topic_cont">\n                  <h3 class="topic_tit">' + topList.topTitle + '</h3>\n                  ' + topList.songList.map(function (list, idx) {
        return '<p>' + (idx + 1) + '<span class="text_name">' + list.songname + '</span>-' + list.singername + '</p>';
      }).join('') + '\n              </div>\n              <i class="topic_arrow"></i>\n          </div>\n        </div>\n      </li>\n        ';
    }).join('');
  }
})();

/***/ }),
/* 1 */
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
        return '\n        <div class="ui-slider-item">\n          <a href="' + slide.link + '">\n            <img src="' + slide.image + '" alt="slide-img">\n          </a>\n        </div>\n      ';
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timers = __webpack_require__(4);

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
/* 4 */
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
__webpack_require__(5);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 5 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(7)))

/***/ }),
/* 6 */
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
/* 7 */
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODk2ZDdlODRlZGVjMDU5NmJkODciLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF6eWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOlsiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVuZGVyIiwicmFua0xpc3QiLCJzbGlkZXMiLCJkYXRhIiwic2xpZGVyIiwibWFwIiwibGluayIsInNsaWRlIiwibGlua1VybCIsImltYWdlIiwicGljVXJsIiwicmVuZGVyUmFkaW9zIiwicmFkaW9MaXN0IiwicmVuZGVyU29uZ0xpc3RzIiwic29uZ0xpc3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW5kZXJSYW5rTGlzdCIsInRvcExpc3QiLCJyYWRpb3MiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInJhZGlvIiwiRnRpdGxlIiwiam9pbiIsInNvbmdsaXN0cyIsInNvbmdsaXN0IiwidG9wTGlzdHMiLCJsaXN0ZW5Db3VudCIsInRvRml4ZWQiLCJ0b3BUaXRsZSIsImxpc3QiLCJpZHgiLCJzb25nbmFtZSIsInNpbmdlcm5hbWUiLCJTbGlkZXIiLCJlbCIsImludGVydmFsIiwiaW5kZXgiLCJwbGF5IiwiZ3JvdXAiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInN0eWxlIiwid2lkdGgiLCJsZW5ndGgiLCJkb3RzSFRNTCIsImRvdCIsInNldEludGVydmFsIiwibmV4dCIsImJpbmQiLCJ0cmFuc2Zvcm0iLCJkb3RDbGFzcyIsInBvc2l0aW9uIiwiZG90cyIsImxhc3RFbGVtZW50Q2hpbGQiLCJjaGlsZHJlbiIsIkFycmF5IiwicHJvdG90eXBlIiwiY2FsbCIsImNoaWxkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY2xhc3NOYW1lIiwibmF2YmFyX2NsaWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwiZGF0YXNldCIsInJvbGUiLCJmb3JFYWNoIiwicGFyZW50RWxlbWVudCIsInRhYiIsImFkZCIsImNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwidmlldyIsImRpc3BsYXkiLCJsYXp5TG9hZCIsImltZ3MiLCJmcm9tIiwid2luZG93Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImludGVyc2VjdGlvblJhdGlvIiwibG9hZEltYWdlIiwidW5vYnNlcnZlIiwidGhyZXNob2xkIiwib2JzZXJ2ZSIsImltZyIsIm9uc2Nyb2xsIiwidGhyb3R0bGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmlsdGVyIiwiY29udGFpbnMiLCJpblZpZXdQb3J0IiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwidmlld1BvcnRIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJ2aWV3UG9ydFdpZHRoIiwiY2xpZW50V2lkdGgiLCJjYWxsYmFjayIsIkltYWdlIiwic3JjIiwib25sb2FkIiwiZnVuYyIsIndhaXQiLCJwcmV2IiwidGltZXIiLCJmbiIsImN1cnIiLCJEYXRlIiwibm93IiwiZGlmZiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQSwwQ0FBMEMsc0JBQXNCLEVBQUU7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O0FDekxEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7O0FDcEJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpIHtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdLCByZXN1bHQ7XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihjaHVua0lkcywgbW9yZU1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdHMgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MTogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgPT09IDApIHtcbiBcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkgeyByZXNvbHZlKCk7IH0pO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZENodW5rRGF0YVsyXTtcbiBcdFx0fVxuXG4gXHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0fSk7XG4gXHRcdGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2U7XG5cbiBcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuIFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDAwMDtcblxuIFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0fVxuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5qc1wiO1xuIFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZSwgMTIwMDAwKTtcbiBcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0ZnVuY3Rpb24gb25TY3JpcHRDb21wbGV0ZSgpIHtcbiBcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRjaHVua1sxXShuZXcgRXJyb3IoJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC4nKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cbiBcdFx0cmV0dXJuIHByb21pc2U7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0XCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDg5NmQ3ZTg0ZWRlYzA1OTZiZDg3IiwiaW1wb3J0KCcuLi9zYXNzL2FwcC5zY3NzJylcbi8vRVM2IGltcG9ydFxuaW1wb3J0IFNsaWRlciBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVyJ1xuaW1wb3J0IE5hdkJhciBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyJ1xuaW1wb3J0IGxhenlsb2FkIGZyb20gJy4vY29tcG9uZW50cy9sYXp5bG9hZCdcbi8vQ29tbW9uSlNcbi8vIGNvbnN0IFNsaWRlciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9zbGlkZXInKVxuXG5cbihmdW5jdGlvbigpe1xuXG4gIC8vZ2V0IERhdGFcbiAgZmV0Y2goJ2h0dHBzOi8vbXVzaWMtYXBpLW9pd3hrb25lc28ubm93LnNoJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4ocmVuZGVyKVxuXG4gIC8vZ2V0IFRvcExpc3RcbiAgZmV0Y2goJy4uL2pzb24vcmFuay5qc29uJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4ocmFua0xpc3QpXG5cbiAgZnVuY3Rpb24gcmVuZGVyKGpzb24pe1xuICAgIE5hdkJhcigpXG4gICAgbGV0IHNsaWRlcyA9IGpzb24uZGF0YS5zbGlkZXIubWFwKHNsaWRlID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpbmsgOiBzbGlkZS5saW5rVXJsLFxuICAgICAgICBpbWFnZTogc2xpZGUucGljVXJsXG4gICAgICB9XG4gICAgfSlcbiAgICBuZXcgU2xpZGVyKCdzbGlkZXInLCBzbGlkZXMpXG4gICAgcmVuZGVyUmFkaW9zKGpzb24uZGF0YS5yYWRpb0xpc3QpXG4gICAgcmVuZGVyU29uZ0xpc3RzKGpzb24uZGF0YS5zb25nTGlzdClcbiAgICBsYXp5bG9hZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGF6eWxvYWQnKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJhbmtMaXN0KGpzb24pe1xuICAgIHJlbmRlclJhbmtMaXN0KGpzb24uZGF0YS50b3BMaXN0KVxuICAgIGxhenlsb2FkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYXp5bG9hZCcpKVxuICB9XG5cbiAgLy9yYWRpb3NcbiAgZnVuY3Rpb24gcmVuZGVyUmFkaW9zKHJhZGlvcykge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWRpb3MtZ3JvdXAnKS5pbm5lckhUTUwgPSByYWRpb3MubWFwKHJhZGlvID0+IHtcbiAgICAgIHJldHVybiBgXG4gICAgICAgIDxsaSBjbGFzcz1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJsaXN0LW1haW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LW1lZGlhXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwibGF6eWxvYWRcIiBzcmM9XCIuLi9pbWdzL2RlZmF1bHRfcGljLmpwZ1wiIGRhdGEtc3JjPVwiJHtyYWRpby5waWNVcmx9XCIgYWx0PVwiI1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGljb24tcGxheVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtaW5mb1wiPjxoMz4ke3JhZGlvLkZ0aXRsZX08L2gzPjwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIGBcbiAgICB9KS5qb2luKCcnKVxuICB9XG5cbiAgLy9zb25nbGlzdHNcbiAgZnVuY3Rpb24gcmVuZGVyU29uZ0xpc3RzKHNvbmdsaXN0cyl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvbmdsaXN0cy1ncm91cCcpLmlubmVySFRNTCA9IHNvbmdsaXN0cy5tYXAoc29uZ2xpc3QgPT4ge1xuICAgICAgcmV0dXJuIGBcbiAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImxpc3QtbWFpblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtbWVkaWFcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJsYXp5bG9hZFwiIHNyYz1cIi4uL2ltZ3MvZGVmYXVsdF9waWMuanBnXCIgZGF0YS1zcmM9XCIke3NvbmdsaXN0LnBpY1VybH1cIiBhbHQ9XCIjXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaWNvbi1wbGF5XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1pbmZvXCI+PGgzPiR7c29uZ2xpc3QuRnRpdGxlfTwvaDM+PC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgYFxuICAgIH0pLmpvaW4oJycpXG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclJhbmtMaXN0KHRvcExpc3RzKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuay1saXN0JykuaW5uZXJIVE1MID0gdG9wTGlzdHMubWFwKHRvcExpc3QgPT4ge1xuICAgICAgcmV0dXJuIGBcbiAgICAgICAgPGxpIGNsYXNzPVwidG9waWNfaXRlbVwiIGRhdGEtaWQ9XCI0XCIgZGF0YS10eXBlPVwiMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9waWNfbWFpblwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0b3BpY19tZWRpYVwiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibGF6eWxvYWRcIiBkYXRhLXNyYz1cIiR7dG9wTGlzdC5waWNVcmx9XCIgc3JjPVwiLi4vaW1ncy9kZWZhdWx0X3BpYy5qcGdcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0ZW5fY291bnRcIj48aSBjbGFzcz1cImljb24gaWNvbl9saXN0ZW5cIj48L2k+JHsodG9wTGlzdC5saXN0ZW5Db3VudCAvIDEwMDAwKS50b0ZpeGVkKDEpfeS4hzwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvcGljX2luZm9cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcGljX2NvbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRvcGljX3RpdFwiPiR7dG9wTGlzdC50b3BUaXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgJHt0b3BMaXN0LnNvbmdMaXN0Lm1hcCgobGlzdCwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPHA+JHtpZHgrMX08c3BhbiBjbGFzcz1cInRleHRfbmFtZVwiPiR7bGlzdC5zb25nbmFtZX08L3NwYW4+LSR7bGlzdC5zaW5nZXJuYW1lfTwvcD5gXG4gICAgICAgICAgICAgICAgICB9KS5qb2luKCcnKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwidG9waWNfYXJyb3dcIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICAgICAgYFxuICAgIH0pLmpvaW4oJycpXG4gIH1cblxuXG59KSgpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwLmpzIiwiY2xhc3MgU2xpZGVyIHtcbiAgY29uc3RydWN0b3IoZWwsIHNsaWRlcywgaW50ZXJ2YWw9MzAwMCl7XG4gICAgdHlwZW9mIGVsID09PSAnc3RyaW5nJyA/IHRoaXMuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbCk6IGVsXG4gICAgdGhpcy5zbGlkZXMgPSBzbGlkZXNcbiAgICB0aGlzLmluZGV4ID0gMFxuICAgIHRoaXMuaW50ZXJ2YWwgPSBpbnRlcnZhbFxuICAgIHRoaXMucmVuZGVyKClcbiAgICB0aGlzLnBsYXkoKVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInVpLXNsaWRlci1ncm91cFwiPjwvZGl2PmBcbiAgICBsZXQgZ3JvdXAgPSB0aGlzLmVsLmZpcnN0RWxlbWVudENoaWxkXG4gICAgLy/ojrflj5Zncm91cFxuICAgIGdyb3VwLnN0eWxlLndpZHRoID0gYCR7dGhpcy5zbGlkZXMubGVuZ3RoICogMTAwfSVgXG4gICAgZ3JvdXAuaW5uZXJIVE1MID0gdGhpcy5zbGlkZXMubWFwKHNsaWRlID0+XG4gICAgICBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1zbGlkZXItaXRlbVwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIke3NsaWRlLmxpbmt9XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7c2xpZGUuaW1hZ2V9XCIgYWx0PVwic2xpZGUtaW1nXCI+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGBcbiAgICApLmpvaW4oJycpXG5cbiAgICBsZXQgZG90c0hUTUwgPVxuICAgIGBcbiAgICAgIDxwIGNsYXNzPVwidWktc2xpZGVyLWRvdHNcIj5cbiAgICAgICAgJHt0aGlzLnNsaWRlcy5tYXAoKGRvdCwgaW5kZXgpPT57XG4gICAgICAgICAgcmV0dXJuIGluZGV4ID09PSAwID8gYDxiIGNsYXNzPVwidWktc3RhdGUtYWN0aXZlXCI+PC9iPmAgOiBgPGIgY2xhc3M9XCJcIj48L2I+YFxuICAgICAgICB9KS5qb2luKCcnKX1cbiAgICAgIDwvcD5cbiAgICBgXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgKz0gZG90c0hUTUxcbiAgfVxuXG4gIHBsYXkoKXtcbiAgICBzZXRJbnRlcnZhbCh0aGlzLm5leHQuYmluZCh0aGlzKSwgdGhpcy5pbnRlcnZhbClcbiAgfVxuXG4gIG5leHQoKXtcbiAgICAvL0ZJWE1FOiDmnIDlkI7kuIDlvKDlubPpobrnmoTov4fluqbliLDnrKzkuIDlvKBcbiAgICBsZXQgZ3JvdXAgPSAgdGhpcy5lbC5maXJzdEVsZW1lbnRDaGlsZFxuICAgIHRoaXMuaW5kZXggKz0gMVxuICAgIC8v5pyA5ZCO5LiA5byg5Zue5Y6f5L2NXG4gICAgaWYodGhpcy5pbmRleCA9PT0gdGhpcy5zbGlkZXMubGVuZ3RoKXtcbiAgICAgIGdyb3VwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoMClgXG4gICAgICB0aGlzLmluZGV4ID0gMFxuICAgICAgdGhpcy5kb3RDbGFzcygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbGV0IHBvc2l0aW9uID0gYC0ke3RoaXMuaW5kZXggLyB0aGlzLnNsaWRlcy5sZW5ndGggKiAxMDB9JWBcbiAgICBncm91cC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7cG9zaXRpb259KWBcblxuICAgIHRoaXMuZG90Q2xhc3MoKVxuICB9XG5cbiAgZG90Q2xhc3MoKXtcbiAgICBsZXQgZG90cyA9IHRoaXMuZWwubGFzdEVsZW1lbnRDaGlsZFxuXG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5lbC5sYXN0RWxlbWVudENoaWxkLmNoaWxkcmVuXG4gICAgQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGNoaWxkcmVuLCBjaGlsZD0+Y2hpbGQuY2xhc3NMaXN0LnJlbW92ZShgdWktc3RhdGUtYWN0aXZlYCkpXG5cbiAgICB0aGlzLmVsLmxhc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW5bdGhpcy5pbmRleF0uY2xhc3NOYW1lID0gYHVpLXN0YXRlLWFjdGl2ZWBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJcbi8vIG1vZHVsZS5leHBvcnRzID0gU2xpZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zbGlkZXIuanMiLCJcbmNvbnN0IG5hdmJhcl9jbGljayA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXRcblxuICAgIGlmICh0YXJnZXQuZGF0YXNldC5yb2xlICE9PSAndGFiJykgcmV0dXJuXG5cbiAgICBbXS5mb3JFYWNoLmNhbGwodGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW4sIHRhYiA9PiB7XG4gICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB9KVxuXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0LmRhdGFzZXQudmlldylcblxuICAgIGlmKGNvbnRlbnQpIHtcbiAgICAgIFtdLmZvckVhY2guY2FsbChjb250ZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgICAgY2hpbGQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgfSlcbiAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmF2YmFyX2NsaWNrXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9uYXZiYXIuanMiLCJpbXBvcnQgeyBjbGVhclRpbWVvdXQsIHNldFRpbWVvdXQgfSBmcm9tIFwidGltZXJzXCI7XG5cbi8vcmVjb21tZW5kIHBhZ2UgbGlzdCBpbWcgbGF6eWxvYWRcbmZ1bmN0aW9uIGxhenlMb2FkKGltZ3Mpe1xuICBpbWdzID0gQXJyYXkuZnJvbShpbWdzKVxuXG4gIC8v5L2/55SoSW50ZXJzZWN0aW9uT2JzZXJ2ZXLlrp7njrDmh5LliqDovb1cbiAgaWYgKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBsb2FkSW1hZ2UoZW50cnkudGFyZ2V0LCAoKSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSwge3RocmVzaG9sZDogMC4wMX0pXG5cbiAgICBpbWdzLmZvckVhY2goaW1nID0+IG9ic2VydmVyLm9ic2VydmUoaW1nKSlcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBvbnNjcm9sbCA9IHRocm90dGxlKCgpID0+IHtcbiAgICAgIGlmIChpbWdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbnNjcm9sbClcbiAgICAgIGltZ3MuZmlsdGVyKGltZyA9PiBpbWcuY2xhc3NMaXN0LmNvbnRhaW5zKCdsYXp5bG9hZCcpKVxuICAgICAgaW1ncy5mb3JFYWNoKGltZyA9PiBpblZpZXdQb3J0KGltZykmJmxvYWRJbWFnZShpbWcpKVxuICAgIH0sIDMwMClcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbnNjcm9sbClcbiAgICAvL+esrOS4gOasoeWKoOi9vVxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnc2Nyb2xsJykpXG4gIH1cblxuICBmdW5jdGlvbiBpblZpZXdQb3J0KGltZyl7XG4gICAgY29uc3Qge3RvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbX0gPSBpbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCB2aWV3UG9ydEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICBjb25zdCB2aWV3UG9ydFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG5cbiAgICByZXR1cm4gKFxuICAgICAgKHRvcCA+IDAgJiYgdG9wIDwgdmlld1BvcnRIZWlnaHQgfHwgYm90dG9tID4gMCAmJiBib3R0b20gPCB2aWV3UG9ydEhlaWdodCkgJiZcbiAgICAgIChsZWZ0ID4gMCAmJiBsZWZ0IDwgdmlld1BvcnRXaWR0aCB8fCByaWdodCA+IDAgJiYgcmlnaHQgPCB2aWV3UG9ydFdpZHRoKVxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWRJbWFnZShpbWcsIGNhbGxiYWNrKXtcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgIGltYWdlLnNyYyA9IGltZy5kYXRhc2V0LnNyY1xuICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbWcuc3JjID0gaW1hZ2Uuc3JjXG4gICAgICBpbWcuY2xhc3NMaXN0LnJlbW92ZSgnbGF6eWxvYWQnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjaygpXG4gIH1cblxuICAvL+S8mOWMlua7muWKqOS6i+S7tuebkeWQrFxuICBmdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0KXtcbiAgICBsZXQgcHJldiwgdGltZXJcbiAgICByZXR1cm4gZnVuY3Rpb24gZm4oKXtcbiAgICAgIGxldCBjdXJyICA9IERhdGUubm93KClcbiAgICAgIGxldCBkaWZmID0gY3VyciAtIHByZXZcbiAgICAgIGlmKCFwcmV2IHx8IGRpZmYgPj0gd2FpdCkge1xuICAgICAgICBmdW5jKClcbiAgICAgICAgcHJldiA9IGN1cnJcbiAgICAgIH0gZWxzZSBpZiAoZGlmZiA8IHdhaXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZm4sIHdhaXQgLSBkaWZmKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsYXp5TG9hZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF6eWxvYWQuanMiLCJ2YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHdpbmRvdywgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG5leHBvcnRzLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=