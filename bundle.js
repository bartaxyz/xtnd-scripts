!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1),n(2),n(3),n(4),n(5)},function(t,e){var n;n=function(){function t(t){this.timer=0,this.timerRefreshRate=60,this.timerDuration=5e3,this.section=t,this.carouselContent=this.section.getElementsByClassName("carousel-content")[0],this.controlsIndex=this.section.getElementsByClassName("carousel-controls-index")[0],this.controlsHandles=this.section.getElementsByClassName("carousel-controls-handle"),this.controlsHandleTimers=this.section.getElementsByClassName("carousel-controls-handle-timer"),this.initElementStates(),this.initEventListeners(),this.setIndex(0),this.timerTick()}return t.prototype.timerTick=function(){var t=this;this.timer+=1e3/this.timerRefreshRate,this.timer>this.timerDuration&&(this.timer=0,this.increaseIndex()),this.updateActiveControlHandle(),setTimeout((function(){t.timerTick()}),1e3/this.timerRefreshRate)},t.prototype.initElementStates=function(){[].forEach.call(this.controlsHandleTimers,(function(t){return t.style.width="0%"}))},t.prototype.initEventListeners=function(){var t=this;[].forEach.call(this.controlsHandles,(function(e,n){e.addEventListener("click",(function(){t.setIndex(n)}))}))},t.prototype.increaseIndex=function(){void 0!==this.currentIndex&&(this.currentIndex===this.controlsHandleTimers.length-1?this.setIndex(0):this.setIndex(this.currentIndex+1))},t.prototype.setIndex=function(t){this.timer=0,this.updateControlsHandles(this.currentIndex,t),this.currentIndex=t,this.setControlsIndex(this.currentIndex),this.updateCarouselContent()},t.prototype.setControlsIndex=function(t){this.controlsIndex&&(this.controlsIndex.textContent="0"+(t+1))},t.prototype.updateActiveControlHandle=function(){void 0!==this.currentIndex&&(this.controlsHandleTimers[this.currentIndex].style.width=100/this.timerDuration*this.timer+"%")},t.prototype.updateControlsHandles=function(t,e){void 0!==t&&(this.controlsHandleTimers[t].style.width="0%"),void 0!==e&&(this.controlsHandleTimers[e].style.width="100%")},t.prototype.updateCarouselContent=function(){this.carouselContent&&(this.carouselContent.style.marginLeft="-"+this.currentIndex+"00%")},t}(),window.Carousel=n,addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("carousel-section");t&&new n(t);for(var e=document.querySelectorAll('[data-component="carousel"]'),o=0;o<e.length;++o)new n(e[o]);var i=document.querySelectorAll("[data-icon=arrow-right-white]");[].forEach.call(i,(function(t){t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16"><path fill="currentColor" fill-rule="nonzero" d="M1.083 9.51l12.86-.006-4.052 4.061a1.054 1.054 0 0 0-.308.749c0 .282.11.549.308.747l.63.631c.198.198.463.308.744.308.282 0 .547-.109.745-.307l6.946-6.946c.2-.199.308-.464.307-.746.001-.284-.108-.549-.307-.748L12.01.307A1.046 1.046 0 0 0 11.265 0c-.281 0-.546.11-.744.307l-.63.631a1.043 1.043 0 0 0-.308.744c0 .282.11.532.308.73l4.098 4.084H1.069c-.581 0-1.069.5-1.069 1.08v.893c0 .58.502 1.042 1.083 1.042z" /></svg>'}))}))},function(t,e){var n;n=function(){function t(t){this.cartButton=t,this.initCartButtonWatcher()}return t.prototype.initCartButtonWatcher=function(){var t=this,e=0;setInterval((function(){if(t.cartButton.textContent){var n=parseInt(t.cartButton.textContent,10);e!==n&&(0===(e=n)?t.cartButton.classList.add("empty"):t.cartButton.classList.remove("empty"))}}),100)},t}(),addEventListener("DOMContentLoaded",(function(){for(var t=document.querySelectorAll('[data-component="cart-button"]'),e=0;e<t.length;++e)new n(t[e])}))},function(t,e){var n,o,i,r,s=function(){r.style.display="flex",i.style.display="none",o.style.opacity="1",o.style.pointerEvents="",n&&n.playVideo(),document.body.style.height="100%",document.body.style.overflow="hidden"},a=function(){i.style.display="flex",r.style.display="none",o.style.opacity="0",o.style.pointerEvents="none",n&&n.stopVideo(),document.body.style.height="",document.body.style.overflow=""};addEventListener("DOMContentLoaded",(function(){var t=document.createElement("script");t.src="https://www.youtube.com/iframe_api";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}));var c=function(){n=new(void 0).Player("intro-video",{height:"100%",width:"100%",videoId:"C-VqyDHpsf0",playerVars:{controls:0},events:{onReady:l,onStateChange:u}}),o=document.querySelector("#intro-video"),i=document.querySelector("[data-component=introPlayButton]"),r=document.querySelector("[data-component=introPauseButton]"),o&&i&&r&&(i.addEventListener("click",s),r.addEventListener("click",a),o.style.display="block",a())},l=function(t){},u=function(t){t.data==(void 0).PlayerState.PLAYING&&console.log("playing")};window.onYouTubeIframeAPIReady=function(){console.log("onYouTubeIframeAPIReady"),c()}},function(t,e){addEventListener("resize",(function(){if(innerWidth>767)return!1}))},function(t,e){var n;n=function(){function t(t){this.navigation=t,this.initOnScroll()}return t.prototype.initOnScroll=function(){var t=this;window.addEventListener("scroll",(function(){0===scrollX?t.navigation.classList.add("transparent"):t.navigation.classList.remove("transparent")}))},t}(),addEventListener("DOMContentLoaded",(function(){for(var t=document.querySelectorAll('[data-component="navigation"]'),e=0;e<t.length;++e)new n(t[e])}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jYXJvdXNlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FydEJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50cm9WaWRlby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9nb0FuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2aWdhdGlvbi50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsInNlY3Rpb24iLCJ0aW1lciIsInRpbWVyUmVmcmVzaFJhdGUiLCJ0aW1lckR1cmF0aW9uIiwidGhpcyIsImNhcm91c2VsQ29udGVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjb250cm9sc0luZGV4IiwiY29udHJvbHNIYW5kbGVzIiwiY29udHJvbHNIYW5kbGVUaW1lcnMiLCJpbml0RWxlbWVudFN0YXRlcyIsImluaXRFdmVudExpc3RlbmVycyIsInNldEluZGV4IiwidGltZXJUaWNrIiwiaW5jcmVhc2VJbmRleCIsInVwZGF0ZUFjdGl2ZUNvbnRyb2xIYW5kbGUiLCJzZXRUaW1lb3V0IiwiZm9yRWFjaCIsImhhbmRsZVRpbWVyIiwic3R5bGUiLCJ3aWR0aCIsImhhbmRsZSIsImluZGV4IiwiYWRkRXZlbnRMaXN0ZW5lciIsImN1cnJlbnRJbmRleCIsImxlbmd0aCIsInVwZGF0ZUNvbnRyb2xzSGFuZGxlcyIsInNldENvbnRyb2xzSW5kZXgiLCJ1cGRhdGVDYXJvdXNlbENvbnRlbnQiLCJ0ZXh0Q29udGVudCIsInByZXZJbmRleCIsIm5leHRJbmRleCIsIm1hcmdpbkxlZnQiLCJ3aW5kb3ciLCJDYXJvdXNlbCIsImNhcm91c2VsU2VjdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYXJvdXNlbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXJyb3dSaWdodFdoaXRlRWxlbWVudHMiLCJlbGVtZW50IiwiaW5uZXJIVE1MIiwiY2FydEJ1dHRvbiIsImluaXRDYXJ0QnV0dG9uV2F0Y2hlciIsIm51bWJlciIsInNldEludGVydmFsIiwiY3VycmVudE51bWJlciIsInBhcnNlSW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiQ2FydEJ1dHRvbiIsInBsYXllciIsInZpZGVvIiwicGxheUJ1dHRvbiIsInBhdXNlQnV0dG9uIiwicGxheVZpZGVvIiwiZGlzcGxheSIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIiwiYm9keSIsImhlaWdodCIsIm92ZXJmbG93IiwicGF1c2VWaWRlbyIsInN0b3BWaWRlbyIsInRhZyIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJmaXJzdFNjcmlwdFRhZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImluaXRJbnRyb1ZpZGVvUGxheWVyIiwiWVQiLCJQbGF5ZXIiLCJ2aWRlb0lkIiwicGxheWVyVmFycyIsImNvbnRyb2xzIiwiZXZlbnRzIiwib25SZWFkeSIsIm9uUGxheWVyUmVhZHkiLCJvblN0YXRlQ2hhbmdlIiwib25QbGF5ZXJTdGF0ZUNoYW5nZSIsInF1ZXJ5U2VsZWN0b3IiLCJldmVudCIsImRhdGEiLCJQbGF5ZXJTdGF0ZSIsIlBMQVlJTkciLCJjb25zb2xlIiwibG9nIiwib25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkiLCJpbm5lcldpZHRoIiwibmF2aWdhdGlvbiIsImluaXRPblNjcm9sbCIsInNjcm9sbFgiLCJOYXZpZ2F0aW9uIl0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlYixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFlYixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sS0FRdkRyQixFQUFvQnNCLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJQUFVRixFQUFRckIsRUFBb0JxQixJQUMvQixFQUFQRSxFQUFVLE9BQU9GLEVBQ3BCLEdBQVcsRUFBUEUsR0FBOEIsaUJBQVZGLEdBQXNCQSxHQUFTQSxFQUFNRyxXQUFZLE9BQU9ILEVBQ2hGLElBQUlJLEVBQUtYLE9BQU9ZLE9BQU8sTUFHdkIsR0FGQTFCLEVBQW9Ca0IsRUFBRU8sR0FDdEJYLE9BQU9DLGVBQWVVLEVBQUksVUFBVyxDQUFFVCxZQUFZLEVBQU1LLE1BQU9B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Y0NGWCxJQUNFLGVBS0UsV0FBWUMsR0FDVnpGLEtBQUt5RixXQUFhQSxFQUVsQnpGLEtBQUswRixlQVlULE9BVEUsWUFBQUEsYUFBQSxzQkFDRTdELE9BQU9WLGlCQUFpQixVQUFVLFdBQ2hCLElBQVp3RSxRQUNGLEVBQUtGLFdBQVc1QyxVQUFVQyxJQUFJLGVBRTlCLEVBQUsyQyxXQUFXNUMsVUFBVUUsT0FBTyxtQkFJekMsRUFwQkEsR0FzQkE1QixpQkFBaUIsb0JBQW9CLFdBS25DLElBSkEsSUFBTWUsRUFBWUYsU0FBU0csaUJBQ3pCLGlDQUdPdkUsRUFBSSxFQUFHQSxFQUFJc0UsRUFBVWIsU0FBVXpELEVBQ3RDLElBQUlnSSxFQUFXMUQsRUFBVXRFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBcIi4vY2Fyb3VzZWxcIjtcbmltcG9ydCBcIi4vY2FydEJ1dHRvblwiO1xuaW1wb3J0IFwiLi9pbnRyb1ZpZGVvXCI7XG5pbXBvcnQgXCIuL2xvZ29BbmltYXRpb25cIjtcbmltcG9ydCBcIi4vbmF2aWdhdGlvblwiO1xuIiwiKCgpID0+IHtcbiAgY2xhc3MgQ2Fyb3VzZWwge1xuICAgIGN1cnJlbnRJbmRleD86IG51bWJlcjtcblxuICAgIHNlY3Rpb246IEhUTUxFbGVtZW50O1xuICAgIGNhcm91c2VsQ29udGVudDogSFRNTEVsZW1lbnQ7XG4gICAgY29udHJvbHNJbmRleDogSFRNTERpdkVsZW1lbnQgfCBudWxsO1xuICAgIGNvbnRyb2xzSGFuZGxlczogSFRNTENvbGxlY3Rpb247XG4gICAgY29udHJvbHNIYW5kbGVUaW1lcnM6IEhUTUxDb2xsZWN0aW9uO1xuXG4gICAgdGltZXI6IG51bWJlciA9IDA7XG4gICAgdGltZXJSZWZyZXNoUmF0ZSA9IDYwO1xuICAgIHRpbWVyRHVyYXRpb24gPSA1ICogMTAwMDtcblxuICAgIGNvbnN0cnVjdG9yKHNlY3Rpb246IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgICB0aGlzLnNlY3Rpb24gPSBzZWN0aW9uO1xuICAgICAgdGhpcy5jYXJvdXNlbENvbnRlbnQgPSB0aGlzLnNlY3Rpb24uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgXCJjYXJvdXNlbC1jb250ZW50XCJcbiAgICAgIClbMF0gYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICB0aGlzLmNvbnRyb2xzSW5kZXggPSB0aGlzLnNlY3Rpb24uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgXCJjYXJvdXNlbC1jb250cm9scy1pbmRleFwiXG4gICAgICApWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgdGhpcy5jb250cm9sc0hhbmRsZXMgPSB0aGlzLnNlY3Rpb24uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgXCJjYXJvdXNlbC1jb250cm9scy1oYW5kbGVcIlxuICAgICAgKTtcbiAgICAgIHRoaXMuY29udHJvbHNIYW5kbGVUaW1lcnMgPSB0aGlzLnNlY3Rpb24uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgXCJjYXJvdXNlbC1jb250cm9scy1oYW5kbGUtdGltZXJcIlxuICAgICAgKTtcblxuICAgICAgdGhpcy5pbml0RWxlbWVudFN0YXRlcygpO1xuICAgICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuc2V0SW5kZXgoMCk7XG5cbiAgICAgIHRoaXMudGltZXJUaWNrKCk7XG4gICAgfVxuXG4gICAgdGltZXJUaWNrKCkge1xuICAgICAgdGhpcy50aW1lciArPSAxMDAwIC8gdGhpcy50aW1lclJlZnJlc2hSYXRlO1xuXG4gICAgICBpZiAodGhpcy50aW1lciA+IHRoaXMudGltZXJEdXJhdGlvbikge1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgdGhpcy5pbmNyZWFzZUluZGV4KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlQWN0aXZlQ29udHJvbEhhbmRsZSgpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy50aW1lclRpY2soKTtcbiAgICAgIH0sIDEwMDAgLyB0aGlzLnRpbWVyUmVmcmVzaFJhdGUpO1xuICAgIH1cblxuICAgIGluaXRFbGVtZW50U3RhdGVzKCkge1xuICAgICAgW10uZm9yRWFjaC5jYWxsKFxuICAgICAgICB0aGlzLmNvbnRyb2xzSGFuZGxlVGltZXJzLFxuICAgICAgICAoaGFuZGxlVGltZXI6IEhUTUxFbGVtZW50KSA9PiAoaGFuZGxlVGltZXIuc3R5bGUud2lkdGggPSBcIjAlXCIpXG4gICAgICApO1xuICAgIH1cblxuICAgIGluaXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIFtdLmZvckVhY2guY2FsbChcbiAgICAgICAgdGhpcy5jb250cm9sc0hhbmRsZXMsXG4gICAgICAgIChoYW5kbGU6IEhUTUxFbGVtZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldEluZGV4KGluZGV4KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpbmNyZWFzZUluZGV4KCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmN1cnJlbnRJbmRleCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXG4gICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPT09IHRoaXMuY29udHJvbHNIYW5kbGVUaW1lcnMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0aGlzLnNldEluZGV4KDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRJbmRleCh0aGlzLmN1cnJlbnRJbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNldEluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgdGhpcy51cGRhdGVDb250cm9sc0hhbmRsZXModGhpcy5jdXJyZW50SW5kZXgsIGluZGV4KTtcbiAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICB0aGlzLnNldENvbnRyb2xzSW5kZXgodGhpcy5jdXJyZW50SW5kZXgpO1xuICAgICAgdGhpcy51cGRhdGVDYXJvdXNlbENvbnRlbnQoKTtcbiAgICB9XG5cbiAgICBzZXRDb250cm9sc0luZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICAgIGlmICghdGhpcy5jb250cm9sc0luZGV4KSByZXR1cm47XG4gICAgICB0aGlzLmNvbnRyb2xzSW5kZXgudGV4dENvbnRlbnQgPSBgMCR7aW5kZXggKyAxfWA7XG4gICAgfVxuXG4gICAgdXBkYXRlQWN0aXZlQ29udHJvbEhhbmRsZSgpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jdXJyZW50SW5kZXggIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgKHRoaXMuY29udHJvbHNIYW5kbGVUaW1lcnNbXG4gICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXhcbiAgICAgICAgXSBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUud2lkdGggPSBgJHtcbiAgICAgICAgICAoMTAwIC8gdGhpcy50aW1lckR1cmF0aW9uKSAqIHRoaXMudGltZXJcbiAgICAgICAgfSVgO1xuICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUNvbnRyb2xzSGFuZGxlcyhwcmV2SW5kZXg/OiBudW1iZXIsIG5leHRJbmRleD86IG51bWJlcikge1xuICAgICAgaWYgKHR5cGVvZiBwcmV2SW5kZXggIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgKHRoaXMuY29udHJvbHNIYW5kbGVUaW1lcnNbcHJldkluZGV4XSBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUud2lkdGggPVxuICAgICAgICAgIFwiMCVcIjtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbmV4dEluZGV4ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICh0aGlzLmNvbnRyb2xzSGFuZGxlVGltZXJzW25leHRJbmRleF0gYXMgSFRNTERpdkVsZW1lbnQpLnN0eWxlLndpZHRoID1cbiAgICAgICAgICBcIjEwMCVcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVDYXJvdXNlbENvbnRlbnQoKSB7XG4gICAgICBpZiAoIXRoaXMuY2Fyb3VzZWxDb250ZW50KSByZXR1cm47XG4gICAgICB0aGlzLmNhcm91c2VsQ29udGVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gYC0ke3RoaXMuY3VycmVudEluZGV4fTAwJWA7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYmFja2dyb3VuZEltYWdlUG9zaXRpb24gPSB7XG4gICAgZGVza3RvcDogW3sgYmFja2dyb3VuZFBvc2l0aW9uWDogMTcsIGJhY2tncm91bmRTaXplOiBcImF1dG8gMjUwJVwiIH1dLFxuICAgIHBob25lOiB7fSxcbiAgfTtcblxuICAod2luZG93IGFzIGFueSkuQ2Fyb3VzZWwgPSBDYXJvdXNlbDtcblxuICBhZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2Fyb3VzZWxTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImNhcm91c2VsLXNlY3Rpb25cIlxuICAgICkgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBpZiAoY2Fyb3VzZWxTZWN0aW9uKSB7XG4gICAgICBuZXcgQ2Fyb3VzZWwoY2Fyb3VzZWxTZWN0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYXJvdXNlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jb21wb25lbnQ9XCJjYXJvdXNlbFwiXScpO1xuXG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBjYXJvdXNlbHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIG5ldyBDYXJvdXNlbChjYXJvdXNlbHNbaV0gYXMgSFRNTERpdkVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIEluamVjdCBTVkcgSWNvbnNcbiAgICBjb25zdCBhcnJvd1JpZ2h0V2hpdGVFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIltkYXRhLWljb249YXJyb3ctcmlnaHQtd2hpdGVdXCJcbiAgICApO1xuICAgIFtdLmZvckVhY2guY2FsbChhcnJvd1JpZ2h0V2hpdGVFbGVtZW50cywgKGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9XG4gICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDIwIDE2XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIiBkPVwiTTEuMDgzIDkuNTFsMTIuODYtLjAwNi00LjA1MiA0LjA2MWExLjA1NCAxLjA1NCAwIDAgMC0uMzA4Ljc0OWMwIC4yODIuMTEuNTQ5LjMwOC43NDdsLjYzLjYzMWMuMTk4LjE5OC40NjMuMzA4Ljc0NC4zMDguMjgyIDAgLjU0Ny0uMTA5Ljc0NS0uMzA3bDYuOTQ2LTYuOTQ2Yy4yLS4xOTkuMzA4LS40NjQuMzA3LS43NDYuMDAxLS4yODQtLjEwOC0uNTQ5LS4zMDctLjc0OEwxMi4wMS4zMDdBMS4wNDYgMS4wNDYgMCAwIDAgMTEuMjY1IDBjLS4yODEgMC0uNTQ2LjExLS43NDQuMzA3bC0uNjMuNjMxYTEuMDQzIDEuMDQzIDAgMCAwLS4zMDguNzQ0YzAgLjI4Mi4xMS41MzIuMzA4LjczbDQuMDk4IDQuMDg0SDEuMDY5Yy0uNTgxIDAtMS4wNjkuNS0xLjA2OSAxLjA4di44OTNjMCAuNTguNTAyIDEuMDQyIDEuMDgzIDEuMDQyelwiIC8+PC9zdmc+JztcbiAgICB9KTtcbiAgfSk7XG59KSgpO1xuIiwiKCgpID0+IHtcbiAgY2xhc3MgQ2FydEJ1dHRvbiB7XG4gICAgY2FydEl0ZW1zPzogbnVtYmVyO1xuXG4gICAgY2FydEJ1dHRvbjogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihjYXJ0QnV0dG9uOiBIVE1MRGl2RWxlbWVudCkge1xuICAgICAgdGhpcy5jYXJ0QnV0dG9uID0gY2FydEJ1dHRvbjtcblxuICAgICAgdGhpcy5pbml0Q2FydEJ1dHRvbldhdGNoZXIoKTtcbiAgICB9XG5cbiAgICBpbml0Q2FydEJ1dHRvbldhdGNoZXIoKSB7XG4gICAgICBsZXQgbnVtYmVyID0gMDtcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmNhcnRCdXR0b24udGV4dENvbnRlbnQpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjdXJyZW50TnVtYmVyID0gcGFyc2VJbnQodGhpcy5jYXJ0QnV0dG9uLnRleHRDb250ZW50LCAxMCk7XG5cbiAgICAgICAgaWYgKG51bWJlciA9PT0gY3VycmVudE51bWJlcikgcmV0dXJuO1xuXG4gICAgICAgIG51bWJlciA9IGN1cnJlbnROdW1iZXI7XG5cbiAgICAgICAgaWYgKG51bWJlciA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuY2FydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZW1wdHlcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jYXJ0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJlbXB0eVwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2Fyb3VzZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICdbZGF0YS1jb21wb25lbnQ9XCJjYXJ0LWJ1dHRvblwiXSdcbiAgICApO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJvdXNlbHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIG5ldyBDYXJ0QnV0dG9uKGNhcm91c2Vsc1tpXSBhcyBIVE1MRGl2RWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn0pKCk7XG4iLCJsZXQgWVQ6IGFueTtcbmxldCBwbGF5ZXI6IGFueTtcbmxldCB2aWRlbzogSFRNTERpdkVsZW1lbnQgfCBudWxsO1xubGV0IHBsYXlCdXR0b246IEhUTUxEaXZFbGVtZW50IHwgbnVsbDtcbmxldCBwYXVzZUJ1dHRvbjogSFRNTERpdkVsZW1lbnQgfCBudWxsO1xuXG5jb25zdCBpbml0TWVkaWEgPSAoKSA9PiB7XG4gIHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnRyby12aWRlb1wiKTtcbiAgcGxheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jb21wb25lbnQ9aW50cm9QbGF5QnV0dG9uXVwiKTtcbiAgcGF1c2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY29tcG9uZW50PWludHJvUGF1c2VCdXR0b25dXCIpO1xuXG4gIGlmICghdmlkZW8gfHwgIXBsYXlCdXR0b24gfHwgIXBhdXNlQnV0dG9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheVZpZGVvKTtcbiAgcGF1c2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBhdXNlVmlkZW8pO1xuXG4gIHZpZGVvLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgcGF1c2VWaWRlbygpO1xufTtcblxuY29uc3QgZGlzYWJsZVNjcm9sbGluZyA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG59O1xuY29uc3QgZW5hYmxlU2Nyb2xsaW5nID0gKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9IFwiXCI7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xufTtcblxuY29uc3QgcGxheVZpZGVvID0gKCkgPT4ge1xuICBwYXVzZUJ1dHRvbiEuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBwbGF5QnV0dG9uIS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHZpZGVvIS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gIHZpZGVvIS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJcIjtcbiAgaWYgKHBsYXllcikge1xuICAgIHBsYXllci5wbGF5VmlkZW8oKTtcbiAgfVxuICBkaXNhYmxlU2Nyb2xsaW5nKCk7XG59O1xuY29uc3QgcGF1c2VWaWRlbyA9ICgpID0+IHtcbiAgcGxheUJ1dHRvbiEuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBwYXVzZUJ1dHRvbiEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB2aWRlbyEuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICB2aWRlbyEuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICBpZiAocGxheWVyKSB7XG4gICAgcGxheWVyLnN0b3BWaWRlbygpO1xuICB9XG4gIGVuYWJsZVNjcm9sbGluZygpO1xufTtcblxuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAvLyBJbml0IFlvdXR1YmUgQVBJXG4gIGNvbnN0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG5cbiAgdGFnLnNyYyA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaVwiO1xuICBjb25zdCBmaXJzdFNjcmlwdFRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdO1xuICBmaXJzdFNjcmlwdFRhZyEucGFyZW50Tm9kZSEuaW5zZXJ0QmVmb3JlKHRhZywgZmlyc3RTY3JpcHRUYWcpO1xuXG4gIC8vIEluaXQgY3VzdG9tIG1lZGlhIHNjcmlwdFxufSk7XG5cbmNvbnN0IGluaXRJbnRyb1ZpZGVvUGxheWVyID0gKCkgPT4ge1xuICBwbGF5ZXIgPSBuZXcgWVQuUGxheWVyKFwiaW50cm8tdmlkZW9cIiwge1xuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIHZpZGVvSWQ6IFwiQy1WcXlESHBzZjBcIixcbiAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICBjb250cm9sczogMFxuICAgIH0sXG4gICAgZXZlbnRzOiB7XG4gICAgICBvblJlYWR5OiBvblBsYXllclJlYWR5LFxuICAgICAgb25TdGF0ZUNoYW5nZTogb25QbGF5ZXJTdGF0ZUNoYW5nZVxuICAgIH1cbiAgfSk7XG5cbiAgaW5pdE1lZGlhKCk7XG59O1xuXG5jb25zdCBvblBsYXllclJlYWR5ID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgLy8gZXZlbnQudGFyZ2V0LnBsYXlWaWRlbygpO1xufTtcblxuY29uc3Qgb25QbGF5ZXJTdGF0ZUNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gIGlmIChldmVudC5kYXRhID09IFlULlBsYXllclN0YXRlLlBMQVlJTkcpIHtcbiAgICBjb25zb2xlLmxvZyhcInBsYXlpbmdcIik7XG4gIH1cbn07XG5cbih3aW5kb3cgYXMgYW55KS5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJvbllvdVR1YmVJZnJhbWVBUElSZWFkeVwiKTtcbiAgaW5pdEludHJvVmlkZW9QbGF5ZXIoKTtcbn07XG4iLCJhZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgaWYgKGlubmVyV2lkdGggPiA3NjcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0pO1xuIiwiKCgpID0+IHtcbiAgY2xhc3MgTmF2aWdhdGlvbiB7XG4gICAgY2FydEl0ZW1zPzogbnVtYmVyO1xuXG4gICAgbmF2aWdhdGlvbjogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihuYXZpZ2F0aW9uOiBIVE1MRGl2RWxlbWVudCkge1xuICAgICAgdGhpcy5uYXZpZ2F0aW9uID0gbmF2aWdhdGlvbjtcblxuICAgICAgdGhpcy5pbml0T25TY3JvbGwoKTtcbiAgICB9XG5cbiAgICBpbml0T25TY3JvbGwoKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT7CoHtcbiAgICAgICAgaWYgKHNjcm9sbFggPT09IDApIHtcbiAgICAgICAgICB0aGlzLm5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZCgndHJhbnNwYXJlbnQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm5hdmlnYXRpb24uY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNwYXJlbnQnKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2Fyb3VzZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICdbZGF0YS1jb21wb25lbnQ9XCJuYXZpZ2F0aW9uXCJdJ1xuICAgICk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcm91c2Vscy5sZW5ndGg7ICsraSkge1xuICAgICAgbmV3IE5hdmlnYXRpb24oY2Fyb3VzZWxzW2ldIGFzIEhUTUxEaXZFbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=