!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1),n(2),n(3),n(4),n(5)},function(t,e){var n;n=function(){function t(t){var e=this;this.timer=0,this.timerRefreshRate=60,this.timerDuration=5e3,this.section=t,this.carouselContent=this.section.getElementsByClassName("carousel-content")[0],this.controlsIndex=this.section.getElementsByClassName("carousel-controls-index")[0],this.controlsHandles=this.section.getElementsByClassName("carousel-controls-handle"),this.controlsHandleTimers=this.section.getElementsByClassName("carousel-controls-handle-timer"),this.carouselContent.addEventListener("click",(function(){e.increaseIndex()})),this.initElementStates(),this.initEventListeners(),this.setIndex(0),this.timerTick()}return t.prototype.timerTick=function(){var t=this;this.timer+=1e3/this.timerRefreshRate,this.timer>this.timerDuration&&(this.timer=0,this.increaseIndex()),this.updateActiveControlHandle(),setTimeout((function(){t.timerTick()}),1e3/this.timerRefreshRate)},t.prototype.initElementStates=function(){[].forEach.call(this.controlsHandleTimers,(function(t){return t.style.width="0%"}))},t.prototype.initEventListeners=function(){var t=this;[].forEach.call(this.controlsHandles,(function(e,n){e.addEventListener("click",(function(){t.setIndex(n)}))}))},t.prototype.increaseIndex=function(){void 0!==this.currentIndex&&(this.currentIndex===this.controlsHandleTimers.length-1?this.setIndex(0):this.setIndex(this.currentIndex+1))},t.prototype.setIndex=function(t){this.timer=0,this.updateControlsHandles(this.currentIndex,t),this.currentIndex=t,this.setControlsIndex(this.currentIndex),this.updateCarouselContent()},t.prototype.setControlsIndex=function(t){this.controlsIndex&&(this.controlsIndex.textContent="0"+(t+1))},t.prototype.updateActiveControlHandle=function(){void 0!==this.currentIndex&&(this.controlsHandleTimers[this.currentIndex].style.width=100/this.timerDuration*this.timer+"%")},t.prototype.updateControlsHandles=function(t,e){void 0!==t&&(this.controlsHandleTimers[t].style.width="0%"),void 0!==e&&(this.controlsHandleTimers[e].style.width="100%")},t.prototype.updateCarouselContent=function(){this.carouselContent&&(this.carouselContent.style.marginLeft="-"+this.currentIndex+"00%")},t}(),window.Carousel=n,addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("carousel-section");t&&new n(t);for(var e=document.querySelectorAll('[data-component="carousel"]'),o=0;o<e.length;++o)new n(e[o]);var i=document.querySelectorAll("[data-icon=arrow-right-white]");[].forEach.call(i,(function(t){t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16"><path fill="currentColor" fill-rule="nonzero" d="M1.083 9.51l12.86-.006-4.052 4.061a1.054 1.054 0 0 0-.308.749c0 .282.11.549.308.747l.63.631c.198.198.463.308.744.308.282 0 .547-.109.745-.307l6.946-6.946c.2-.199.308-.464.307-.746.001-.284-.108-.549-.307-.748L12.01.307A1.046 1.046 0 0 0 11.265 0c-.281 0-.546.11-.744.307l-.63.631a1.043 1.043 0 0 0-.308.744c0 .282.11.532.308.73l4.098 4.084H1.069c-.581 0-1.069.5-1.069 1.08v.893c0 .58.502 1.042 1.083 1.042z" /></svg>'}))}))},function(t,e){var n;n=function(){function t(t){this.cartButton=t,this.initCartButtonWatcher()}return t.prototype.initCartButtonWatcher=function(){var t=this,e=0;setInterval((function(){if(t.cartButton.textContent){var n=parseInt(t.cartButton.textContent,10);e!==n&&(0===(e=n)?t.cartButton.classList.add("empty"):t.cartButton.classList.remove("empty"))}}),100)},t}(),addEventListener("DOMContentLoaded",(function(){for(var t=document.querySelectorAll('[data-component="cart-button"]'),e=0;e<t.length;++e)new n(t[e])}))},function(t,e){var n;n=function(){function t(t){this.navigation=t,this.initOnScroll()}return t.prototype.initOnScroll=function(){var t=this;window.addEventListener("scroll",(function(){0===scrollY?t.navigation.classList.add("transparent"):t.navigation.classList.remove("transparent")}))},t}(),addEventListener("DOMContentLoaded",(function(){for(var t=document.querySelectorAll('[data-component="navigation"]'),e=0;e<t.length;++e)new n(t[e])}))},function(t,e){var n;n=function(t){this.scrollTopButton=t,this.scrollTopButton.addEventListener("click",(function(){scrollTo(0,0)}))},addEventListener("DOMContentLoaded",(function(){for(var t=document.querySelectorAll('[data-component="scroll-top"]'),e=0;e<t.length;++e)new n(t[e])}))},function(t,e){var n;n=function(){function t(t){this.timer=0,this.timerRefreshRate=60,this.timerDuration=5e3,this.section=t,this.carouselContent=this.section.getElementsByClassName("showcase-carousel-content")[0],this.carouselSlides=this.carouselContent.getElementsByClassName("showcase-carousel-content-slide"),this.controlsHandles=this.section.getElementsByClassName("showcase-carousel-controls-handle"),this.controlsHandleTimers=this.section.getElementsByClassName("showcase-carousel-controls-handle-timer"),this.initElementStates(),this.initEventListeners(),this.setIndex(0),this.timerTick()}return t.prototype.timerTick=function(){return!1},t.prototype.initElementStates=function(){[].forEach.call(this.controlsHandleTimers,(function(t){return t.style.flexGrow="0"})),[].forEach.call(this.carouselSlides,(function(t,e){t.style.opacity=0===e?"1":"0"}))},t.prototype.initEventListeners=function(){var t=this;[].forEach.call(this.controlsHandles,(function(e,n){e.addEventListener("click",(function(){t.setIndex(n)}))}))},t.prototype.increaseIndex=function(){void 0!==this.currentIndex&&(this.currentIndex===this.controlsHandleTimers.length-1?this.setIndex(0):this.setIndex(this.currentIndex+1))},t.prototype.setIndex=function(t){this.timer=0,this.currentIndex=t,this.updateControlsHandles(),this.updateCarouselContent()},t.prototype.updateActiveControlHandle=function(){void 0!==this.currentIndex&&(this.controlsHandleTimers[this.currentIndex].style.flexGrow=""+1/this.timerDuration*this.timer)},t.prototype.updateControlsHandles=function(){var t=this;[].forEach.call(this.controlsHandles,(function(e,n){n===t.currentIndex?(e.style.opacity="1",e.style.height="64px"):(e.style.opacity="0.4",e.style.height="48px")}))},t.prototype.updateCarouselContent=function(){var t=this;[].forEach.call(this.carouselSlides,(function(e,n){n===t.currentIndex?e.style.opacity="1":e.style.opacity="0"}))},t}(),window.ShowcaseCarousel=n,addEventListener("DOMContentLoaded",(function(){for(var t=document.querySelectorAll('[data-component="showcase-carousel"]'),e=0;e<t.length;++e)new n(t[e])}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jYXJvdXNlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FydEJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2aWdhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nyb2xsVG9wLnRzIiwid2VicGFjazovLy8uL3NyYy9zaG93Y2FzZUNhcm91c2VsLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwic2VjdGlvbiIsInRpbWVyIiwidGltZXJSZWZyZXNoUmF0ZSIsInRpbWVyRHVyYXRpb24iLCJ0aGlzIiwiY2Fyb3VzZWxDb250ZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNvbnRyb2xzSW5kZXgiLCJjb250cm9sc0hhbmRsZXMiLCJjb250cm9sc0hhbmRsZVRpbWVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbmNyZWFzZUluZGV4IiwiaW5pdEVsZW1lbnRTdGF0ZXMiLCJpbml0RXZlbnRMaXN0ZW5lcnMiLCJzZXRJbmRleCIsInRpbWVyVGljayIsInVwZGF0ZUFjdGl2ZUNvbnRyb2xIYW5kbGUiLCJzZXRUaW1lb3V0IiwiZm9yRWFjaCIsImhhbmRsZVRpbWVyIiwic3R5bGUiLCJ3aWR0aCIsImhhbmRsZSIsImluZGV4IiwiY3VycmVudEluZGV4IiwibGVuZ3RoIiwidXBkYXRlQ29udHJvbHNIYW5kbGVzIiwic2V0Q29udHJvbHNJbmRleCIsInVwZGF0ZUNhcm91c2VsQ29udGVudCIsInRleHRDb250ZW50IiwicHJldkluZGV4IiwibmV4dEluZGV4IiwibWFyZ2luTGVmdCIsIndpbmRvdyIsIkNhcm91c2VsIiwiY2Fyb3VzZWxTZWN0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhcm91c2VscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhcnJvd1JpZ2h0V2hpdGVFbGVtZW50cyIsImVsZW1lbnQiLCJpbm5lckhUTUwiLCJjYXJ0QnV0dG9uIiwiaW5pdENhcnRCdXR0b25XYXRjaGVyIiwibnVtYmVyIiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50TnVtYmVyIiwicGFyc2VJbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJDYXJ0QnV0dG9uIiwibmF2aWdhdGlvbiIsImluaXRPblNjcm9sbCIsInNjcm9sbFkiLCJOYXZpZ2F0aW9uIiwic2Nyb2xsVG9wQnV0dG9uIiwic2Nyb2xsVG8iLCJTY3JvbGxUb3AiLCJjYXJvdXNlbFNsaWRlcyIsImZsZXhHcm93Iiwic2xpZGUiLCJvcGFjaXR5IiwiaGVpZ2h0IiwiU2hvd2Nhc2VDYXJvdXNlbCJdLCJtYXBwaW5ncyI6ImFBQ0UsSUFBSUEsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVUMsUUFHbkMsSUFBSUMsRUFBU0osRUFBaUJFLEdBQVksQ0FDekNHLEVBQUdILEVBQ0hJLEdBQUcsRUFDSEgsUUFBUyxJQVVWLE9BTkFJLEVBQVFMLEdBQVVNLEtBQUtKLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVNGLEdBRy9ERyxFQUFPRSxHQUFJLEVBR0pGLEVBQU9ELFFBS2ZGLEVBQW9CUSxFQUFJRixFQUd4Qk4sRUFBb0JTLEVB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SUFBdEJaLEtBQUtvQixlQUNicEIsS0FBS0sscUJBQ0pMLEtBQUtvQixjQUNjSixNQUFNeUMsU0FBVyxHQUNuQyxFQUFJekQsS0FBS0QsY0FBaUJDLEtBQUtILFFBS3RDLFlBQUF5QixzQkFBQSxzQkFDRSxHQUFHUixRQUFRL0MsS0FDVGlDLEtBQUtJLGlCQUNMLFNBQUNjLEVBQXFCQyxHQUVoQkEsSUFBVSxFQUFLQyxjQUNqQkYsRUFBT0YsTUFBTTJDLFFBQVUsSUFDdkJ6QyxFQUFPRixNQUFNNEMsT0FBUyxTQUV0QjFDLEVBQU9GLE1BQU0yQyxRQUFVLE1BQ3ZCekMsRUFBT0YsTUFBTTRDLE9BQVMsWUFNOUIsWUFBQXBDLHNCQUFBLHNCQUNFLEdBQUdWLFFBQVEvQyxLQUNUaUMsS0FBS3dELGdCQUNMLFNBQUNFLEVBQW9CdkMsR0FFZkEsSUFBVSxFQUFLQyxhQUNqQnNDLEVBQU0xQyxNQUFNMkMsUUFBVSxJQUV0QkQsRUFBTTFDLE1BQU0yQyxRQUFVLFFBS2hDLEVBN0lBLEdBK0lDOUIsT0FBZWdDLGlCQUFtQkEsRUFFbkN2RCxpQkFBaUIsb0JBQW9CLFdBS25DLElBSkEsSUFBTTRCLEVBQVlGLFNBQVNHLGlCQUN6Qix3Q0FHT3ZFLEVBQUksRUFBR0EsRUFBSXNFLEVBQVViLFNBQVV6RCxFQUN0QyxJQUFJaUcsRUFBaUIzQixFQUFVdEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFwiLi9jYXJvdXNlbFwiO1xuaW1wb3J0IFwiLi9jYXJ0QnV0dG9uXCI7XG5pbXBvcnQgXCIuL25hdmlnYXRpb25cIjtcbmltcG9ydCBcIi4vc2Nyb2xsVG9wXCI7XG5pbXBvcnQgXCIuL3Nob3djYXNlQ2Fyb3VzZWxcIjtcbiIsIigoKSA9PiB7XG4gIGNsYXNzIENhcm91c2VsIHtcbiAgICBjdXJyZW50SW5kZXg/OiBudW1iZXI7XG5cbiAgICBzZWN0aW9uOiBIVE1MRWxlbWVudDtcbiAgICBjYXJvdXNlbENvbnRlbnQ6IEhUTUxFbGVtZW50O1xuICAgIGNvbnRyb2xzSW5kZXg6IEhUTUxEaXZFbGVtZW50IHwgbnVsbDtcbiAgICBjb250cm9sc0hhbmRsZXM6IEhUTUxDb2xsZWN0aW9uO1xuICAgIGNvbnRyb2xzSGFuZGxlVGltZXJzOiBIVE1MQ29sbGVjdGlvbjtcblxuICAgIHRpbWVyOiBudW1iZXIgPSAwO1xuICAgIHRpbWVyUmVmcmVzaFJhdGUgPSA2MDtcbiAgICB0aW1lckR1cmF0aW9uID0gNSAqIDEwMDA7XG5cbiAgICBjb25zdHJ1Y3RvcihzZWN0aW9uOiBIVE1MRGl2RWxlbWVudCkge1xuICAgICAgdGhpcy5zZWN0aW9uID0gc2VjdGlvbjtcbiAgICAgIHRoaXMuY2Fyb3VzZWxDb250ZW50ID0gdGhpcy5zZWN0aW9uLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgIFwiY2Fyb3VzZWwtY29udGVudFwiXG4gICAgICApWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgdGhpcy5jb250cm9sc0luZGV4ID0gdGhpcy5zZWN0aW9uLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgIFwiY2Fyb3VzZWwtY29udHJvbHMtaW5kZXhcIlxuICAgICAgKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgIHRoaXMuY29udHJvbHNIYW5kbGVzID0gdGhpcy5zZWN0aW9uLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgIFwiY2Fyb3VzZWwtY29udHJvbHMtaGFuZGxlXCJcbiAgICAgICk7XG4gICAgICB0aGlzLmNvbnRyb2xzSGFuZGxlVGltZXJzID0gdGhpcy5zZWN0aW9uLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgIFwiY2Fyb3VzZWwtY29udHJvbHMtaGFuZGxlLXRpbWVyXCJcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuY2Fyb3VzZWxDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT7CoHtcbiAgICAgICAgdGhpcy5pbmNyZWFzZUluZGV4KCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5pbml0RWxlbWVudFN0YXRlcygpO1xuICAgICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuc2V0SW5kZXgoMCk7XG5cbiAgICAgIHRoaXMudGltZXJUaWNrKCk7XG4gICAgfVxuXG4gICAgdGltZXJUaWNrKCkge1xuICAgICAgdGhpcy50aW1lciArPSAxMDAwIC8gdGhpcy50aW1lclJlZnJlc2hSYXRlO1xuXG4gICAgICBpZiAodGhpcy50aW1lciA+IHRoaXMudGltZXJEdXJhdGlvbikge1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgdGhpcy5pbmNyZWFzZUluZGV4KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlQWN0aXZlQ29udHJvbEhhbmRsZSgpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy50aW1lclRpY2soKTtcbiAgICAgIH0sIDEwMDAgLyB0aGlzLnRpbWVyUmVmcmVzaFJhdGUpO1xuICAgIH1cblxuICAgIGluaXRFbGVtZW50U3RhdGVzKCkge1xuICAgICAgW10uZm9yRWFjaC5jYWxsKFxuICAgICAgICB0aGlzLmNvbnRyb2xzSGFuZGxlVGltZXJzLFxuICAgICAgICAoaGFuZGxlVGltZXI6IEhUTUxFbGVtZW50KSA9PiAoaGFuZGxlVGltZXIuc3R5bGUud2lkdGggPSBcIjAlXCIpXG4gICAgICApO1xuICAgIH1cblxuICAgIGluaXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIFtdLmZvckVhY2guY2FsbChcbiAgICAgICAgdGhpcy5jb250cm9sc0hhbmRsZXMsXG4gICAgICAgIChoYW5kbGU6IEhUTUxFbGVtZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldEluZGV4KGluZGV4KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpbmNyZWFzZUluZGV4KCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmN1cnJlbnRJbmRleCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXG4gICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPT09IHRoaXMuY29udHJvbHNIYW5kbGVUaW1lcnMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0aGlzLnNldEluZGV4KDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRJbmRleCh0aGlzLmN1cnJlbnRJbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNldEluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgdGhpcy51cGRhdGVDb250cm9sc0hhbmRsZXModGhpcy5jdXJyZW50SW5kZXgsIGluZGV4KTtcbiAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICB0aGlzLnNldENvbnRyb2xzSW5kZXgodGhpcy5jdXJyZW50SW5kZXgpO1xuICAgICAgdGhpcy51cGRhdGVDYXJvdXNlbENvbnRlbnQoKTtcbiAgICB9XG5cbiAgICBzZXRDb250cm9sc0luZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICAgIGlmICghdGhpcy5jb250cm9sc0luZGV4KSByZXR1cm47XG4gICAgICB0aGlzLmNvbnRyb2xzSW5kZXgudGV4dENvbnRlbnQgPSBgMCR7aW5kZXggKyAxfWA7XG4gICAgfVxuXG4gICAgdXBkYXRlQWN0aXZlQ29udHJvbEhhbmRsZSgpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jdXJyZW50SW5kZXggIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgKHRoaXMuY29udHJvbHNIYW5kbGVUaW1lcnNbXG4gICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXhcbiAgICAgICAgXSBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUud2lkdGggPSBgJHtcbiAgICAgICAgICAoMTAwIC8gdGhpcy50aW1lckR1cmF0aW9uKSAqIHRoaXMudGltZXJcbiAgICAgICAgfSVgO1xuICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUNvbnRyb2xzSGFuZGxlcyhwcmV2SW5kZXg/OiBudW1iZXIsIG5leHRJbmRleD86IG51bWJlcikge1xuICAgICAgaWYgKHR5cGVvZiBwcmV2SW5kZXggIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgKHRoaXMuY29udHJvbHNIYW5kbGVUaW1lcnNbcHJldkluZGV4XSBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUud2lkdGggPVxuICAgICAgICAgIFwiMCVcIjtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbmV4dEluZGV4ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICh0aGlzLmNvbnRyb2xzSGFuZGxlVGltZXJzW25leHRJbmRleF0gYXMgSFRNTERpdkVsZW1lbnQpLnN0eWxlLndpZHRoID1cbiAgICAgICAgICBcIjEwMCVcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVDYXJvdXNlbENvbnRlbnQoKSB7XG4gICAgICBpZiAoIXRoaXMuY2Fyb3VzZWxDb250ZW50KSByZXR1cm47XG4gICAgICB0aGlzLmNhcm91c2VsQ29udGVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gYC0ke3RoaXMuY3VycmVudEluZGV4fTAwJWA7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYmFja2dyb3VuZEltYWdlUG9zaXRpb24gPSB7XG4gICAgZGVza3RvcDogW3sgYmFja2dyb3VuZFBvc2l0aW9uWDogMTcsIGJhY2tncm91bmRTaXplOiBcImF1dG8gMjUwJVwiIH1dLFxuICAgIHBob25lOiB7fSxcbiAgfTtcblxuICAod2luZG93IGFzIGFueSkuQ2Fyb3VzZWwgPSBDYXJvdXNlbDtcblxuICBhZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2Fyb3VzZWxTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImNhcm91c2VsLXNlY3Rpb25cIlxuICAgICkgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBpZiAoY2Fyb3VzZWxTZWN0aW9uKSB7XG4gICAgICBuZXcgQ2Fyb3VzZWwoY2Fyb3VzZWxTZWN0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYXJvdXNlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jb21wb25lbnQ9XCJjYXJvdXNlbFwiXScpO1xuXG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBjYXJvdXNlbHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIG5ldyBDYXJvdXNlbChjYXJvdXNlbHNbaV0gYXMgSFRNTERpdkVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIEluamVjdCBTVkcgSWNvbnNcbiAgICBjb25zdCBhcnJvd1JpZ2h0V2hpdGVFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIltkYXRhLWljb249YXJyb3ctcmlnaHQtd2hpdGVdXCJcbiAgICApO1xuICAgIFtdLmZvckVhY2guY2FsbChhcnJvd1JpZ2h0V2hpdGVFbGVtZW50cywgKGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9XG4gICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDIwIDE2XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIiBkPVwiTTEuMDgzIDkuNTFsMTIuODYtLjAwNi00LjA1MiA0LjA2MWExLjA1NCAxLjA1NCAwIDAgMC0uMzA4Ljc0OWMwIC4yODIuMTEuNTQ5LjMwOC43NDdsLjYzLjYzMWMuMTk4LjE5OC40NjMuMzA4Ljc0NC4zMDguMjgyIDAgLjU0Ny0uMTA5Ljc0NS0uMzA3bDYuOTQ2LTYuOTQ2Yy4yLS4xOTkuMzA4LS40NjQuMzA3LS43NDYuMDAxLS4yODQtLjEwOC0uNTQ5LS4zMDctLjc0OEwxMi4wMS4zMDdBMS4wNDYgMS4wNDYgMCAwIDAgMTEuMjY1IDBjLS4yODEgMC0uNTQ2LjExLS43NDQuMzA3bC0uNjMuNjMxYTEuMDQzIDEuMDQzIDAgMCAwLS4zMDguNzQ0YzAgLjI4Mi4xMS41MzIuMzA4LjczbDQuMDk4IDQuMDg0SDEuMDY5Yy0uNTgxIDAtMS4wNjkuNS0xLjA2OSAxLjA4di44OTNjMCAuNTguNTAyIDEuMDQyIDEuMDgzIDEuMDQyelwiIC8+PC9zdmc+JztcbiAgICB9KTtcbiAgfSk7XG59KSgpO1xuIiwiKCgpID0+IHtcbiAgY2xhc3MgQ2FydEJ1dHRvbiB7XG4gICAgY2FydEl0ZW1zPzogbnVtYmVyO1xuXG4gICAgY2FydEJ1dHRvbjogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihjYXJ0QnV0dG9uOiBIVE1MRGl2RWxlbWVudCkge1xuICAgICAgdGhpcy5jYXJ0QnV0dG9uID0gY2FydEJ1dHRvbjtcblxuICAgICAgdGhpcy5pbml0Q2FydEJ1dHRvbldhdGNoZXIoKTtcbiAgICB9XG5cbiAgICBpbml0Q2FydEJ1dHRvbldhdGNoZXIoKSB7XG4gICAgICBsZXQgbnVtYmVyID0gMDtcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmNhcnRCdXR0b24udGV4dENvbnRlbnQpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjdXJyZW50TnVtYmVyID0gcGFyc2VJbnQodGhpcy5jYXJ0QnV0dG9uLnRleHRDb250ZW50LCAxMCk7XG5cbiAgICAgICAgaWYgKG51bWJlciA9PT0gY3VycmVudE51bWJlcikgcmV0dXJuO1xuXG4gICAgICAgIG51bWJlciA9IGN1cnJlbnROdW1iZXI7XG5cbiAgICAgICAgaWYgKG51bWJlciA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuY2FydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZW1wdHlcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jYXJ0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJlbXB0eVwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2Fyb3VzZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICdbZGF0YS1jb21wb25lbnQ9XCJjYXJ0LWJ1dHRvblwiXSdcbiAgICApO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJvdXNlbHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIG5ldyBDYXJ0QnV0dG9uKGNhcm91c2Vsc1tpXSBhcyBIVE1MRGl2RWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn0pKCk7XG4iLCIoKCkgPT4ge1xuICBjbGFzcyBOYXZpZ2F0aW9uIHtcbiAgICBjYXJ0SXRlbXM/OiBudW1iZXI7XG5cbiAgICBuYXZpZ2F0aW9uOiBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKG5hdmlnYXRpb246IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgICB0aGlzLm5hdmlnYXRpb24gPSBuYXZpZ2F0aW9uO1xuXG4gICAgICB0aGlzLmluaXRPblNjcm9sbCgpO1xuICAgIH1cblxuICAgIGluaXRPblNjcm9sbCgpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PsKge1xuICAgICAgICBpZiAoc2Nyb2xsWSA9PT0gMCkge1xuICAgICAgICAgIHRoaXMubmF2aWdhdGlvbi5jbGFzc0xpc3QuYWRkKCd0cmFuc3BhcmVudCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubmF2aWdhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc3BhcmVudCcpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYXJvdXNlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ1tkYXRhLWNvbXBvbmVudD1cIm5hdmlnYXRpb25cIl0nXG4gICAgKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2Fyb3VzZWxzLmxlbmd0aDsgKytpKSB7XG4gICAgICBuZXcgTmF2aWdhdGlvbihjYXJvdXNlbHNbaV0gYXMgSFRNTERpdkVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59KSgpO1xuIiwiKCgpID0+IHtcbiAgY2xhc3MgU2Nyb2xsVG9wIHtcbiAgICBzY3JvbGxUb3BCdXR0b246IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3Ioc2Nyb2xsVG9wQnV0dG9uOiBIVE1MRGl2RWxlbWVudCkge1xuICAgICAgdGhpcy5zY3JvbGxUb3BCdXR0b24gPSBzY3JvbGxUb3BCdXR0b247XG5cbiAgICAgIHRoaXMuc2Nyb2xsVG9wQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHNjcm9sbFRvKDAsIDApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhcm91c2VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnW2RhdGEtY29tcG9uZW50PVwic2Nyb2xsLXRvcFwiXSdcbiAgICApO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJvdXNlbHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIG5ldyBTY3JvbGxUb3AoY2Fyb3VzZWxzW2ldIGFzIEhUTUxEaXZFbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufSkoKTtcbiIsIigoKSA9PiB7XG4gIGNsYXNzIFNob3djYXNlQ2Fyb3VzZWwge1xuICAgIGN1cnJlbnRJbmRleD86IG51bWJlcjtcblxuICAgIHNlY3Rpb246IEhUTUxFbGVtZW50O1xuICAgIGNhcm91c2VsQ29udGVudDogSFRNTEVsZW1lbnQ7XG4gICAgY2Fyb3VzZWxTbGlkZXM6IEhUTUxDb2xsZWN0aW9uO1xuICAgIGNvbnRyb2xzSGFuZGxlczogSFRNTENvbGxlY3Rpb247XG4gICAgY29udHJvbHNIYW5kbGVUaW1lcnM6IEhUTUxDb2xsZWN0aW9uO1xuXG4gICAgdGltZXI6IG51bWJlciA9IDA7XG4gICAgdGltZXJSZWZyZXNoUmF0ZSA9IDYwO1xuICAgIHRpbWVyRHVyYXRpb24gPSA1ICogMTAwMDtcblxuICAgIGNvbnN0cnVjdG9yKHNlY3Rpb246IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgICB0aGlzLnNlY3Rpb24gPSBzZWN0aW9uO1xuICAgICAgdGhpcy5jYXJvdXNlbENvbnRlbnQgPSB0aGlzLnNlY3Rpb24uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgXCJzaG93Y2FzZS1jYXJvdXNlbC1jb250ZW50XCJcbiAgICAgIClbMF0gYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICB0aGlzLmNhcm91c2VsU2xpZGVzID0gdGhpcy5jYXJvdXNlbENvbnRlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgXCJzaG93Y2FzZS1jYXJvdXNlbC1jb250ZW50LXNsaWRlXCJcbiAgICAgICk7XG4gICAgICB0aGlzLmNvbnRyb2xzSGFuZGxlcyA9IHRoaXMuc2VjdGlvbi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICBcInNob3djYXNlLWNhcm91c2VsLWNvbnRyb2xzLWhhbmRsZVwiXG4gICAgICApO1xuICAgICAgdGhpcy5jb250cm9sc0hhbmRsZVRpbWVycyA9IHRoaXMuc2VjdGlvbi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICBcInNob3djYXNlLWNhcm91c2VsLWNvbnRyb2xzLWhhbmRsZS10aW1lclwiXG4gICAgICApO1xuXG4gICAgICAvLyBUT0RPOiBDaGVjayBpZiB0aGlzIHdvcmtzIG5pY2VseVxuICAgICAgLy8gdGhpcy5jYXJvdXNlbENvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vICAgdGhpcy5pbmNyZWFzZUluZGV4KCk7XG4gICAgICAvLyB9KTtcblxuICAgICAgdGhpcy5pbml0RWxlbWVudFN0YXRlcygpO1xuICAgICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuc2V0SW5kZXgoMCk7XG5cbiAgICAgIHRoaXMudGltZXJUaWNrKCk7XG4gICAgfVxuXG4gICAgdGltZXJUaWNrKCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgdGhpcy50aW1lciArPSAxMDAwIC8gdGhpcy50aW1lclJlZnJlc2hSYXRlO1xuXG4gICAgICBpZiAodGhpcy50aW1lciA+IHRoaXMudGltZXJEdXJhdGlvbikge1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgdGhpcy5pbmNyZWFzZUluZGV4KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlQWN0aXZlQ29udHJvbEhhbmRsZSgpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy50aW1lclRpY2soKTtcbiAgICAgIH0sIDEwMDAgLyB0aGlzLnRpbWVyUmVmcmVzaFJhdGUpO1xuICAgIH1cblxuICAgIGluaXRFbGVtZW50U3RhdGVzKCkge1xuICAgICAgW10uZm9yRWFjaC5jYWxsKFxuICAgICAgICB0aGlzLmNvbnRyb2xzSGFuZGxlVGltZXJzLFxuICAgICAgICAoaGFuZGxlVGltZXI6IEhUTUxFbGVtZW50KSA9PiAoaGFuZGxlVGltZXIuc3R5bGUuZmxleEdyb3cgPSBcIjBcIilcbiAgICAgICk7XG4gICAgICBbXS5mb3JFYWNoLmNhbGwoXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxTbGlkZXMsXG4gICAgICAgIChzbGlkZTogSFRNTEVsZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAvLyBIaWRlIGFsbCBidXQgdGhlIGZpcnN0IGFwcCBzY3JlZW5cbiAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHNsaWRlLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2xpZGUuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpbml0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBbXS5mb3JFYWNoLmNhbGwoXG4gICAgICAgIHRoaXMuY29udHJvbHNIYW5kbGVzLFxuICAgICAgICAoaGFuZGxlOiBIVE1MRWxlbWVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRJbmRleChpbmRleCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaW5jcmVhc2VJbmRleCgpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jdXJyZW50SW5kZXggPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblxuICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4ID09PSB0aGlzLmNvbnRyb2xzSGFuZGxlVGltZXJzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhpcy5zZXRJbmRleCgwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0SW5kZXgodGhpcy5jdXJyZW50SW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRJbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRyb2xzSGFuZGxlcygpO1xuICAgICAgdGhpcy51cGRhdGVDYXJvdXNlbENvbnRlbnQoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVBY3RpdmVDb250cm9sSGFuZGxlKCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmN1cnJlbnRJbmRleCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAodGhpcy5jb250cm9sc0hhbmRsZVRpbWVyc1tcbiAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleFxuICAgICAgICBdIGFzIEhUTUxEaXZFbGVtZW50KS5zdHlsZS5mbGV4R3JvdyA9IGAke1xuICAgICAgICAgICgxIC8gdGhpcy50aW1lckR1cmF0aW9uKSAqIHRoaXMudGltZXJcbiAgICAgICAgfWA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQ29udHJvbHNIYW5kbGVzKCkge1xuICAgICAgW10uZm9yRWFjaC5jYWxsKFxuICAgICAgICB0aGlzLmNvbnRyb2xzSGFuZGxlcyxcbiAgICAgICAgKGhhbmRsZTogSFRNTEVsZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAvLyBIaWRlIGFsbCBidXQgdGhlIGhhbmRsZSB3aXRoIHRoZSBjdXJyZW50IGluZGV4XG4gICAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLmN1cnJlbnRJbmRleCkge1xuICAgICAgICAgICAgaGFuZGxlLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgICAgIGhhbmRsZS5zdHlsZS5oZWlnaHQgPSBcIjY0cHhcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGFuZGxlLnN0eWxlLm9wYWNpdHkgPSBcIjAuNFwiO1xuICAgICAgICAgICAgaGFuZGxlLnN0eWxlLmhlaWdodCA9IFwiNDhweFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDYXJvdXNlbENvbnRlbnQoKSB7XG4gICAgICBbXS5mb3JFYWNoLmNhbGwoXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxTbGlkZXMsXG4gICAgICAgIChzbGlkZTogSFRNTEVsZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAvLyBIaWRlIGFsbCBidXQgdGhlIHNsaWRlIHdpdGggdGhlIGN1cnJlbnQgaW5kZXhcbiAgICAgICAgICBpZiAoaW5kZXggPT09IHRoaXMuY3VycmVudEluZGV4KSB7XG4gICAgICAgICAgICBzbGlkZS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNsaWRlLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgKHdpbmRvdyBhcyBhbnkpLlNob3djYXNlQ2Fyb3VzZWwgPSBTaG93Y2FzZUNhcm91c2VsO1xuXG4gIGFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYXJvdXNlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ1tkYXRhLWNvbXBvbmVudD1cInNob3djYXNlLWNhcm91c2VsXCJdJ1xuICAgICk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcm91c2Vscy5sZW5ndGg7ICsraSkge1xuICAgICAgbmV3IFNob3djYXNlQ2Fyb3VzZWwoY2Fyb3VzZWxzW2ldIGFzIEhUTUxEaXZFbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=