webpackJsonp([1],{242:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),p=n(8),f=n(243),s=r(f),y=n(126),h=function(e){function t(e){o(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=function(){n.props.router.push("/gallery/upload")},n.state={authenticated:n.props.auth.authenticated},n}return a(t,e),l(t,null,[{key:"store",value:function(e){return{auth:e.auth,gallery:e.gallery}}}]),l(t,[{key:"componentWillMount",value:function(){var e=this.props.getImages;e()}},{key:"render",value:function(){var e=this.state.authenticated;if(!this.props.gallery)return null;var t=this.props,n=t.children,r=t.gallery;return c.default.createElement("div",null,e?c.default.createElement("button",{onClick:this.handleClick},"업로드"):null,n||c.default.createElement(s.default,{gallery:r}))}}]),t}(i.Component);h.propTypes={children:i.PropTypes.object},e.exports=(0,p.connect)(h.store,{getImages:y.getImages})(h)},243:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),p=function(e){function t(){var e,n,r,a;o(this,t);for(var l=arguments.length,i=Array(l),p=0;p<l;p++)i[p]=arguments[p];return n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.onRender=function(){var e=r.props.gallery;return e.map(function(e){return c.default.createElement("div",{key:e.id},e.title,e.thumbnail?c.default.createElement("img",{src:"/uploads/"+e.thumbnail,role:"presentation"}):null)})},a=n,u(r,a)}return a(t,e),l(t,[{key:"render",value:function(){return this.props.gallery?c.default.createElement("div",null,this.onRender()):null}}]),t}(i.Component);p.propTypes={gallery:i.PropTypes.array},e.exports=p}});
//# sourceMappingURL=1.b9c96a37.chunk.js.map