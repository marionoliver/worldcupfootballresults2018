module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(o);function u(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={matches:[],numMatch:0,nbMatches:0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://worldcup.sfg.io/matches").then(function(e){return e.json()}).then(function(t){e.setState({matches:t}),e.setState({nbMatches:e.state.matches.length})}),this.timer=setInterval(function(){e.props.animate().then(function(){return e.setState({numMatch:e.state.numMatch+1})})},2e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){if(0===this.state.matches.length)return a.default.createElement("div",null);var e=this.state.matches[this.state.numMatch],t=a.default.createElement("h4",{style:{textAlign:"center"}},e.home_team_country," ",e.home_team.goals," - ",e.away_team.goals," ",e.away_team_country),n=e.home_team_events.filter(function(e){return"goal"==e.type_of_event||"goal-penalty"==e.type_of_event}),r=e.away_team_events.filter(function(e){return"goal-own"===e.type_of_event}),l=[].concat(u(n),u(r));l=l.map(function(e){return a.default.createElement("div",null,e.player," ",e.time)});var i=e.away_team_events.filter(function(e){return"goal"===e.type_of_event||"goal-penalty"===e.type_of_event}),c=e.home_team_events.filter(function(e){return"goal-own"===e.type_of_event}),f=[].concat(u(i),u(c));f=f.map(function(e){return a.default.createElement("div",null,e.player," ",e.time)});var s=a.default.createElement(o.Fragment,null,a.default.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.default.createElement("div",{style:{textAlign:"left"}},l),a.default.createElement("div",{style:{textAlign:"right"}},f)));return a.default.createElement("div",{style:{alignItems:"center",justifyContent:"center",height:"100%",backgroundColor:"pink"}},t,s)}}]),t}();t.default=l}]);