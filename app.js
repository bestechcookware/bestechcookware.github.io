function fixPageHeights() {
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

	if (indexPage) {
		document.body.style.backgroundColor = '#F6F6F6'

		w = document.querySelector("#indexWrapper")

		w.style.position = "fixed"
		w.style.top = s.n.h
		w.style.left = "0px"
		w.style.right = s.n.w
		w.style.bottom = s.f.h
	}

}


function preloadImage(src, cb) {
	var img = new Image()
	img.src = src
	img.onload = cb
}

function insertCarousel() {
	var car = new Image()
	car.src = '/pictures/slider-1.jpg'
	car.classList.add('car-img')
	car.id = "sliderImg"

	index = document.querySelector('#indexWrapper')
	index.appendChild(car)

	startCarousel()
}

function preloadImages() {
	preloadImage('/pictures/slider-1.jpg', () => {
		preloadImage('/pictures/slider-2.jpg', () => {
			preloadImage('/pictures/slider-3.jpg', () => {
				insertCarousel()
			})
		})
	})
}

function startCarousel() {
	setTimeout(changeSlider, 3000)
}

document.addEventListener("DOMContentLoaded", function(event) {
	fixPageHeights()

	if (indexPage) {
		preloadImages()
	}
})


sliderIndex = 1
currentOpacity = 1

function changeSlider() {
	if (sliderIndex++ === 3) { sliderIndex = 1 }
	setTimeout(easeOut, 25)
}

function easeOut() {
	currentOpacity = currentOpacity - 0.025
	slider = document.querySelector("#sliderImg")
	slider.style.opacity = currentOpacity
	if (currentOpacity <= 0) {
		changeSliderSrc()
	} else {
		setTimeout(easeOut, 25)
	}
}

function changeSliderSrc() {
	slider = document.querySelector("#sliderImg")
	slider.src = "/pictures/slider-" + sliderIndex + ".jpg"
	setTimeout(easeIn, 25)
}

function easeIn() {
	currentOpacity = currentOpacity + 0.025
	slider = document.querySelector("#sliderImg")
	slider.style.opacity = currentOpacity
	if (currentOpacity >= 1) {
		setTimeout(changeSlider, 3000)
	} else {
		setTimeout(easeIn, 25)
	}
}
