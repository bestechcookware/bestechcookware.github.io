range = [ "categories", "biryani-pots", "cook-and-serve", "deep-kadais", "tawas", "fry-pans", "milk-pans", "pressure-cookers", "others"]

function ready(fn) {
	if (document.readyState != 'loading'){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

ready(function () {
	var x = window.location.hash
	if ( x !== "" && range.indexOf(x.slice(1)) !== -1 ) {
		toggleRange(x.slice(1))
	}
})

range.map(function (name) {
	var El = document.getElementById("_click_" + name)

	El.addEventListener("click", function (event) {
		toggleRange(name)
	}, false)
})

range.map(function (name) {
	var El = document.getElementById("_click2_" + name)

	if (El) {
		El.addEventListener("click", function (event) {
			toggleRange(name)
		}, false)
	}
})


function toggleRange(selectedRange) {
	range.map(function (name) {
		if (name == selectedRange) {
			document.getElementById("_list_" + name).style.display = "block"
			document.getElementById("_click_" + name).classList.add("active")
			document.getElementById("_list_" + name).scrollIntoView()
		} else {
			document.getElementById("_list_" + name).style.display = "none"
			document.getElementById("_click_" + name).classList.remove("active")
		}
	})
}
