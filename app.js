document.addEventListener("DOMContentLoaded", function(event) {

navbar = document.querySelector("#globalNavbar")
footer = document.querySelector("#globalFooter")

s = {
	n: {
		h: navbar.offsetHeight + "px",
		w: navbar.offsetWidth + "px",
	},
	f: {
		h: footer.offsetHeight + "px",
		w: footer.offsetWidth + "px",
	}
}

// Set heights
document.body.style.marginTop = s.n.h
document.body.style.marginBottom = s.f.h

sliderTimeout = null

if (indexPage) {
	document.body.style.backgroundColor = '#F6F6F6'

	w = document.querySelector("#indexWrapper")

	w.style.position = "fixed"
	w.style.top = s.n.h
	w.style.left = "0px"
	w.style.right = s.n.w
	w.style.bottom = s.f.h

	slider = document.querySelector("#sliderImg")

	sliderTimeout = setTimeout(changeSlider, 3000)

}

sliderIndex = 1

function changeSlider() {
	if (sliderIndex++ === 3) { sliderIndex = 1 }

	currentOpacity = 1
	easeOutTimeout = setTimeout(easeOut, 25)
	easeInTimeout = null

	function easeOut() {
		currentOpacity = currentOpacity - 0.025
		slider.style.opacity = currentOpacity
		if (currentOpacity <= 0) {
			changeSliderSrc()
		} else {
			easeOutTimeout = setTimeout(easeOut, 25)
		}
	}

	function changeSliderSrc() {
		slider.src = "/pictures/slider-" + sliderIndex + ".jpg"
		easeInTimeOut = setTimeout(easeIn, 25)
	}

	function easeIn() {
		currentOpacity = currentOpacity + 0.025
		slider.style.opacity = currentOpacity
		if (currentOpacity >= 1) {
			// clearInterval(easeInInterval)
			// setTimeout(changeSlider, 3000)
			sliderTimeout = setTimeout(changeSlider, 3000)
		} else {
			easeInTimeout = setTimeout(easeIn, 25)
		}
	}
}

})
