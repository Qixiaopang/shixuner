var isFirefox = typeof document.body.style.MozUserSelect != 'undefined',
	demo = {
		scroll: 0,
		active: true
	};
ulObj = document.querySelector("#mybanner");
window.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', function(e) {
	var e = e || event,
		a = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail % 3 == 0 ? e.detail / 3 : e.detail);
		console.log(a);
	if(demo.active) {
		demo.active = false;
		console.log(demo.scroll)
		demo.scroll = (a == 1) ? demo.scroll - 1 : demo.scroll + 1;
		demo.scroll = Math.max(Math.min(demo.scroll, 4), 0);
		setTimeout(function() {
			demo.active = true;
		}, 1000)
	}
	ulObj.style.top = -demo.scroll * 100 + "vh";
	for(var i = 0, len = ulObj.getElementsByTagName("li").length; i < len; i++) {
		ulObj.getElementsByTagName("li")[i].classList.remove("active");
	}
	ulObj.getElementsByTagName("li")[demo.scroll].classList.add("active");
}, false)